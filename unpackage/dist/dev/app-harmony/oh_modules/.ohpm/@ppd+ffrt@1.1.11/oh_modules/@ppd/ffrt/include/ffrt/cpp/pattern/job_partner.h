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
 * @file job_partner.h
 *
 * @brief Declares the {@link ffrt::job_partner_attr} and {@link ffrt::job_partner} interfaces in C++.
 *
 * @library libffrt.z.so
 * @kit FunctionFlowRuntimeKit
 * @syscap SystemCapability.Resourceschedule.Ffrt.Core
 * @since 20
 */

#ifndef FFRT_JOB_PARTNER_H
#define FFRT_JOB_PARTNER_H

#include <functional>
#include <string>
#include <atomic>
#include "job_utils.h"
#include "ffrt/cpp/task.h"

namespace ffrt {
/**
 * @struct job_partner_attr
 * @brief Defines the job partner attribute structure for controlling worker concurrency.
 *
 * This structure provides initialization and configuration for job partner attributes,
 * including QoS, maximum parallelism, ratio, threshold and busy wait time.
 *
 * The relationship between job number and partner number is illustrated as follows:
 * @verbatim
 * partner_num
 *     ^
 *     |
 *     |------------------ max_parallelism
 *     |       /
 *     |      / ratio
 *     |     /
 *     +------------------------------> job_num
 *       threshold
 * @endverbatim
 *
 * - The vertical axis is partner_num, and the horizontal axis is job_num.
 * - Threshold: When job_num is less than threshold, partner_num is 0.
 * - Ratio control: When job_num is between threshold and "max_parallelism * ratio + threshold",
 *                  partner_num is calculated as "round((job_num - threshold) / ratio)".
 * - Maximum value: When job_num is greater than "max_parallelism * ratio + threshold",
 *                  partner_num is the maximum value.
 *
 * @since 20
 */
struct job_partner_attr {
    /**
     * @brief Sets the Quality of Service (QoS) level for partner workers.
     *
     * @param v Indicates the QoS value (e.g., ffrt::qos_user_initiated).
     * @return Reference to the updated job_partner_attr object.
     */
    inline job_partner_attr& qos(int v)
    {
        this->qos_.store(v, std::memory_order_relaxed);
        return *this;
    }

    /**
     * @brief Sets the maximum number of partner workers allowed.
     *
     * @param v Indicates the maximum parallelism (≥ 1).
     * @return Reference to the updated job_partner_attr object.
     */
    inline job_partner_attr& max_parallelism(uint64_t v)
    {
        this->max_parallelism_.store(v, std::memory_order_relaxed);
        return *this;
    }

    /**
     * @brief Sets the ratio for scaling partner count relative to job count.
     *
     * @param v Indicates the ratio value (≥ 1). Higher values reduce partner growth rate.
     * @return Reference to the updated job_partner_attr object.
     */
    inline job_partner_attr& ratio(uint64_t v)
    {
        this->ratio_.store(v, std::memory_order_relaxed);
        return *this;
    }

    /**
     * @brief Sets the job count threshold for activating the first partner.
     *
     * @param v Indicates the threshold value (≥ 0). No partners are spawned below this threshold.
     * @return Reference to the updated job_partner_attr object.
     */
    inline job_partner_attr& threshold(uint64_t v)
    {
        this->threshold_.store(v, std::memory_order_relaxed);
        return *this;
    }

    /**
     * @brief Sets the busy wait time for the last active partner before exiting.
     *
     * @param us Indicates the busy wait duration in microseconds (≥ 0).
     *           Prevents frequent worker creation/destruction.
     * @return Reference to the updated job_partner_attr object.
     */
    inline job_partner_attr& busy(uint64_t us)
    {
        this->busy_us_.store(us, std::memory_order_relaxed);
        return *this;
    }

