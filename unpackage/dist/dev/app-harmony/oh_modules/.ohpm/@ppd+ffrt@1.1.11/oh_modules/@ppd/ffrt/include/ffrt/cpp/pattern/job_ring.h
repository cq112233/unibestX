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
 * @file job_ring.h
 *
 * @brief Declares the {@link ffrt::job_ring_attr} and {@link ffrt::job_ring} interfaces in C++.
 *
 * @library libffrt.z.so
 * @kit FunctionFlowRuntimeKit
 * @syscap SystemCapability.Resourceschedule.Ffrt.Core
 * @since 20
 */

#ifndef FFRT_JOB_RING_H
#define FFRT_JOB_RING_H

#include <functional>
#include <string>
#include <atomic>
#include "job_utils.h"
#include "ffrt/cpp/task.h"

namespace ffrt {
/**
 * @struct job_ring_attr
 * @brief Defines attributes for configuring job_ring behavior.
 *
 * Controls QoS, task threshold for worker activation, and busy wait time for workers.
 *
 * @since 20
 */
struct job_ring_attr {
    /**
     * @brief Sets the Quality of Service (QoS) level for ring workers.
     *
     * @param v Indicates the QoS value (e.g., ffrt::qos_user_initiated).
     * @return Reference to the updated job_ring_attr object.
     */
    inline job_ring_attr& qos(int v)
    {
        this->qos_.store(v, std::memory_order_relaxed);
        return *this;
    }

    /**
     * @brief Sets the task count threshold for activating a worker.
     *
     * @param v Indicates the threshold value (≥ 0). Workers are activated when tasks exceed this value.
     * @return Reference to the updated job_ring_attr object.
     */
    inline job_ring_attr& threshold(uint64_t v)
    {
        this->threshold_.store(v, std::memory_order_relaxed);
        return *this;
    }

    /**
     * @brief Sets the busy wait time for the last active worker before exiting.
     *
     * @param us Indicates the busy wait duration in microseconds (≥ 0). Reduces worker churn.
     * @return Reference to the updated job_ring_attr object.
     */
    inline job_ring_attr& busy(uint64_t us)
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
     * @brief Gets the task threshold.
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
     * @brief Default constructor.
     */
    job_ring_attr() = default;

    /**
     * @brief Copy constructor.
     */
    job_ring_attr(const job_ring_attr& other)
    {
        *this = other;
    }

    /**
     * @brief Copy assignment operator.
     */
    inline job_ring_attr& operator=(job_ring_attr const& other)
    {
        if (this != &other) {
            qos_.store(other.qos(), std::memory_order_relaxed);
            threshold_.store(other.threshold(), std::memory_order_relaxed);
            busy_us_.store(other.busy(), std::memory_order_relaxed);
        }
        return *this;
    }

private:
    std::atomic_int qos_ = ffrt::qos_user_initiated;     ///< QoS level.
    std::atomic_uint64_t threshold_ = default_threshold; ///< Worker activation threshold.
    std::atomic_uint64_t busy_us_ = default_busy_us;     ///< Worker busy wait time (us).

    static constexpr uint64_t default_threshold = 0;    ///< Default threshold.
    static constexpr uint64_t default_busy_us = 100;    ///< Default busy wait time (us).
};

/**
 * @struct job_ring
 * @brief Bounded queue for task submission with automatic worker management.
 *
 * Supports non-blocking task submission and blocking waits for completion. Workers are
 * activated when the task count exceeds the configured threshold.
 *
 * @tparam MultiProducer If true, allows concurrent submissions from multiple threads;
 *                       if false, restricts to single-producer for better performance.
 * @since 20
 */
template <bool MultiProducer = true>
struct job_ring : ref_obj<job_ring<MultiProducer>> {
    /**
     * @brief Type alias for the reference-counted pointer to job_ring.
     */
    using ptr = typename ref_obj<job_ring<MultiProducer>>::ptr;

