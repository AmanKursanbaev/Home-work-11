import React, { Fragment, useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import styles from './UserList.module.css'

const UserList = ({ users, setUsers }) => {
	const [deleteConfirm, setDeleteConfirm] = useState(false)
	const [userId, setUserId] = useState('')
	const deleteConfirmHandler = (e) => {
		setDeleteConfirm(true)
		setUserId(e.target.parentElement.id)
	}
	const cancelHandler = () => {
		setDeleteConfirm(false)
	}
	const deleteUserHandler = (e) => {
		if (e.target.innerHTML === 'Okey') {
			const filteredUsers = users.filter((el) => el.id !== userId)
			setUsers([...filteredUsers])
			setDeleteConfirm(false)
		}
	}
	let userInfo = <h3>Текст пока нет</h3>
	if (users.length > 0) {
		userInfo = users.map((user) => (
			<li key={user.id} id={user.id}>
				<p>
					{user.name} ({user.age} years old)
				</p>
				<Button
					className={styles.delete_btn}
					onClick={deleteConfirmHandler}
				>
					Delete
				</Button>
			</li>
		))
	}
	const cancelBtn = (
		<Button onClick={cancelHandler} className='cancel'>
			Нет
		</Button>
	)
	return (
		<Fragment>
			{deleteConfirm && (
				<ErrorModal
					title='Удаление пользвателя!'
					message='Вы действително хотите удалть?'
					cancel={cancelBtn}
					onConfirm={deleteUserHandler}
				/>
			)}
			<Card className={styles.users}>
				<ul>{userInfo}</ul>
			</Card>
		</Fragment>
	)
}

export default UserList