    /**
     * @brief Gets the current QoS level.
     *
     * @return QoS value.
     */
    inline int qos() const
    {
        return this->qos_.load(std::memory_order_relaxed);
    }

    /**
     * @brief Gets the maximum parallelism.
     *
     * @return Maximum number of partner workers.
     */
    inline uint64_t max_parallelism() const
    {
        return this->max_parallelism_.load(std::memory_order_relaxed);
    }

    /**
     * @brief Gets the scaling ratio.
     *
     * @return Ratio value.
     */
    inline uint64_t ratio() const
    {
        return this->ratio_.load(std::memory_order_relaxed);
    }

    /**
     * @brief Gets the job count threshold.
     *
     * @return Threshold value.
     */
    inline uint64_t threshold() const
    {
        return this->threshold_.load(std::memory_order_relaxed);
    }

    /**
     * @brief Gets the busy wait time.
     *
     * @return Busy wait duration in microseconds.
     */
    inline uint64_t busy() const
    {
        return this->busy_us_.load(std::memory_order_relaxed);
    }

    /**
     * @brief Default constructor. Initializes attributes to default values.
     */
    job_partner_attr() = default;

    /**
     * @brief Copy constructor.
     */
    job_partner_attr(const job_partner_attr& other)
    {
        *this = other;
    }

    /**
     * @brief Copy assignment operator.
     */
    inline job_partner_attr& operator=(job_partner_attr const& other)
    {
        if (this != &other) {
            qos_.store(other.qos(), std::memory_order_relaxed);
            max_parallelism_.store(other.max_parallelism(), std::memory_order_relaxed);
            ratio_.store(other.ratio(), std::memory_order_relaxed);
            threshold_.store(other.threshold(), std::memory_order_relaxed);
            busy_us_.store(other.busy(), std::memory_order_relaxed);
        }
        return *this;
    }
private:
    std::atomic_int qos_ = static_cast<int>(ffrt::qos_user_initiated);  ///< QoS level.
    std::atomic_uint64_t max_parallelism_ = default_max_parallelism;    ///< Max partner count.
    std::atomic_uint64_t ratio_ = default_partner_ratio;                ///< Scaling ratio.
    std::atomic_uint64_t threshold_ = default_partner_threshold;        ///< Activation threshold.
    std::atomic_uint64_t busy_us_ = default_partner_busy_us;            ///< Busy wait time (us).

    static constexpr uint64_t default_max_parallelism = 2;      ///< Default max parallelism.
    static constexpr uint64_t default_partner_ratio = 20;       ///< Default scaling ratio.
    static constexpr uint64_t default_partner_threshold = 0;    ///< Default activation threshold.
    static constexpr uint64_t default_partner_busy_us = 100;    ///< Default busy wait time (us).
};

/**
 * @struct job_partner
 * @brief Manages task submission and worker collaboration for parallel job execution.
 *
 * This template class provides thread-local and main-thread-specific instances to submit tasks,
 * with dynamic worker management based on configured attributes. Supports suspendable jobs when
 * fiber features are enabled.
 *
 * @tparam UsageId User-defined identifier to distinguish job types (default: 0).
 * @since 20
 */
template <uint64_t UsageId = 0>
struct job_partner : ref_obj<job_partner<UsageId>>, detail::non_copyable {
    /**
     * @brief Type alias for the reference-counted pointer to job_partner.
     */
    using ptr = typename ref_obj<job_partner<UsageId>>::ptr;

    /**
     * @brief Gets the main thread's job_partner instance (creates if not exists).
     *
     * @return Reference to the main thread's job_partner smart pointer.
     * @since 20
     */
#ifdef FFRT_MULTI_DSO_EXTERN_MAIN_PARTNER
    static __attribute__((visibility("default"), noinline)) auto& get_main_partner();
#else
    static __attribute__((visibility("default"), noinline)) auto& get_main_partner()
    {
        static auto s = ref_obj<job_partner<UsageId>>::make(getpid());
        return s;
    }
#endif

