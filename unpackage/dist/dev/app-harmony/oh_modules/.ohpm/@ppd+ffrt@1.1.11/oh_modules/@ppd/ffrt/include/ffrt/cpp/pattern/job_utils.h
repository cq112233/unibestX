/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @addtogroup FFRT
 * @{
 *
 * @brief Provides Function Flow Runtime (FFRT) C++ APIs.
 *
 * FFRT is a task-based concurrent runtime library that automatically schedules
 * tasks according to their dependencies, eliminating the need for manual
 * thread management.
 *
 * @since 20
 */

/**
 * @file job_utils.h
 *
 * @brief Declares utilities for job scheduling, synchronization, and fiber management.
 *
 * @library libffrt.z.so
 * @kit FunctionFlowRuntimeKit
 * @syscap SystemCapability.Resourceschedule.Ffrt.Core
 * @since 20
 */

#ifndef FFRT_JOB_UTILS_H
#define FFRT_JOB_UTILS_H

#include <cstdint>
#include <climits>
#include <unistd.h>
#include <dlfcn.h>
#include <sys/syscall.h>
#include <linux/futex.h>
#include <functional>
#include <string>
#include <thread>
#include <chrono>
#include <atomic>
#if __has_include("ffrt/fiber.h")
#include "ffrt/fiber.h"
#define _ffrt_has_fiber_feature
#endif

#ifndef FFRT_API_LOGE
#define FFRT_API_LOGE(...)
#endif
#ifndef FFRT_API_LOGD
#define FFRT_API_LOGD(...)
#endif
#ifndef FFRT_API_TRACE_INT64
#define FFRT_API_TRACE_INT64(name, value)
#endif
#ifndef FFRT_API_TRACE_SCOPE
#define FFRT_API_TRACE_SCOPE(...)
#endif
#define FFRT_API_UNLIKELY(x)     (__builtin_expect(!!(x), 0))
#define FFRT_API_LIKELY(x)       (__builtin_expect(!!(x), 1))

namespace ffrt {
/**
 * @namespace ffrt::detail
 * @brief Internal implementation details for FFRT utilities.
 */
namespace detail {
    /**
     * @brief Cache line size constant.
     */
    static constexpr uint64_t cacheline_size = 64;

    /**
     * @brief Non-copyable base class. Inherit from this to prevent copy and assignment.
     */
    struct non_copyable {
    protected:
        non_copyable() = default;
        ~non_copyable() = default;
        non_copyable(const non_copyable&) = delete;
        non_copyable& operator=(const non_copyable&) = delete;
    };
} // ffrt::detail

/**
 * @brief Wait for Event (WFE) instruction for ARM architectures.
 *
 * This function executes the ARM-specific "WFE" (Wait For Event) instruction, which puts the processor into a low-power
 * state until an event (such as a memory write or SEV instruction from another processor) occurs. It ensures memory
 * visibility across cores using a memory fence.
 *
 * @note This function is a no-op on non-ARM architectures.
 */
static inline void wfe()
{
#if (defined __aarch64__ || defined __arm__)
    __asm__ volatile("wfe" : : : "memory");
#endif
}

/**
 * @brief Sends a global event signal to wake up waiting threads.
 *
 * This function issues a "Send Event" instruction (specific to ARM architectures) to notify
 * any threads waiting in a low-power state (e.g., after a wfe() call) that an event has occurred.
 * It ensures memory visibility across threads using a memory fence.
 *
 * @note This function is a no-op on non-ARM architectures.
 */
static inline void sev()
{
#if (defined __aarch64__ || defined __arm__)
    __asm__ volatile ("sev" : : : "memory");
#endif
}

/**
 * @brief Aligns a value to the next power of two.
 *
 * @param x Indicates the input value.
 * @return The next power of two greater than or equal to x.
 */
static inline constexpr uint64_t align2n(uint64_t x)
{
    uint64_t i = 1;
    uint64_t t = x;
    while (x >>= 1) {
        i <<= 1;
    }
    return (i < t) ? (i << 1) : i;
}

/**
 * @struct capability
 * @brief Helper for dynamically loading libffrt.z.so and probing fiber feature support at runtime.
 */
struct capability {
    struct handle {
        handle()
        {
            h = dlopen("libffrt.z.so", RTLD_LAZY);
        }
        ~handle()
        {
            if (h) {
                dlclose(h);
            }
        }
        void* h;
    };
    static void* get_handle()
    {
        static handle s;
        return s.h;
    }

    static void* get_func(const char* name)
    {
        auto h = get_handle();
        if (h) {
            return dlsym(h, name);
        }
        return nullptr;
    }
#ifdef _ffrt_has_fiber_feature
    static inline auto ffrt_fiber_init_f =
        reinterpret_cast<decltype(&ffrt_fiber_init)>(capability::get_func("ffrt_fiber_init"));
    static inline auto ffrt_fiber_switch_f =
        reinterpret_cast<decltype(&ffrt_fiber_switch)>(capability::get_func("ffrt_fiber_switch"));
#endif

    /**
     * @brief Checks whether libffrt.z.so in the ROM supports the fiber feature.
     *
     * @return true if the fiber feature is supported; false otherwise.
     */
    static bool support_fiber_feature()
    {
#ifdef _ffrt_has_fiber_feature
        return ffrt_fiber_init_f && ffrt_fiber_switch_f;
#else
        return false;
#endif
    }
};

/**
 * @struct futex
 * @brief Futex-based synchronization primitives.
 * @details Provides wait and wake operations using Linux futex syscall.
 */
struct futex {
    /**
     * @brief Waits on a futex address until its value changes.
     *
     * @param uaddr Indicates the address to wait on.
     * @param val Indicates the expected value.
     */
    static inline void wait(int* uaddr, int val)
    {
        FFRT_API_LOGD("futex wait in %p", uaddr);
        int r = call(uaddr, FUTEX_WAIT_PRIVATE, val, nullptr, 0);
        (void)(r);
        FFRT_API_LOGD("futex wait %p ret %d", uaddr, r);
    }

    /**
     * @brief Wakes up threads waiting on a futex address.
     *
     * @param uaddr Indicates the address to wake.
     * @param num Indicates the number of threads to wake.
     */
    static inline void wake(int* uaddr, int num)
    {
        int r = call(uaddr, FUTEX_WAKE_PRIVATE, num, nullptr, 0);
        (void)(r);
        FFRT_API_LOGD("futex wake %p ret %d", uaddr, r);
    }

private:
    /**
     * @brief Internal futex syscall wrapper.
     */
    static inline int call(int* uaddr, int op, int val, const struct timespec* timeout, int bitset)
    {
        return syscall(SYS_futex, uaddr, op, val, timeout, NULL, bitset);
    }
};

/**
 * @struct atomic_wait
 * @brief Atomic integer with futex-based wait/notify.
 * @details Extends std::atomic<int> to support futex-based waiting and notification.
 */
struct atomic_wait : std::atomic<int> {
    /**
     * @brief Inherit all constructors from std::atomic<int>.
     */
    using std::atomic<int>::atomic;

    /**
     * @brief Inherit the assignment operator from std::atomic<int>.
     */
    using std::atomic<int>::operator=;

    /**
     * @brief Waits until the atomic value changes from val.
     *
     * @param val Indicates the expected value.
     */
    inline void wait(int val)
    {
        futex::wait(reinterpret_cast<int*>(this), val);
    }

    /**
     * @brief Notifies one waiting thread.
     */
    inline auto notify_one()
    {
        futex::wake(reinterpret_cast<int*>(this), 1);
    }

    /**
     * @brief Notifies all waiting threads.
     */
    inline void notify_all()
    {
        futex::wake(reinterpret_cast<int*>(this), INT_MAX);
    }
};

/**
 * @struct ref_obj
 * @brief Reference-counted object base class.
 *
 * @tparam T Object type.
 */
template <class T>
struct ref_obj {
    /**
     * @struct ptr
     * @brief Smart pointer for reference-counted objects.
     *
     * Provides automatic reference counting and resource management for objects derived from ref_obj.
     */
    struct ptr {
        /**
         * @brief Type alias for the template parameter type T.
         */
        using type = T;

        /**
         * @brief Default constructor. Initializes as a null pointer.
         */
        ptr() {}

        /**
         * @brief Constructs from a raw pointer, taking ownership.
         *
         * @param p Indicates the raw pointer to the managed object.
         */
        ptr(void* p) : p(static_cast<T*>(p)) {}

        /**
         * @brief Destructor. Decreases the reference count and deletes the object if necessary.
         */
        ~ptr()
        {
            reset();
        }

        /**
         * @brief Copy constructor. Increases the reference count.
         *
         * @param h Indicates the smart pointer to copy from.
         */
        inline ptr(ptr const& h)
        {
            *this = h;
        }

        /**
         * @brief Copy assignment operator. Increases the reference count.
         *
         * @param h Indicates the smart pointer to assign from.
         * @return Reference to this pointer.
         */
        inline ptr& operator=(ptr const& h)
        {
            if (this != &h) {
                T* op = p;
                p = h.p;
                if (p) {
                    p->inc_ref();
                }
                if (op) {
                    op->dec_ref();
                }
            }
            return *this;
        }

        /**
         * @brief Move constructor. Transfers ownership without increasing the reference count.
         *
         * @param h Indicates the smart pointer to move from.
         */
        inline ptr(ptr&& h)
        {
            *this = std::move(h);
        }

        /**
         * @brief Move assignment operator. Transfers ownership without increasing the reference count.
         *
         * @param h Indicates the smart pointer to move from.
         * @return Reference to this pointer.
         */
        inline ptr& operator=(ptr&& h)
        {
            if (this != &h) {
                T* op = p;
                p = h.p;
                h.p = nullptr;
                if (op) {
                    op->dec_ref();
                }
            }
            return *this;
        }

        /**
         * @brief Returns the raw pointer to the managed object.
         *
         * @return Raw pointer to the object.
         */
        constexpr inline T* get()
        {
            return p;
        }

        /**
         * @brief Returns the raw pointer to the managed object (const version).
         *
         * @return Const raw pointer to the object.
         */
        constexpr inline const T* get() const
        {
            return p;
        }

        /**
         * @brief Arrow operator for member access (const version).
         *
         * This operator is provided for a const `ptr` instance and returns a non-const
         * raw pointer by explicitly casting away the const qualifier. This is a specific
         * design choice for specialized classes like `job_partner` and `job_ring`,
         * where all core public methods are designed to be mutable and non-const. It allows
         * these methods to be called from a const `ptr` context, such as within a non-mutable
         * lambda capture, without requiring the lambda to be declared as mutable.
         *
         * @warning This pattern is a significant break from C++ const correctness and is
         * generally considered unsafe. It is only used here due to the specific, fully
         * mutable nature of the managed objects, where modification is the intended behavior.
         *
         * @return Raw pointer to the object.
         */
        constexpr inline T* operator -> () const
        {
            return p;
        }

        /**
         * @brief Conversion operator to void pointer.
         *
         * @return Raw pointer as void*.
         */
        inline operator void* () const
        {
            return p;
        }

        /**
         * @brief Releases the owned object and decreases the reference count.
         */
        inline void reset()
        {
            if (p) {
                p->dec_ref();
                p = nullptr;
            }
        }

    private:
        T* p = nullptr; ///< Raw pointer to the managed reference-counted object.
    };

    /**
     * @brief Creates a new reference-counted object.
     */
    template<class... Args>
    static inline ptr make(Args&& ... args)
    {
        auto p = new T(std::forward<Args>(args)...);
        return ptr(p);
    }

    /**
     * @brief Returns a singleton instance.
     */
    template<class... Args>
    static ptr& singleton(Args&& ... args)
    {
        static ptr s = make(std::forward<Args>(args)...);
        return s;
    }

    /**
     * @brief Increments the reference count.
     */
    inline void inc_ref()
    {
        ref.fetch_add(1, std::memory_order_relaxed);
    }

    /**
     * @brief Decrements the reference count and deletes the object if zero.
     */
    inline void dec_ref()
    {
        if (ref.fetch_sub(1, std::memory_order_release) == 1) {
            std::atomic_thread_fence(std::memory_order_acquire);
            delete static_cast<T*>(this);
        }
    }

private:
    std::atomic_uint64_t ref{1}; ///< Atomic reference counter for managing the lifetime of the object.
};

/**
 * @struct mpmc_queue
 * @brief Lock-free multi-producer multi-consumer queue.
 *
 * @tparam T Element type.
 */
template <typename T>
struct mpmc_queue : detail::non_copyable {
    /**
     * @brief Constructs a queue with the given capacity.
     *
     * @param cap Indicates the capacity of the queue.
     */
    mpmc_queue(uint64_t cap) : capacity(align2n(cap)), mask(capacity - 1)
    {
        uint64_t us = 1;
        q = nullptr;
        for (;;) {
            if (std::is_pod_v<Item>) {
                q = static_cast<Item*>(malloc(capacity * sizeof(Item)));
            } else {
                q = new (std::nothrow) Item[capacity];
            }
            if (q) break;
            std::this_thread::sleep_for(std::chrono::microseconds(us));
            us = us << 1;
        }

        for (size_t i = 0; i < capacity; ++i) {
            q[i].iwrite_exp.store(i, std::memory_order_relaxed);
            q[i].iread_exp.store(-1, std::memory_order_relaxed);
        }

        iwrite_.store(0, std::memory_order_relaxed);
        iread_.store(0, std::memory_order_relaxed);
    }

    /**
     * @brief Destructor.
     */
    ~mpmc_queue()
    {
        if (std::is_pod_v<Item>) {
            free(q);
        } else {
            delete [] q;
        }
    }

    /**
     * @brief Returns the current size of the queue.
     */
    inline uint64_t size() const
    {
        auto head = iread_.load(std::memory_order_relaxed);
        return iwrite_.load(std::memory_order_relaxed) - head;
    }

    /**
     * @brief Attempts to push an element into the queue.
     *
     * @tparam Data The type of data to be pushed into the queue. Must be movable.
     * @param data Indicates the element to push.
     * @return true if successful, false otherwise.
     */
    template <class Data>
    inline bool try_push(Data&& data)
    {
        Item* i;
        auto iwrite = iwrite_.load(std::memory_order_relaxed);
        for (;;) {
            i = &q[iwrite & mask];
            if (i->iwrite_exp.load(std::memory_order_acquire) != iwrite) {
                return false;
            }
            if ((iwrite_.compare_exchange_weak(iwrite, iwrite + 1, std::memory_order_relaxed))) {
                break;
            }
        }
        i->data = std::forward<Data>(data);
        i->iread_exp.store(iwrite, std::memory_order_release);
        return true;
    }

    /**
     * @brief Attempts to pop an element from the queue.
     *
     * @tparam R The type of data to be popped from the queue. Must be assignable from the queue's element type.
     * @param result Indicates the output parameter for the popped element.
     * @return true if successful, false otherwise.
     */
    template <class R>
    inline bool try_pop(R& result)
    {
        Item* i;
        auto iread = iread_.load(std::memory_order_relaxed);
        for (;;) {
            i = &q[iread & mask];
            if (i->iread_exp.load(std::memory_order_acquire) != iread) {
                return false;
            }
            if (iread_.compare_exchange_weak(iread, iread + 1, std::memory_order_relaxed)) {
                break;
            }
        }
        if constexpr(std::is_same_v<R, T>) {
            result = std::move(i->data);
        } else {
            result(i->data);
        }
        i->iwrite_exp.store(iread + capacity, std::memory_order_release);
        return true;
    }

private:
    uint64_t capacity; ///< Capacity of the queue (must be a power of two).
    uint64_t mask;     ///< Bitmask used for efficient index calculation (capacity - 1).

    /**
     * @brief Internal structure representing a queue slot.
     */
    struct Item {
        T data;                           ///< Data stored in the queue slot.
        std::atomic<uint64_t> iwrite_exp; ///< Expected write index after a read operation.
        std::atomic<uint64_t> iread_exp;  ///< Expected read index after a write operation
    };

    alignas(detail::cacheline_size) Item* q;                       ///< Pointer to the array of queue slots (items).
    alignas(detail::cacheline_size) std::atomic<uint64_t> iwrite_; ///< Global write index for the queue.
    alignas(detail::cacheline_size) std::atomic<uint64_t> iread_;  ///< Global read index for the queue.
};

/**
 * @struct spsc_queue
 * @brief Lock-free single-producer single-consumer queue.
 *
 * @tparam T Element type.
 */
template<class T>
struct spsc_queue : detail::non_copyable {
    /**
     * @brief Constructs a queue with the given capacity.
     *
     * @param cap Indicates the capacity of the queue.
     */
    spsc_queue(uint64_t cap) : capacity(align2n(cap)), mask(capacity - 1)
    {
        cached_write = capacity - 1;
        uint64_t us = 1;
        q = nullptr;
        for (;;) {
            if (std::is_pod_v<Item>) {
                q = static_cast<Item*>(malloc(sizeof(Item) * capacity));
            } else {
                q = new (std::nothrow) Item[capacity];
            }
            if (q) break;
            std::this_thread::sleep_for(std::chrono::microseconds(us));
            us = us << 1;
        }
        for (size_t i = 0; i < capacity; ++i) {
            q[i].valid.store(false, std::memory_order_relaxed);
        }

        iwrite_ = 0;
        iread_.store(0, std::memory_order_relaxed);
    }

    /**
     * @brief Destructor.
     */
    ~spsc_queue()
    {
        if (std::is_pod_v<Item>) {
            free(q);
        } else {
            delete[] q;
        }
    }

    /**
     * @brief Attempts to push an element into the queue.
     *
     * @tparam Data The type of data to be pushed into the queue. Must be movable.
     * @param data Indicates the element to push.
     * @return true if successful, false otherwise.
     */
    template <class Data>
    inline bool try_push(Data&& data)
    {
        if (cached_write == 0) {
            uint64_t iread = iread_.load(std::memory_order_acquire);
            cached_write = iread + capacity - 1 - iwrite_;
            if (cached_write == 0) {
                return false;
            }
        }

        auto& i = q[iwrite_ & mask];
        i.data = std::forward<Data>(data);
        i.valid.store(true, std::memory_order_release);
        iwrite_++;
        cached_write--;
        return true;
    }

    /**
     * @brief Attempts to pop an element from the queue.
     *
     * @tparam R The type of data to be popped from the queue. Must be assignable from the queue's element type.
     * @param result Indicates the output parameter for the popped element.
     * @return true if successful, false otherwise.
     */
    template <class R>
    inline bool try_pop(R& result)
    {
        auto& i = q[iread_.load(std::memory_order_relaxed) & mask];
        if (!i.valid.load(std::memory_order_acquire)) {
            return false;
        }

        if constexpr(std::is_same_v<R, T>) {
            result = std::move(i.data);
        } else {
            result(i.data);
        }
        i.valid.store(false, std::memory_order_relaxed);
        iread_.fetch_add(1, std::memory_order_release);
        return true;
    }

private:
    uint64_t capacity;      ///< Capacity of the queue (must be a power of two).
    uint64_t mask;          ///< Bitmask used for efficient index calculation (capacity - 1).
    uint64_t cached_write;  ///< Producer's cached remaining capacity counter.

    /**
     * @brief Internal storage structure for queue elements.
     */
    struct Item {
        T data;                  ///< Stored element data.
        std::atomic<bool> valid; ///< Atomic flag indicating element readiness (true when consumable).
    };

    Item* q;                                                            ///< Pointer to the ring buffer array.
    alignas(detail::cacheline_size) uint64_t iwrite_ = 0;               ///< Producer's write index (thread-local).
    alignas(detail::cacheline_size) std::atomic<uint64_t> iread_ = 0;   ///< Consumer's read index (atomic).
};

/**
 * @brief Lock-free queue template with configurable producer/consumer modes.
 *
 * This template provides a flexible lock-free queue implementation that adapts to different
 * concurrency scenarios through template parameters. It selects the optimal underlying implementation
 * based on whether multiple producers and/or consumers are needed:
 * - Multi-producer + Multi-consumer: inherits from mpmc_queue.
 * - Single-producer + Single-consumer: inherits from spsc_queue.
 *
 * @tparam MultiProducer If true, queue supports multiple producer threads.
 * @tparam MultiConsumer If true, queue supports multiple consumer threads.
 * @tparam T Type of elements stored in the queue.
 */
template <bool MultiProducer, bool MultiConsumer, typename T>
struct lf_queue: mpmc_queue<T> {
    using mpmc_queue<T>::mpmc_queue;
};

/**
 * @brief Specialization of lf_queue for single-producer single-consumer scenario.
 *
 * @tparam T Type of elements stored in the queue.
 */
template <typename T>
struct lf_queue<false, false, T>: spsc_queue<T> {
    using spsc_queue<T>::spsc_queue;
};

/**
 * @brief Structure representing a pointer-based task.
 */
struct ptr_task {
    void(*f)(void*); ///< Function pointer.
    void* arg;       ///< Argument pointer.
};

/**
 * @struct runnable_queue
 * @brief Runnable queue based on a given queue type.
 *
 * @tparam Queue Queue template type.
 */
template<template<class> class Queue>
struct runnable_queue : Queue<ptr_task> {
    /**
     * @brief Constructs a runnable queue.
     *
     * @param depth Queue depth.
     * @param name Queue name.
     */
    runnable_queue(uint64_t depth, const std::string& name) : Queue<ptr_task>(depth), name(name) {}

    /**
     * @brief Attempts to run a task from the queue.
     *
     * @return true if a task was run, false otherwise.
     */
    inline bool try_run()
    {
        ptr_task job;
        auto suc = this->try_pop(job);
        if (suc) {
            FFRT_API_TRACE_INT64(name.c_str(), this->size());
            job.f(job.arg);
            return true;
        }
        return false;
    }

    /**
     * @brief Pushes a task into the queue with a given policy.
     *
     * @tparam Policy Push policy (0: sleep, 1: run).
     * @param f Function pointer.
     * @param p Argument pointer.
     */
    template <int Policy>
    inline void push(void(*f)(void*), void* p)
    {
        uint64_t us = 1;
        while (!this->try_push(ptr_task{f, p})) {
            if constexpr(Policy == 0) {
                std::this_thread::sleep_for(std::chrono::microseconds(us));
                us = us << 1;
            } else if constexpr(Policy == 1) {
                try_run();
            }
        }
        FFRT_API_TRACE_INT64(name.c_str(), this->size());
    }

    const std::string name; ///< Queue name.
};

/**
 * @struct clock
 * @brief High-resolution clock utilities.
 */
struct clock {
    using stamp = std::chrono::time_point<std::chrono::high_resolution_clock>;

    /**
     * @brief Returns the current time stamp.
     */
    static inline stamp now()
    {
        return std::chrono::high_resolution_clock::now();
    }

    /**
     * @brief Returns the nanoseconds between two time stamps.
     *
     * @param from Start time.
     * @param to End time (default: now).
     * @return Nanoseconds between from and to.
     */
    static inline uint64_t ns(const stamp& from, stamp to = now())
    {
        return uint64_t(std::chrono::duration_cast<std::chrono::nanoseconds>(to - from).count());
    }
};

#ifdef _ffrt_has_fiber_feature
/**
 * @struct fiber
 * @brief Lightweight fiber implementation.
 *
 * @tparam UsageId Usage identifier.
 * @tparam FiberLocal Type for fiber-local storage.
 * @tparam ThreadLocal Type for thread-local storage.
 */
template <int UsageId = 0, class FiberLocal = char, class ThreadLocal = char>
struct fiber : detail::non_copyable {
    /**
     * @brief Thread environment for fiber execution.
     */
    struct thread_env :  detail::non_copyable {
        fiber* cur = nullptr;
        bool (*cond)(void*) = nullptr;
        ThreadLocal tl;
    };

    /**
     * @brief Returns the thread-local environment.
     */
#ifdef FFRT_MULTI_DSO_EXTERN_FIBER_ENV
    static __attribute__((visibility("default"), noinline)) thread_env& env();
#else
    static __attribute__((visibility("default"), noinline)) thread_env& env()
    {
        static thread_local thread_env ctx;
        return ctx;
    }
#endif

    /**
     * @brief Initializes a fiber with a function and stack.
     *
     * @param f Function to run.
     * @param stack Stack memory.
     * @param stack_size Stack size. Must be large enough to hold both the fiber header and the fiber context.
     * @return Pointer to the created fiber; `nullptr` if `stack_size` is too small.
     */
    static fiber* init(std::function<void()>&& f, void* stack, size_t stack_size)
    {
        auto c = static_cast<fiber*>(stack);
        if FFRT_API_UNLIKELY(!capability::ffrt_fiber_init_f ||
            capability::ffrt_fiber_init_f(&c->fb, reinterpret_cast<void(*)(void*)>(fiber_entry), c,
                static_cast<char*>(stack) + sizeof(fiber), stack_size - sizeof(fiber))) {
            return nullptr;
        }
        new(&c->fn) std::function<void()>(std::forward<std::function<void()>>(f));
        new(&c->local_) FiberLocal;
        c->id_ = idx.fetch_add(1, std::memory_order_relaxed);
        FFRT_API_LOGD("fiber %llu create", c->id_);
        return c;
    }

    /**
     * @brief Destroys the fiber.
     */
    inline void destroy()
    {
        FFRT_API_LOGD("fiber %llu destroy", id_);
        fn.~function<void()>();
        local_.~FiberLocal();
    }

    /**
     * @brief Starts the fiber execution.
     *
     * @return true if finished, false otherwise.
     */
    bool start()
    {
        bool done;
        auto& e = fiber::env();
        // Save the fiber that was running on this thread before switching in.
        // `e.cur` is thread-local state read by suspend() and submit_to_master() to
        // identify the running fiber. start() may be (re)entered while another fiber is
        // already in flight on this thread — via a nested start() (a fiber's body starts
        // a child fiber) or a cross-thread resume (a partner worker restarts a suspended
        // fiber through suspendable_job_func). We must restore, not reset, `cur`;
        // otherwise the outer fiber resumes with a stale/null `cur`, making a later
        // suspend() dereference null or submit_to_master() run its job inline on a
        // fiber stack.
        auto saved_cur = e.cur;
        do {
            e.cond = nullptr;
            e.cur = this;
            FFRT_API_LOGD("job %llu switch in", id_);
            // Irrecoverable: capability::ffrt_fiber_switch_f is dereferenced with no null check.
            // dlopen only decouples the link-time dependency on libffrt.z.so's fiber symbols,
            // not a runtime fallback; on ROMs without fiber support this path must never run.
            // Guard callers (e.g. job_partner::submit_to_master()) by checking
            // ffrt::capability::support_fiber_feature().
            capability::ffrt_fiber_switch_f(&link, &fb);
            FFRT_API_LOGD("job %llu switch out", id_);
            done = this->id_ == 0;
        } while (e.cond && !(e.cond)(this));
        e.cond = nullptr;
        e.cur = saved_cur; // resume the outer fiber, or nullptr if entered from a native stack
        return done;
    }

    /**
     * @brief Suspends the current fiber.
     *
     * @tparam is_final Whether this is the final suspension.
     * @param e Thread environment.
     * @param cond Condition function.
     */
    template<bool is_final = false>
    static inline void suspend(thread_env& e, bool (*cond)(void*) = nullptr)
    {
        auto j = e.cur;
        if constexpr(is_final) {
            j->id_ = 0;
        } else {
            e.cond = cond;
        }
        // `e.cur` is intentionally left unchanged: its lifecycle is owned by start(),
        // which saves/restores it around each switch-in. Clearing it here would drop
        // the outer fiber's identity on a nested or cross-thread resume (see start()).

        // Irrecoverable: capability::ffrt_fiber_switch_f is dereferenced with no null check.
        // dlopen only decouples the link-time dependency on libffrt.z.so's fiber symbols,
        // not a runtime fallback; on ROMs without fiber support this path must never run.
        // Guard callers (e.g. job_partner::submit_to_master()) by checking
        // ffrt::capability::support_fiber_feature().
        capability::ffrt_fiber_switch_f(&j->fb, &j->link);
    }

    /**
     * @brief Suspends the current fiber.
     *
     * @tparam is_final Whether this is the final suspension.
     * @param cond Condition function.
     */
    template<bool is_final = false>
    static inline void suspend(bool (*cond)(void*) = nullptr)
    {
        suspend<is_final>(fiber::env(), cond);
    }

    /**
     * @brief Returns the fiber-local storage.
     */
    FiberLocal& local()
    {
        return local_;
    }

    /**
     * @brief Gets the unique identifier of the fiber.
     *
     * @return Unique identifier of the fiber.
     */
    uint64_t id()
    {
        return id_;
    }

private:
    /**
     * @brief Fiber entry function. Executes the user function and suspends the fiber upon completion.
     *
     * @param c Pointer to the fiber object.
     */
    static void fiber_entry(fiber* c)
    {
        c->fn();
        c->fn = nullptr;
        suspend<true>();
    }

    ffrt_fiber_t fb;          ///< Fiber context for execution.
    ffrt_fiber_t link;        ///< Link to the previous fiber context.
    std::function<void()> fn; ///< Function to be executed by the fiber.
    uint64_t id_;             ///< Fiber identifier.
    FiberLocal local_;        ///< Fiber-local storage.

    static inline std::atomic_uint64_t idx{1}; ///< Atomic counter for generating unique fiber IDs.
};
#endif

/**
 * @struct type_size
 * @brief Template structure to retrieve the size of a type at compile time.
 *
 * @tparam T The type whose size will be retrieved.
 */
template <typename T>
struct type_size {
    /**
     * @brief Compile-time constant representing the size of type T.
     */
    static constexpr size_t value = sizeof(T);
};

/**
 * @struct type_size
 * @brief Template specialization of type_size for void type.
 */
template <>
struct type_size<void> {
    /**
     * @brief Compile-time constant representing the size of void type.
     */
    static constexpr size_t value = 0;
};

/**
 * @struct job_promise_obj
 * @brief Reference-counted object managing the lifecycle and result of an asynchronous job.
 *
 * This template struct implements the core logic for an asynchronous job promise, handling
 * task execution, result storage, status tracking, and synchronization between producers
 * and consumers of the job result. It uses reference counting (via inheritance from ref_obj)
 * for automatic memory management.
 *
 * @tparam R The return type of the job. Special handling is provided for void return types.
 */
template<class R>
struct job_promise_obj : ref_obj<job_promise_obj<R>> {
    /**
     * @brief Destructor for job_promise_obj.
     */
    ~job_promise_obj()
    {
        if (is_ready()) {
            if constexpr(!std::is_void_v<R>) {
                ((R*)blob)->~R();
            }
        }
    }

    /**
     * @brief Checks if the job has completed and the result is available.
     *
     * @return true if the job is complete (status is ready), false if the job is still pending or executing.
     */
    inline bool is_ready() const
    {
        return stat.load(std::memory_order_acquire) == ready;
    }

    /**
     * @brief Retrieves the job result, waiting if necessary.
     *
     * Blocks until the job completes (if not already ready) and returns the result. Supports
     * optional busy waiting, callback-based waiting, and automatic execution of the job if
     * it's still pending (based on template parameters).
     *
     * @tparam TryRun If true, attempts to execute the job if it's still pending when waiting.
     * @tparam BusyWaitUS Duration (in microseconds) to perform busy waiting before falling back to blocking.
     * @param on_wait Optional callback function invoked periodically while waiting. If it returns false,
     *                busy waiting is aborted early.
     * @return For non-void R: The job's result (by reference).
     * @return For void R: No return value.
     */
    template <bool TryRun = true, uint64_t BusyWaitUS = 100>
    inline decltype(auto) get(const std::function<bool()>& on_wait = nullptr)
    {
        if (!is_ready()) {
            wait<TryRun, BusyWaitUS>(on_wait);
        }
        if constexpr(std::is_void_v<R>) {
            return;
        } else {
            return (*(R*)blob);
        }
    }

    /**
     * @brief Attempts to execute the job if it's still pending.
     *
     * Atomically checks if the job is in the pending state and, if so, transitions it to executing,
     * runs the job, and marks it as ready. Returns false if the job is already executing or completed.
     *
     * @return true if the job was successfully executed, false if the job could not be
     *         executed (already in progress or completed).
     */
    inline bool try_execute()
    {
        if (try_acquire()) {
            call();
            release();
            return true;
        }
        return false;
    }

    void* owner;  ///< Opaque pointer to the owner of this job promise (implementation-defined).
private:
    /**
     * @brief Constructs a job_promise_obj with a callable task.
     *
     * @param func The job task to execute, returning a value of type R.
     */
    job_promise_obj(std::function<R()>&& func) : func(std::forward<std::function<R()>>(func)) {}

    /**
     * @brief Atomically attempts to acquire the job for execution.
     *
     * @return true if the state was successfully transitioned to executing, false otherwise.
     */
    inline bool try_acquire()
    {
        int32_t exp = pending;
        return stat.compare_exchange_strong(exp, executing, std::memory_order_acquire, std::memory_order_relaxed);
    }

    /**
     * @brief Marks the job as completed and notify waiters.
     */
    inline void release()
    {
        if (stat.load() != executing) abort();
        stat.store(ready, std::memory_order_release);
        sev();
        if (waiter.exchange(0) == 1) {
            waiter.notify_all();
        }
    }

    /**
     * @brief Executes the job and stores its result.
     */
    inline void call()
    {
        if constexpr (std::is_void_v<R>) {
            func();
        } else {
            new (blob) R(func());
        }
    }

    /**
     * @brief Waits for the job to complete with configurable waiting strategies.
     *
     * @tparam TryRun If true, attempts to execute the job if pending.
     * @tparam BusyWaitUS Duration (in microseconds) for busy waiting.
     * @param on_wait Optional callback for custom waiting logic.
     */
    template <bool TryRun = true, uint64_t BusyWaitUS = 100>
    inline void wait(const std::function<bool()>& on_wait = nullptr)
    {
        if (TryRun && try_acquire()) {
            call();
            release();
            return;
        }

        if (on_wait) {
            while (!is_ready() && on_wait());
            if (is_ready()) return;
        }
        if (BusyWaitUS) {
            auto s = clock::now();
            do {
                if (is_ready()) return;
                wfe();
            } while (clock::ns(s) < BusyWaitUS * 1000);
        }

        while (!is_ready()) {
            waiter = 1;
            if (!is_ready()) {
                waiter.wait(1);
            }
            if (waiter.exchange(0) == 1) {
                waiter.notify_all();
            }
        }
    }

    /**
     * @brief Job execution states.
     *
     * - pending: Job has not started execution.
     * - executing: Job is currently being executed by a thread.
     * - ready: Job has completed and result is available.
     */
    enum {
        pending,
        executing,
        ready
    };

    std::function<R()> func;            ///< The job task to execute.
    char blob[type_size<R>::value];     ///< Storage for the job result (size 0 for void R).
    std::atomic_int32_t stat{pending};  ///< Atomic state tracking (pending/executing/ready).
    atomic_wait waiter = 0;             ///< Synchronization primitive for waiting threads.

    friend ref_obj<job_promise_obj<R>>; ///< Allow ref_obj base to access private constructor.
};

/**
 * @struct job_promise
 * @brief Reference-counted handle to an asynchronous job promise.
 *
 * This template struct provides a type-safe wrapper around `job_promise_obj<R>::ptr`,
 * exposing a simplified interface for interacting with asynchronous jobs. It inherits
 * the reference-counting behavior from the base class while adding job-specific methods
 * for status checking, result retrieval, and execution attempts.
 *
 * @tparam R The return type of the associated asynchronous job, matching the underlying `job_promise_obj`.
 */
template<class R>
struct job_promise : public job_promise_obj<R>::ptr {
    /**
     * @brief Type alias for the base class (`job_promise_obj<R>::ptr`).
     */
    using Base = typename job_promise_obj<R>::ptr;

    /**
     * @brief Inherit base class constructors.
     */
    using Base::Base;

    /**
     * @brief Copy constructor from a base class instance.
     *
     * @param p Base class pointer to wrap in this job_promise.
     */
    job_promise(const Base& p) : Base(p) {}

    /**
     * @brief Checks if the associated job has completed.
     *
     * Delegates to the underlying `job_promise_obj<R>::is_ready()` method to determine
     * if the job has finished execution and its result (if any) is available.
     *
     * @return true if the job is complete and result is ready, false if the job is still pending or executing.
     */
    inline bool is_ready() const
    {
        return Base::get()->is_ready();
    }

    /**
     * @brief Retrieves the job result, waiting if necessary.
     *
     * Forwards to the underlying `job_promise_obj<R>::get()` method to retrieve the job result,
     * blocking until completion if the result is not yet available. Supports the same template
     * parameters and callback mechanism as the underlying implementation.
     *
     * @tparam TryRun If true, attempts to execute the job if pending during waiting.
     * @tparam BusyWaitUS Duration (in microseconds) for busy waiting before blocking.
     * @param on_wait Optional callback invoked periodically while waiting; return false to abort early.
     * @return For non-void R: The job's result (by reference).
     * @return For void R: No return value.
     */
    template <bool TryRun = true, uint64_t BusyWaitUS = 100>
    inline decltype(auto) get(const std::function<bool()>& on_wait = nullptr)
    {
        return Base::get()->template get<TryRun, BusyWaitUS>(on_wait);
    }

    /**
     * @brief Attempts to execute the pending job.
     *
     * @return true if the job was successfully executed, false if the job was already executing or completed.
     */
    inline bool try_execute()
    {
        return Base::get()->try_execute();
    }

    /**
     * @brief Allow job_partner access to private members.
     *
     * Grants friendship to `job_partner` with any UsageId to enable implementation-specific
     * interactions with the job promise.
     */
    template <uint64_t UsageId>
    friend struct job_partner;
};

/**
 * @brief Factory function to create a new job_promise with a given task.
 *
 * Constructs a new `job_promise_obj<R>` instance wrapping the provided function,
 * then returns a `job_promise<R>` handle to manage it. This function handles the
 * proper initialization and reference counting setup of the underlying job promise object.
 *
 * @tparam R The return type of the job task, determining the specialization of job_promise.
 * @param func Rvalue reference to a std::function representing the job task to execute.
 *             The function will be forwarded to the job_promise_obj constructor.
 * @return job_promise<R> A reference-counted handle to the newly created job promise.
 */
template<class R>
static inline job_promise<R> make_job_promise(std::function<R()>&& func)
{
    return job_promise_obj<R>::make(std::forward<std::function<R()>>(func));
}
} // namespace ffrt

#endif // FFRT_JOB_UTILS_H
/** @} */
