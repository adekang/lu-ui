// @ts-ignore
import React, { useRef } from 'react'

const MIN_DISTANCE = 10
type Direction = '' | 'vertical' | 'horizontal'

function getDirection(x: number, y: number) {
	if (x > y && x > MIN_DISTANCE) {
		return 'horizontal'
	}
	if (y > x && y > MIN_DISTANCE) {
		return 'vertical'
	}
	return ''
}

export default () => {
	const startX = useRef(0) // 开始的位置
	const startY = useRef(0)
	const moveX = useRef(0) // 滑动的位置
	const moveY = useRef(0)
	const deltaX = useRef(0) // 滑动的距离
	const deltaY = useRef(0)
	const offsetX = useRef(0)
	const offsetY = useRef(0)
	const direction = useRef<Direction>('')

	const isVertical = () => direction.current === 'vertical'
	const isHorizontal = () => direction.current === 'horizontal'

	const reset = () => {
		deltaX.current = 0
		deltaY.current = 0
		moveX.current = 0
		moveY.current = 0
		startX.current = 0
		startY.current = 0
		offsetX.current = 0
		offsetY.current = 0
		direction.current = ''
	}

	const start = ((event: TouchEvent) => {
		reset()
		startX.current = event.touches[0].clientX
		startY.current = event.touches[0].clientY
	}) as EventListener

	const move = ((event: TouchEvent) => {
		const touch = event.touches[0]
		moveX.current = touch.clientX
		moveY.current = touch.clientY
		deltaX.current = touch.clientX < 0 ? 0 : touch.clientX - startX.current
		deltaY.current = touch.clientY - startY.current

		offsetX.current = Math.abs(deltaX.current) // 只去正值
		offsetY.current = Math.abs(deltaY.current)

		if (!direction.current) {
			direction.current = getDirection(offsetX.current, offsetY.current)
		}
	}) as EventListener

	return {
		move,
		start,
		reset,
		startX,
		startY,
		moveX,
		moveY,
		deltaX,
		deltaY,
		offsetX,
		offsetY,
		direction,
		isVertical,
		isHorizontal,
	}
}
