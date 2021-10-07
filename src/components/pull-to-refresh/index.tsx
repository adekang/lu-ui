import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react'
import { bindEvents, unbindEvents } from './utils'
import './index.scss'

const DOWN = 'down'
const UP = 'up'
const INDICATOR = { activate: 'release', deactivate: 'pull', release: 'loading', finish: 'finish' }

const isWebView =
	typeof navigator !== 'undefined' &&
	/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent)

function setTransform(nodeStyle: any, value: any) {
	nodeStyle.transform = value
	nodeStyle.webkitTransform = value
	nodeStyle.MozTransform = value
}

let supportsPassive = false
try {
	const opts = Object.defineProperty({}, 'passive', {
		get() {
			supportsPassive = true
		},
	})
	window.addEventListener('test', null as any, opts)
} catch (e) {
	// empty
}
const willPreventDefault = supportsPassive ? { passive: false } : false
interface Props {}

const PullToRefresh: React.FC<Props> = props => {
	const containerRef = useRef<HTMLDivElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)

	const onTouchStart = () => {
		console.log('touchstart')
	}
	const onTouchMove = () => {
		console.log('touchMove')
	}
	const onTouchEnd = () => {
		console.log('touchend')
	}

	const bodyRefEvents = {
		touchstart: onTouchStart,
		touchmove: onTouchMove,
		touchend: onTouchEnd,
		touchcancel: onTouchEnd,
	}

	const init = () => {
		if (contentRef.current) {
			bindEvents(contentRef.current, bodyRefEvents)
		}
	}

	const destroy = () => {
		if (contentRef.current) {
			unbindEvents(contentRef.current, bodyRefEvents)
		}
	}

	useEffect(() => {
		init()

		return () => {
			destroy()
		}
	}, [])

	return (
		<div ref={containerRef}>
			<div className='lu-content-wrapper'>
				<div ref={contentRef}>12</div>
			</div>
		</div>
	)
}

export default PullToRefresh