    /**
     * @brief Gets the main thread's job_partner instance with updated attributes.
     *
     * @param attr Indicates the new attributes to apply.
     * @return Reference to the main thread's job_partner smart pointer.
     * @since 20
     */
    static inline auto& get_main_partner(const job_partner_attr& attr)
    {
        auto& s = get_main_partner();
        s->attr() = attr;
        return s;
    }

    /**
     * @brief Gets the current thread's job_partner instance (creates if not exists).
     *
     * @return Reference to the current thread's job_partner smart pointer.
     * @since 20
     */
#ifdef FFRT_MULTI_DSO_EXTERN_THREAD_PARTNER
    static __attribute__((visibility("default"), noinline)) auto& get_partner_of_this_thread();
#else
    static __attribute__((visibility("default"), noinline)) auto& get_partner_of_this_thread()
    {
        static thread_local auto s = ref_obj<job_partner<UsageId>>::make(tid());
        return s;
    }
#endif

    /**
     * @brief Gets the current thread's job_partner instance with updated attributes.
     *
     * @param attr Indicates the new attributes to apply.
     * @return Reference to the current thread's job_partner smart pointer.
     * @since 20
     */
    static inline auto& get_partner_of_this_thread(const job_partner_attr& attr)
    {
        auto& s = get_partner_of_this_thread();
        s->attr() = attr;
        return s;
    }

#ifdef _ffrt_has_fiber_feature
    /**
     * @brief Submit a suspendable job to partner workers (blocking until submission).
     *
     * Submits a fiber-based job with specified stack memory. Blocks until the job is queued.
     * Retries if the queue is full.
     *
     * @tparam Boost If true, dynamically adds workers to handle the job.
     * @param suspendable_job Indicates the job function (may be suspended/resumed).
     * @param stack Indicates a pointer to the preallocated stack memory.
     * @param stack_size Indicates the size of the stack memory (must be valid for fiber execution).
     * @param on_done Indicates the callback invoked when the job completes (optional).
     * @return `0` if succeeds; `1` if job initialization fails (e.g., invalid stack size).
     * @since 20
     */
    template <bool Boost = true>
    inline int submit(std::function<void()>&& suspendable_job, void* stack, size_t stack_size,
                      void (*on_done)(void*) = nullptr)
    {
        auto p = job_t::init(std::forward<std::function<void()>>(suspendable_job), stack, stack_size);
        if (p == nullptr) {
            FFRT_API_LOGE("job initialize failed, maybe invalid stack_size");
            return 1;
        }
        FFRT_API_LOGD("submit %llu", p->id());
        p->local().partner = this;
        p->local().on_done = on_done;
        submit<Boost>(suspendable_job_func, p);
        return 0;
    }

    /**
     * @brief Submits a job to the master thread and suspends the current task until completion.
     *
     * This function submits a job to the master thread for execution. The current task will be paused
     * immediately after submission and will resume only after the master thread finishes executing the job.
     * Special cases:
     * - If called outside a job context (no current task), the job executes directly.
     * - If the master thread queue is full, it retries until successful submission.
     *
     * @tparam AllowRunOnCallerStack If true, @p job may be executed inline on the caller's current
     *         stack when the caller is the master fiber (skipping suspend/queue/resume); enable only
     *         if @p job is safe on a fiber (coroutine) stack, which the caller's stack may be. If
     *         false (default), @p job never runs on a fiber stack: it runs inline only when there is
     *         no current task (native stack), else on the master thread's native stack.
     * @param job Indicates the task function to be executed by the master thread.
     * @since 20
     */
    template <bool AllowRunOnCallerStack = false>
    static inline void submit_to_master(const std::function<void()>& job)
    {
        auto& e = job_t::env();
        auto j = e.cur;
        if (j == nullptr || (AllowRunOnCallerStack && j->local().partner->token == e.tl.thread_id)) {
            return job();
        }
        j->local().partner->submit_to_master(e, j, job);
    }

