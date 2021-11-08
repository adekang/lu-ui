import React from 'react'
import message from 'components/Message/Message'
import Button from '../Button/button'

const MessageExample = () => {
	message.config({
		maxCount: 3,
	})
	return (
		<div>
			<Button
				onClick={() => {
					message.pop({
						type: 'warning',
						content: '趣谈前端学习打卡',
						duration: 1,
					})
				}}
			>
				警告
			</Button>
			<Button
				onClick={() => {
					message.pop({
						type: 'success',
						content: '趣谈前端学习打卡',
						duration: 1,
					})
				}}
			>
				成功
			</Button>
			<Button
				onClick={() => {
					message.pop({
						type: 'error',
						content: '趣谈前端学习打卡',
						duration: 1,
					})
				}}
			>
				错误
			</Button>
		</div>
	)
}

export default MessageExample