    /**
     * @brief Create a new job_ring instance.
     *
     * @param attr Indicates the configuration attributes (default: default values).
     * @param depth Indicates the queue capacity (must be a power of two, default: 1024).
     * @return ptr to the new job_ring.
     * @since 20
     */
    static inline auto make(const job_ring_attr& attr = {}, uint64_t depth = 1024)
    {
        return ref_obj<job_ring<MultiProducer>>::make(attr, depth);
    }

    /**
     * @brief Submit a non-suspendable task to the ring (non-blocking with backoff).
     *
     * Retries with exponential backoff if the queue is full. Activates a worker if the
     * task count exceeds the threshold.
     *
     * @param job Indicates the task function to execute.
     * @since 20
     */
    inline void submit(std::function<void()>&& job)
    {
        FFRT_API_LOGD("ring_submit %" X_PUBLIC "p", this);
        FFRT_API_TRACE_SCOPE("ring_submit");
        uint64_t us = 1;
        while (!q.try_push(std::forward<std::function<void()>>(job))) {
            std::this_thread::sleep_for(std::chrono::microseconds(us));
            us = us << 1;
        }
        if (num.fetch_add(1, std::memory_order_release) >= attr_.threshold() &&
            token.load(std::memory_order_relaxed) == 0) {
            flush();
        }
        sev();
    }

    /**
     * @brief Try to submit a non-suspendable task (non-blocking, no retries).
     *
     * @param job Indicates the task function to execute.
     * @return true if the task was queued; false if the queue is full.
     * @since 20
     */
    inline bool try_submit(std::function<void()>&& job)
    {
        FFRT_API_LOGD("ring_try_submit %" X_PUBLIC "p", this);
        FFRT_API_TRACE_SCOPE("ring_try_submit");
        if (!q.try_push(std::forward<std::function<void()>>(job))) {
            return false;
        }
        if (num.fetch_add(1, std::memory_order_release) >= attr_.threshold() &&
            token.load(std::memory_order_relaxed) == 0) {
            flush();
        }
        sev();
        return true;
    }

    /**
     * @brief Activate a worker to process queued tasks (if not already active).
     *
     * Ensures only one worker is processing tasks at a time. The worker drains tasks
     * until the queue is empty, then waits briefly for new tasks before exiting.
     *
     * @since 20
     */
    inline void flush()
    {
        int32_t exp = 0;
        if (token.compare_exchange_strong(exp, 1, std::memory_order_acquire)) {
            this->inc_ref();
            ffrt::submit([this] {
                task_num++;
                for (;;) {
                    uint64_t count = drain();
                    if (num.fetch_sub(count, std::memory_order_release) == count) { // All tasks done
                        sev();
                        if (waiter.exchange(0) == 1) {
                            waiter.notify_all();
                        }
                    } else { // New tasks added
                        continue;
                    }
                    if (attr_.busy() > 0) {
                        FFRT_API_TRACE_SCOPE("stall");
                        auto s = clock::now();
                        while (all_done() && (clock::ns(s) < attr_.busy() * 1000)) {
                            wfe();
                        }
                        if (!all_done()) {
                            continue;
                        }
                    }

                    // Exit logic
                    int32_t exp = 1;
                    if (token.compare_exchange_strong(exp, 0, std::memory_order_release)) {
                        if (!all_done()) { // New tasks arrived during exit
                            int32_t exp = 0;
                            if (token.compare_exchange_strong(exp, 1, std::memory_order_acquire)) {
                                continue; // Re-acquire token and process
                            }
                        }
                        break;
                    }
                }
                this->dec_ref();
                }, {}, {}, task_attr().qos(attr_.qos()).name("job_ring"));
        }
    }