    /**
     * @brief Checks if the current thread is the master thread of the job_partner.
     *
     * Compares the current thread's ID with the master thread token stored in the job_partner.
     *
     * @return true if the current thread is the master thread, false otherwise.
     * @since 20
     */
    inline bool this_thread_is_master()
    {
        return job_t::env().tl.thread_id == this->token;
    }
#endif

    /**
     * @brief Submits a non-suspendable job to partner threads (non-blocking).
     *
     * This method submits a task that cannot be suspended to the partner worker pool. It operates
     * asynchronously and does not block the calling thread. The job will be executed by an available
     * partner worker thread based on the current load and configuration.
     *
     * @tparam Boost If true, dynamically scales the number of partner workers to handle the job load;
     *               if false, uses existing workers only
     * @param non_suspendable_job Indicates an rvalue reference to the task function (std::function<void()>).
     * @since 20
     */
    template <bool Boost = true>
    inline void submit(std::function<void()>&& non_suspendable_job)
    {
        auto p = new non_suspendable_job_t(std::forward<std::function<void()>>(non_suspendable_job), this);
        FFRT_API_LOGD("non-suspendable job submit: %p", p);
        submit<Boost>(non_suspendable_job_func, p);
    }

    /**
     * @brief Submits a non-suspendable job and returns a future for result retrieval.
     *
     * This method submits a non-suspendable task to partner workers and returns a future-like object
     * that can be used to retrieve the task's result once completed. The operation is non-blocking,
     * with the job executed asynchronously by partner threads.
     *
     * @tparam Boost If true, enables dynamic worker scaling; if false, uses existing workers only
     * @tparam Function Type of the task function (deduced automatically)
     * @param non_suspendable_job Indicates the task function to execute (returns a value of type R).
     * @return A job_promise object that can be used to access the task's result
     * @since 20
     */
    template <bool Boost = true, class Function>
    inline auto submit_p(Function&& non_suspendable_job)
    {
        using R = std::invoke_result_t<Function>;
        auto r = make_job_promise<R>(std::forward<Function>(non_suspendable_job));
        FFRT_API_LOGD("non-suspendable future job submit: %p", (void*)r);
        r->owner = this;
        r->inc_ref();
        submit<Boost>(non_suspendable_future_job_func<R>, r);
        return std::move(r);
    }

    /**
     * @brief Blocks until all submitted tasks have completed execution.
     *
     * This function blocks the calling thread until all tasks submitted to the job_partner
     * (both master and partner queues) have finished executing. It optionally helps process
     * tasks and uses busy-waiting to optimize latency for short waits.
     *
     * @tparam HelpPartner If true, the calling thread actively processes tasks from the worker queue
     *                     while waiting; if false, it only waits
     * @tparam BusyWaitUS Duration (in microseconds) to busy-wait before falling back to blocking waits.
     *                    During this period, new tasks will be detected and processed immediately.
     * @since 20
     */
    template<bool HelpPartner = true, uint64_t BusyWaitUS = 100>
    void wait()
    {
        if (all_done()) {
            return;
        }
#ifdef _ffrt_has_fiber_feature
        bool is_master = this_thread_is_master();
#else
        bool is_master = false;
#endif
        FFRT_API_TRACE_SCOPE("%s wait on master", name.c_str());
        FFRT_API_LOGD("wait on master");

        for (;;) {
            if (is_master) {
                int idx = 0;
                while (master_q->try_run()) {
                    if ((++idx & 0xF) == 0) {
                        trigger_partner<true>();
                    }
                }
            }
            trigger_partner<true>();

            if (HelpPartner && partner_q->try_run()) {
                continue;
            }
            if (all_done()) {
                break;
            } else {
                if (BusyWaitUS > 0) {
                    auto s = clock::now();
                    while (!has_job<HelpPartner>(is_master) && clock::ns(s) < BusyWaitUS * 1000) {
                        wfe();
                    }
                }
                master_wait = 1;
                if (!all_done() && !has_job<HelpPartner>(is_master)) {
                    master_wait.wait(1);
                }
                if (master_wait.exchange(0) == 1) {
                    master_wait.notify_all();
                }
            }
        }

        FFRT_API_LOGD("wait success");
    }

