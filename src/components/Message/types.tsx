import React from 'react'
/**
 * notice类型弹窗
 * @param {config}  object 提示框配置属性
 *   @param {type} string 提示窗类型
 *   @param {btn}  ReactNode 自定义关闭按钮
 *   @param {className}  string 自定义 CSS class
 *   @param {duration}  number 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭
 *   @param {getContainer}  HTMLNode 配置渲染节点的输出位置
 *   @param {icon}  ReactNode 自定义图标
 *   @param {key}  string 当前提示唯一标志
 *   @param {content}  string|ReactNode 提示标题，必选
 *   @param {onClose}  func 点击默认关闭按钮时触发的回调函数
 *   @param {onClick}  func 点击提示时触发的回调函数
 *   @param {top}  number 消息从顶部弹出时，距离顶部的位置，单位像素
 *   @param {closeIcon}  ReactNode 自定义关闭图标
 */
export interface MessageProps {
	config?: object
	type?: string
	btn?: React.ReactNode
	className?: string
	duration?: number
	getContainer?: HTMLElement
	icon?: string
	key?: string
	content?: string
	onClose?: () => {}
	onClick?: () => {}
	top?: number
	closeIcon?: React.ReactNode
}
