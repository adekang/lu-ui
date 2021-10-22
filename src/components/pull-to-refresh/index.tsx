import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react'
import { bindEvents, unbindEvents, debounce } from './utils'
import classNames from 'classnames'
import './index.scss'
import useTouch from './useTouch'
const _ = require('lodash')

const isWebView =
	typeof navigator !== 'undefined' &&
	/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent)

function setTransform(nodeStyle: any, value: any) {
	nodeStyle.transform = value
	nodeStyle.webkitTransform = value
	nodeStyle.MozTransform = value
}

interface Props {
	distanceToRefresh: number
	onRefresh: () => void
	getScrollContainer: boolean
	children: any
	headerHeight: number
	className: string
}

const PullDownStatus = {
	init: 'init', // 未下拉状态
	pulling: 'pulling', // 下拉可以刷新
	loosing: 'loosing', // 释放可以刷新
	loading: 'loading', // 刷新中
	finish: 'finish', // 完成刷新
}

// type CUURST = `activate` | `deactivate` | `release` | `finish`
// type CUURST = `init` | `pulling` | `loosing` | `loading` | 'finish'

const PullToRefresh: React.FC<Props> = props => {
	const { distanceToRefresh, onRefresh, headerHeight, children, getScrollContainer, className } =
		props
	const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>
	const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>
	const touch = useTouch()
	const dragOnEdge = useRef(false)
	const ptRefresh = useRef<string>(PullDownStatus.init)

	// 活动距离设置
	const easing = (dy: number) => {
		console.log('dy', dy)

		const ratio = dy / window.screen.height
		dy *= (1 - ratio) * 0.6

		return dy
	}

	//  获得父级框架
	const scrollContainer = () => {
		return getScrollContainer ? document.body : containerRef.current
	}

	const isEdge = (ele: HTMLElement) => {
		const container = scrollContainer()

		//  如果时全屏滑动
		if (container && container === document.body) {
			// In chrome61 `document.body.scrollTop` is invalid
			const scrollNode = document.scrollingElement ? document.scrollingElement : document.body

			return scrollNode.scrollTop <= 0
		}
		// 是局部滑动
		return ele.scrollTop <= 0
	}

	//  滑动效果
	const contentStyle = (dy: number) => {
		if (contentRef.current) {
			if (dy) {
				setTransform(contentRef.current.style, `translate3d(0px,${dy}px,0)`)
			} else {
				setTransform(contentRef.current.style, '')
			}
		}
	}

	const reset = () => {
		update(0)
		contentStyle(0)
	}

	const triggerPullToRefresh = () => {
		if (!dragOnEdge.current) {
			ptRefresh.current = PullDownStatus.init
		} else {
			ptRefresh.current = PullDownStatus.finish
			reset()
		}
	}

	const update = (dy: number, status?: string) => {
		let t = status
		if (!t) {
			if (dy === 0) {
				t = PullDownStatus.init
			} else if (dy < distanceToRefresh) {
				t = PullDownStatus.pulling
			} else {
				t = PullDownStatus.loading
			}
		}
		ptRefresh.current = t
	}

	const onTouchStart = (e: TouchEvent) => {
		const ele = scrollContainer()
		if (isEdge(ele)) {
			touch.start(e)
		}
	}

	const onTouchMove = (e: TouchEvent) => {
		if (ptRefresh.current === 'loading') return

		const ele = scrollContainer()
		touch.move(e)
		if (touch.offsetX.current > 20 * window.devicePixelRatio) return

		if (touch.startY.current > touch.moveY.current) return

		if (ptRefresh.current === 'loading') return
		if (!ele) return

		if (isEdge(ele)) {
			if (!dragOnEdge.current) {
				dragOnEdge.current = true
			}

			if (e.cancelable) {
				e.preventDefault
			}

			const distanceY = easing(touch.offsetY.current)
			contentStyle(distanceY)
			update(distanceY)

			if (isWebView && e.changedTouches[0].clientY < 0) {
				onTouchEnd()
			}
		}
	}
	let canRefresh = false

	const invokeRefresh = () => {
		let id: any = setTimeout(() => {
			if (canRefresh) {
				onRefresh()
			}
			canRefresh = false
			update(100, PullDownStatus.finish)
			reset()
			id = null
		}, 2000)
	}

	const onTouchEnd = () => {
		if (dragOnEdge.current) {
			dragOnEdge.current = false
		}
		if (ptRefresh.current === 'loading') {
			contentStyle(56)
			canRefresh = true
			invokeRefresh()
			touch.reset()
		} else {
			reset()
		}
	}

	const bodyRefEvents = {
		touchstart: onTouchStart,
		touchmove: onTouchMove,
		touchend: onTouchEnd,
		touchcancel: onTouchEnd,
	}

	const init = (ele: HTMLElement | null) => {
		if (ele) {
			triggerPullToRefresh()
			bindEvents(ele, bodyRefEvents)
		}
	}

	const destroy = (ele: HTMLElement | null) => {
		if (ele) {
			unbindEvents(ele, bodyRefEvents)
		}
	}

	useEffect(() => {
		init(scrollContainer())
		return () => {
			destroy(scrollContainer())
		}
	}, [])

	const loadText = () => {
		if (ptRefresh.current === 'init') {
			return <b>init</b>
		}
		if (ptRefresh.current === 'pulling') {
			return <b>pulling</b>
		}
		if (ptRefresh.current === 'loosing') {
			return <b>loosing</b>
		}
		if (ptRefresh.current === 'loading') {
			return <b>loading</b>
		}
		if (ptRefresh.current === 'finish') {
			return <b>finish</b>
		}
	}

	const prefixCls = 'lu'
	const cla = classNames(`${prefixCls}-content`, !dragOnEdge.current && `${prefixCls}-transition`)
	return (
		<div ref={containerRef} className={classNames(prefixCls, className, `${prefixCls}-down`)}>
			<div className={`${prefixCls}-content-wrapper`}>
				<div ref={contentRef} className={cla}>
					<div className={`${prefixCls}-indicator`} style={{ height: headerHeight + 'px' }}>
						<div>{loadText()}</div>
					</div>
					{children}
				</div>
			</div>
		</div>
	)
}

export default PullToRefresh