    /**
     * @brief Waits for all submitted tasks to complete.
     *
     * @tparam HelpWorker If true, the calling thread helps process tasks while waiting.
     * @tparam BusyWaitUS Duration (us) to busy-wait before sleeping (default: 100).
     * @since 20
     */
    template<bool HelpWorker = true, uint64_t BusyWaitUS = 100>
    inline void wait()
    {
        FFRT_API_LOGD("ring_wait");
        FFRT_API_TRACE_SCOPE("ring_wait");
        if (all_done()) {
            return;
        }
        if (HelpWorker) {
            int32_t exp_in = 0;
            while (token.compare_exchange_strong(exp_in, 1, std::memory_order_acquire)) {
                num.fetch_sub(drain(), std::memory_order_release);
                int32_t exp_out = 1;
                if (token.compare_exchange_strong(exp_out, 0, std::memory_order_release)) {
                    if (!all_done()) { // have new task enqueue
                        continue;
                    }
                    if (waiter.exchange(0) == 1) {
                        waiter.notify_all();
                    }
                    return;
                }
            }
        } else {
            flush();
        }

        if constexpr(BusyWaitUS > 0) {
            auto s = clock::now();
            while (clock::ns(s) < BusyWaitUS * 1000) {
                if (all_done()) {
                    return;
                }
                wfe();
            }
        }
        while (!all_done()) {
            waiter = 1;
            if (!all_done()) {
                waiter.wait(1);
            }
            if (waiter.exchange(0) == 1) {
                waiter.notify_all();
            }
        }
    }

    /**
     * @brief Gets the configuration attributes of the job_ring.
     *
     * Provides mutable access to the current attributes (QoS, thresholds, busy-wait duration)
     * allowing runtime modification of job_ring behavior.
     *
     * @return Reference to the job_ring_attr instance used by this job_ring
     * @since 20
     */
    inline job_ring_attr& attr()
    {
        return attr_;
    }

    /**
     * @brief Gets the count of processed tasks for profiling and monitoring.
     *
     * Returns a mutable reference to the counter tracking the total number of tasks
     * that have been executed. Useful for performance analysis and debugging.
     *
     * @return Reference to the task count variable
     * @since 20
     */
    inline uint64_t& commit_times_for_profiling()
    {
        return task_num;
    }

private:
    /**
     * @brief Private constructor for job_ring.
     *
     * @param attr Indicates the configuration attributes for the job ring.
     * @param depth Indicates the capacity of the internal lock-free queue (must be a power of two).
     */
    job_ring(const job_ring_attr& attr = {}, uint64_t depth = 1024) : attr_(attr), q(depth) {}

    /**
     * @brief Checks if all submitted tasks have been completed.
     *
     * Determines if there are no pending or currently executing tasks by checking
     * the atomic task counter with acquire memory order for proper synchronization.
     *
     * @return true if all tasks have finished execution; false if there are pending or running tasks.
     */
    inline bool all_done()
    {
        return num.load(std::memory_order_acquire) == 0;
    }

    /**
     * @brief Executes a single task with tracing and cleanup.
     *
     * Wraps task execution with tracing macros for performance analysis and
     * clears the function object after execution to release resources.
     *
     * @param f Indicates a reference to the std::function containing the task to execute.
     */
    static void run_one(std::function<void()>& f)
    {
        FFRT_API_TRACE_SCOPE("ring_job");
        f();
        f = nullptr;
        FFRT_API_LOGD("ring_job_done");
    }

    /**
     * @brief Process all available tasks in the queue.
     *
     * Removes and executes all currently pending tasks from the lock-free queue,
     * returning the count of processed tasks. Used by worker threads and helping
     * threads during wait() operations.
     *
     * @return Number of tasks processed in this invocation.
     */
    inline uint64_t drain()
    {
        uint64_t n = 0;
        while (q.try_pop(run_one)) {
            n++;
        }
        return n;
    }

    job_ring_attr attr_;                                            ///< Configuration attributes for the job ring.
    alignas(detail::cacheline_size) std::atomic_int32_t token{0};   ///< Atomic token to ensure single worker thread.
    alignas(detail::cacheline_size) std::atomic_uint64_t num{0};    ///< Atomic counter for pending tasks.
    uint64_t task_num{0};                                           ///< Total count of processed tasks (profiling).
    lf_queue<MultiProducer, false, std::function<void()>> q;        ///< Lock-free queue storing pending tasks.
    atomic_wait waiter = 0;                                         ///< Synchronization primitive for wait operations.

    friend ref_obj<job_ring<MultiProducer>>;    ///< Allow base class to access private constructor.
};
} // namespace ffrt

#endif // FFRT_JOB_RING_H
/** @} */