    /**
     * @brief Retrieves the configuration attributes of the current job_partner.
     *
     * Provides mutable access to the job_partner's attributes (QoS, parallelism, thresholds, etc.),
     * allowing runtime modification of task scheduling behavior.
     *
     * @return Reference to the job_partner_attr instance of this job_partner
     * @since 20
     */
    inline job_partner_attr& attr()
    {
        return attr_;
    }

    /**
     * @brief Triggers worker thread creation to handle pending tasks if needed.
     *
     * Checks if the current number of worker threads is sufficient for the pending task load
     * (based on configured thresholds and parallelism limits) and adds new workers if necessary.
     *
     * @since 20
     */
    inline void flush()
    {
        trigger_partner<true, true>();
    }

    /**
     * @brief Attempts to steal and execute a task from the specified queue.
     *
     * Used for load balancing between threads, allowing a thread to steal tasks from another
     * job_partner's queue when its own queue is empty.
     *
     * @tparam StealPartnerJob If true, steals from the partner queue; if false, steals from the master queue
     * @return true if a task was successfully stolen and executed,
     *         false if no task was available to steal (queue was empty).
     * @since 20
     */
    template<bool StealPartnerJob = true>
    inline bool try_steal_one_job()
    {
        if constexpr(StealPartnerJob) {
            return partner_q->try_run();
        } else {
            return master_q->try_run();
        }
    }

    /**
     * @brief Resets the partner and master queues with specified capacities.
     *
     * Reinitializes the internal task queues with new depths. Must only be called when
     * both queues are empty (e.g., before submitting first tasks or after waiting for all tasks).
     *
     * @param partner_queue_depth Indicates the capacity of the partner worker queue (default: 1024).
     * @param master_queue_depth Capacity of the master thread queue (default: 1024)
     * @warning Calling this with non-empty queues will result in undefined behavior
     * @since 20
     */
    inline void reset_queue(uint64_t partner_queue_depth = 1024, uint64_t master_queue_depth = 1024)
    {
        partner_q = std::make_unique<runnable_queue<mpmc_queue>>(partner_queue_depth, name + "_pq");
        master_q = std::make_unique<runnable_queue<mpmc_queue>>(master_queue_depth, name + "_mq");
    }

private:
    friend ref_obj<job_partner>; ///< Allows ref_obj base class to access private constructor for reference counting.

    /**
     * @brief Internal structure wrapping a non-suspendable job and its associated job_partner.
     */
    struct non_suspendable_job_t {
        /**
         * @brief Constructs a non_suspendable_job_t with a task function and parent partner.
         *
         * @param fn The task function to execute (moved into the structure)
         * @param p Pointer to the job_partner that owns this task
         */
        non_suspendable_job_t(std::function<void()>&& fn, job_partner* p)
            : fn(std::forward<std::function<void()>>(fn)), partner(p) {}

        std::function<void()> fn; ///< The task function to execute.
        job_partner* partner;     ///< Pointer to the owning job_partner instance.
    };

    /**
     * @brief Private constructor for job_partner.
     *
     * Initializes task queues, names, and thread identifiers. Called exclusively through
     * ref_obj::make() to ensure proper reference-counted allocation.
     *
     * @param thread_id Unique identifier for the master thread (default: current thread ID).
     */
    job_partner(uint64_t thread_id = tid())
        : name("partner<" + std::to_string(UsageId) + ">" + std::to_string(thread_id))
    {
        reset_queue();
        concurrency_name = name + "_cc#";
        partner_num_name = name + "_p#";
        token = thread_id;
    }

