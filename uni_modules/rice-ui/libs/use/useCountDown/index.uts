import type { ComputedRef } from "vue"

export type CurrentTime = {
	days : number,
	hours : number,
	minutes : number,
	seconds : number,
	milliseconds : number,
	remainTime : number,
};


export type UseCountDownOptions = {
	time : number,
	millisecond ?: boolean,
	onChange ?: (current : CurrentTime) => void,
	onFinish ?: () => void,
};


export type UseCountDownResult = {
	current : ComputedRef<CurrentTime>,
	start : () => void,
	pause : () => void,
	reset : (totalTime ?: number | null) => void,
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const parseTime = (time : number) => {
	const days = Math.floor(time / DAY);
	const hours = Math.floor((time % DAY) / HOUR);
	const minutes = Math.floor((time % HOUR) / MINUTE);
	const seconds = Math.floor((time % MINUTE) / SECOND);
	const milliseconds = Math.floor(time % SECOND);

	return {
		days,
		hours,
		minutes,
		seconds,
		milliseconds,
		remainTime: time,
	} as CurrentTime;
}

const isSameSecond = (time1 : number, time2 : number) => {
	return Math.floor(time1 / 1000) == Math.floor(time2 / 1000)
}

export function useCountDown(options : UseCountDownOptions) {

	let timerId = ref<number | null>(null)
	const runing = ref(false)
	const remainTime = ref(options.time);
	const endTime = ref(0)
	const current = computed(() => parseTime(remainTime.value));


	const clearTimer = () => {
		if (timerId.value != null) {
			clearTimeout(timerId.value!)
			timerId.value = null
		}
	}

	const pause = () => {
		runing.value = false
		clearTimer()
	}

	const setRemainTime = (remain : number) => {
		remainTime.value = remain
		options.onChange?.(current.value)
		if (remain <= 0) {
			pause()
			options.onFinish?.()
		}
	}

	const getRemainTime = () => Math.max(endTime.value - Date.now(), 0);

	let millisecondTick : (() => void) | null = null
	let secondTick : (() => void) | null = null

	millisecondTick = () => {
		clearTimer()
		timerId.value = setTimeout(() => {
			setRemainTime(getRemainTime())
			if (remainTime.value > 0) {
				millisecondTick!()
			}
		}, 30)
	}

	secondTick = () => {
		clearTimer()
		timerId.value = setTimeout(() => {
			const remain = getRemainTime()
			if (!isSameSecond(remain, remainTime.value) || remain == 0) {
				setRemainTime(remain)
			}
			if (remainTime.value > 0) {
				secondTick!();
			}
		}, 30)
	}

	const toTick = () => {
		if (options.millisecond == true) {
			millisecondTick!()
		} else {
			secondTick!()
		}
	}

	const start = () => {
		if (!runing.value) {
			endTime.value = Date.now() + remainTime.value
			runing.value = true
			toTick()
		}
	}


	function reset(totalTime ?: number | null) {
		if (totalTime == null) totalTime = options.time
		pause()
		remainTime.value = totalTime
	}

	onUnmounted(() => {
		clearTimer()
	})

	return {
		start,
		reset: (totalTime ?: number | null) => reset(totalTime),
		pause,
		current,
	} as UseCountDownResult

}