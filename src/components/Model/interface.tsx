import React from 'react'
export interface ModelProps {
	visible?: boolean
	onOk?: () => void
	onCancel?: () => void
	closeCb?: () => void
	width?: number
	okTest?: string
	cancelText?: string
	title?: string
	children?: React.ReactElement
	footer?: React.ReactElement
	content?: React.ReactElement
}