    /**
     * @brief Retrieves the current thread's ID (cached in thread-local storage).
     *
     * Uses the Linux syscall SYS_gettid to get the thread ID, with thread-local storage
     * to avoid repeated syscalls.
     *
     * @return The current thread's ID.
     */
    static uint64_t tid()
    {
        static thread_local uint64_t tid = syscall(SYS_gettid);
        return tid;
    }

	/**
     * @brief Internal helper to submit tasks to the partner queue with worker scaling.
     *
     * Adds the task to the partner queue, updates concurrency metrics, and triggers
     * worker thread creation if needed (based on Boost template parameter).
     *
     * @tparam Boost If true, enables dynamic worker scaling; if false, skips scaling
     * @param f Function pointer to the task executor (handles task execution).
     * @param p Pointer to task data (passed to the executor function).
     */
    template <bool Boost>
    inline void submit(void(*f)(void*), void* p)
    {
        auto concurrency = job_num.fetch_add(1, std::memory_order_relaxed) + 1;
        (void)(concurrency);
        FFRT_API_TRACE_INT64(concurrency_name.c_str(), concurrency);
        partner_q->template push<1>(f, p);
        sev();
        trigger_partner<Boost>();
    }

#ifdef _ffrt_has_fiber_feature
    /**
     * @brief Fiber-local storage (FLS) structure for master task state.
     */
    struct fls {
        const std::function<void()>* master_f; ///< Pointer to the master task function.
        job_partner* partner;                  ///< Pointer to the associated job_partner.
        void(*on_done)(void*);                 ///< Callback to invoke when the task completes.
    };

    /**
     * @brief Thread-local storage (TLS) structure for thread identification.
     */
    struct tls {
        uint64_t thread_id = tid(); ///< Current thread's ID (used for master thread checks).
    };

    /**
     * @brief Alias for the fiber type used by this job_partner.
     */
    using job_t = fiber<UsageId, fls, tls>;

    /**
     * @brief Submits a task to the master queue and suspends the current fiber.
     *
     * Used when a fiber-based task needs to submit work to the master thread. Suspends the calling
     * fiber until the master thread completes the submitted task.
     *
     * @tparam Env Type of the fiber environment (deduced automatically)
     * @param e Reference to the fiber environment
     * @param p Pointer to the current fiber (job_t instance)
     * @param job The task function to execute on the master thread
     */
    template<class Env>
    inline void submit_to_master(Env& e, job_t* p, const std::function<void()>& job)
    {
        FFRT_API_LOGD("job %llu submit to master", (p ? p->id() : UINT64_MAX));
        p->local().master_f = &job;
        p->suspend(e, submit_to_master_suspend_func);
    }

    /**
     * @brief Suspension callback for master thread task submission.
     *
     * Adds the suspended fiber's task to the master queue, triggers a notification, and
     * indicates that the fiber should remain suspended.
     *
     * @param p Pointer to the suspended fiber (job_t instance)
     * @return true Always returns true to confirm suspension
     */
    static bool submit_to_master_suspend_func(void* p)
    {
        auto partner = (static_cast<job_t*>(p))->local().partner;
        partner->master_q->template push<0>(master_run_func, p);
        sev();
        partner->notify_master();
        return true;
    }

    /**
     * @brief Executes a task from the master queue and resumes the original fiber.
     *
     * Called by the master thread to execute the submitted task. After completion, pushes the
     * original fiber back to the partner queue to resume execution.
     *
     * @param p_ Pointer to the fiber (job_t instance) that submitted the master task
     */
    static void master_run_func(void* p_)
    {
        auto p = static_cast<job_t*>(p_);
        {
            FFRT_API_LOGD("run master job %llu", p->id());
            FFRT_API_TRACE_SCOPE("mjob%llu", p->id());
            (*(p->local().master_f))();
        }
        p->local().partner->partner_q->template push<1>(suspendable_job_func, p);
        sev();
    }

