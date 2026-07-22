import { defineMixin } from '../vue'

const MIN_DISTANCE = 10

function getDirection(x: number, y: number): string {
    if (x > y && x > MIN_DISTANCE) {
        return 'horizontal'
    }
    if (y > x && y > MIN_DISTANCE) {
        return 'vertical'
    }
    return ''
}

export const touchMixin = defineMixin({
	data() {
		return {
			direction: '',
			deltaX: 0,
			deltaY: 0,
			offsetX: 0,
			offsetY: 0,
			startX: 0,
			startY: 0
		}
	},
    methods: {
        getTouchPoint(e: UniTouchEvent) {
            if (e == null) {
                return {
                    x: 0,
                    y: 0
                }
            } if (e.touches.length > 0 && e.touches[0] != null) {
                return {
                    x: e.touches[0].pageX,
                    y: e.touches[0].pageY
                }
            } if (e.changedTouches.length > 0 && e.changedTouches[0] != null) {
                return {
                    x: e.changedTouches[0].pageX,
                    y: e.changedTouches[0].pageY
                }
            }
            return {
                x: 0,
                y: 0
            }
        },
        resetTouchStatus() {
            this.direction = ''
            this.deltaX = 0
            this.deltaY = 0
            this.offsetX = 0
            this.offsetY = 0
        },
        touchStart(event: UniTouchEvent) {
            this.resetTouchStatus()
            const touch = this.getTouchPoint(event)
            this.startX = touch['x'] as number
            this.startY = touch['y'] as number
        },
        touchMove(event: UniTouchEvent) {
            const touch = this.getTouchPoint(event)
            this.deltaX = touch['x'] as number - this.startX
            this.deltaY = touch['y'] as number - this.startY
            this.offsetX = Math.abs(this.deltaX)
            this.offsetY = Math.abs(this.deltaY)
            this.direction = this.direction != '' ? this.direction : getDirection(this.offsetX, this.offsetY)
        },
    }
})
