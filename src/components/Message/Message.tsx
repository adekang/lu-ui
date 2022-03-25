import Notification from 'rc-notification'
import Icon from '../Icon'
import classnames from 'classnames'
import 'rc-notification/assets/index.css'
import './index.scss'

const Message = (function () {
	let message: any = null

	const iconType = {
		success: 'success',
		warning: 'warning',
		info: 'info',
		error: 'error',
	} as any

	const remove = (key: any) => {
		message.removeNotice(key)
	}

	const destroy = () => {
		message.destroy()
	}

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
	const pop = (config: any) => {
		const {
			type,
			className,
			duration = 4.5,
			getContainer = () => document.body,
			icon,
			key,
			content,
			onClose,
			onClick,
			top,
			closable = true,
			closeIcon,
		} = config

		message.notice({
			content: (
				<div className={classnames('message', className)}>
					{(icon || ['info', 'success', 'error', 'warning'].indexOf(type) > -1) && (
						<div className='iconWrap'>
							{icon ? icon : <Icon name={iconType[type]} className={type} />}
						</div>
					)}
					<div className='context'>{content}</div>
				</div>
			),
			key,
			closable,
			getContainer,
			onClose() {
				onClose && onClose()
			},
			onClick() {
				onClick && onClick()
			},
			closeIcon,
			duration,
			style: { top },
		})
	}

	/**
	 * 提示提示组件, 全局参数
	 * @param {getContainer} HTMLNode 配置渲染节点的输出位置，默认document.body
	 * @param {maxCount} number 自定义显示个数
	 */

	const config = (config: any) => {
		const { maxCount, getContainer } = config

		Notification.newInstance(
			{
				getContainer,
				maxCount,
			},
			notice => (message = notice)
		)
	}

	if (message) {
		return {
			config,
			pop,
			remove,
			destroy,
		}
	}
	// 如果为创建实例，则创建默认实例
	Notification.newInstance({}, notice => (message = notice))

	return {
		config,
		pop,
		remove,
		destroy,
	}
})()

export default Message