    /**
     * @brief Resumes and executes a suspendable fiber task.
     *
     * Called by partner workers to resume execution of a fiber that was suspended. Destroys the
     * fiber after completion and invokes the completion callback if set.
     *
     * @param p_ Pointer to the fiber (job_t instance) to resume
     */
    static void suspendable_job_func(void* p_)
    {
        auto p = (static_cast<job_t*>(p_));
        FFRT_API_LOGD("run partner job %llu", p->id());
        FFRT_API_TRACE_SCOPE("pjob%llu", p->id());
        if (p->start()) { // job done
            p->local().partner->done_one();
            p->destroy();
            auto cb = p->local().on_done;
            if (cb) cb(p);
        }
    }
#endif

    /**
     * @brief Updates task counters when a job completes.
     */
    inline void done_one()
    {
        auto concurrency = job_num.fetch_sub(1, std::memory_order_release) - 1;
        FFRT_API_TRACE_INT64(concurrency_name.c_str(), concurrency);
        if (concurrency == 0) {
            sev();
            notify_master();
        }
    }

    /**
     * @brief Notifies the master thread to wake up if it is waiting.
     */
    inline void notify_master()
    {
        if (master_wait.exchange(0) == 1) {
            master_wait.notify_all();
        }
    }

    /**
     * @brief Triggers worker thread creation based on current task load.
     *
     * Checks if new worker threads are needed (based on task count and configuration)
     * and adds them if the conditions are met.
     *
     * @tparam Boost If true, allows scaling beyond current worker count; if false, uses existing workers.
     * @tparam IgnoreThreshold If true, ignores the task threshold when deciding to add workers.
     */
    template <bool Boost, bool IgnoreThreshold = false>
    inline void trigger_partner()
    {
        if (try_add_partner<Boost, IgnoreThreshold>()) {
            add_partner();
        }
    }

    /**
     * @brief Checks if new worker threads should be added.
     *
     * Uses atomic operations to safely check if the current number of workers is insufficient
     * for the pending task load, based on configured parallelism limits and thresholds.
     *
     * @tparam Boost If true, allows scaling up to max_parallelism; if false, only adds workers if none exist.
     * @tparam IgnoreThreshold If true, uses 0 as the task threshold; if false, uses attr_.threshold().
     * @return true if new workers should be added, false otherwise.
     */
    template <bool Boost, bool IgnoreThreshold = false>
    inline bool try_add_partner()
    {
        auto th = IgnoreThreshold ? 0 : attr_.threshold();
        auto wn = partner_num.load(std::memory_order_acquire);
        for (;;) {
            if ((Boost && wn < attr_.max_parallelism() && partner_q->size() > wn * attr_.ratio() + th) ||
                (!Boost && wn == 0 && partner_q->size() > th)) {
                if (partner_num.compare_exchange_weak(wn, wn + 1, std::memory_order_relaxed)) {
                    FFRT_API_TRACE_INT64(partner_num_name.c_str(), wn + 1);
                    return true;
                }
            } else {
                return false;
            }
        }
        return false;
    }

    /**
     * @brief Launches a new partner worker thread to process tasks.
     */
    void add_partner()
    {
        job_partner<UsageId>::inc_ref();
        ffrt::submit([this] {
            for (;;) {
                trigger_partner<true>();

                while (partner_q->try_run());

                auto partner_n = partner_num.fetch_sub(1) - 1;
                FFRT_API_TRACE_INT64(partner_num_name.c_str(), partner_n);
                if (partner_n == 0 && attr_.busy() > 0 &&
                    partner_num.compare_exchange_strong(partner_n, partner_n + 1)) { // last partner delay
                    FFRT_API_TRACE_SCOPE("stall");
                    auto s = clock::now();
                    while (partner_q->size() == 0 && clock::ns(s) < attr_.busy() * 1000) {
                        wfe();
                    }
                    if (partner_q->size() > 0) { // has job again
                        continue;
                    }
                    partner_num.fetch_sub(1);
                }
                if (partner_q->size() > 0) { // has job again
                    if (try_add_partner<true>()) { // run continue
                        continue;
                    }
                }
                break;
            }
            job_partner<UsageId>::dec_ref();
            }, {}, {}, task_attr().qos(attr_.qos()).name(name.c_str()));
    }

    /**
     * @brief Checks if there are pending tasks for the current thread to process.
     *
     * Determines if the current thread (master or partner) has tasks available in its
     * associated queue, considering whether the master should help with partner tasks.
     *
     * @tparam HelpPartner If true, master thread will check both master and partner queues;
     *                     if false, master thread only checks its own queue
     * @param is_master True if the current thread is the master thread
     * @return true if there are pending tasks for the current thread, false otherwise.
     */
    template<bool HelpPartner>
    inline bool has_job(bool is_master)
    {
        return (is_master && master_q->size() > 0) || (HelpPartner && partner_q->size() > 0);
    }

    /**
     * @brief Checks if all submitted tasks have completed.
     *
     * Uses the atomic job counter to determine if there are no active or pending tasks
     * in either the master or partner queues.
     *
     * @return true if all tasks have completed, false if there are active or pending tasks.
     */
    inline bool all_done()
    {
        return job_num.load(std::memory_order_acquire) == 0;
    }

    /**
     * @brief Executor function for non-suspendable tasks.
     *
     * Invokes the task function stored in non_suspendable_job_t, signals completion,
     * and cleans up the task object.
     *
     * @param p_ Pointer to a non_suspendable_job_t instance
     */
    static void non_suspendable_job_func(void* p_)
    {
        auto p = static_cast<non_suspendable_job_t*>(p_);
        FFRT_API_LOGD("run non-suspendable job %p", p);
        FFRT_API_TRACE_SCOPE("nsjob");
        (p->fn)();
        p->partner->done_one();
        delete p;
    }

    /**
     * @brief Executor function for non-suspendable tasks with future results.
     *
     * Executes the task function, stores the result in the job_promise, signals completion,
     * and manages reference counting for the promise object.
     *
     * @tparam R Return type of the task function (matches the job_promise type)
     * @param p Pointer to the job_promise_obj<R> instance
     */
    template <class R>
    static void non_suspendable_future_job_func(void* p)
    {
        FFRT_API_LOGD("run non-suspendable future job %p", p);
        FFRT_API_TRACE_SCOPE("nsfjob");
        auto f = (job_promise_obj<R>*)p;
        f->try_execute();
        auto partner = (job_partner<UsageId>*)(f->owner);
        partner->done_one();
        f->dec_ref();
    }

    std::string name;             ///< Unique name for the job_partner instance (for tracing).
    std::string concurrency_name; ///< Tracing name for active job count metrics.
    std::string partner_num_name; ///< Tracing name for active worker count metrics.
    job_partner_attr attr_;       ///< Configuration attributes for task scheduling.
    uint64_t token;               ///< Master thread identifier (thread ID).
    alignas(detail::cacheline_size) std::atomic_uint64_t partner_num{0}; ///< Number of active partner workers.
    alignas(detail::cacheline_size) std::atomic_uint64_t job_num{0};     ///< Count of active jobs.

    std::unique_ptr<runnable_queue<mpmc_queue>> partner_q; ///< Queue for tasks executed by partner workers.
    std::unique_ptr<runnable_queue<mpmc_queue>> master_q;  ///< Queue for tasks executed by the master thread.
    atomic_wait master_wait = 0;                           ///< Synchronization primitive for master thread waiting.
};
} // namespace ffrt

#endif // FFRT_JOB_PARTNER_H
/** @} */
