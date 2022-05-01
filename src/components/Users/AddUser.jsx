import React, { Fragment, useState } from 'react'
import styles from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
	const [username, setUsername] = useState('')
	const [age, setAge] = useState('')
	const [error, setError] = useState(null)
	const usernameChangeHandler = (e) => {
		setUsername(e.target.value)
	}
	const ageChangeHandler = (e) => {
		setAge(e.target.value)
	}
	const addUserHandler = (e) => {
		e.preventDefault()
		if (username.trim().length === 0 || age.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non empty values)',
			})
			return
		}
		if (+age < 1) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid age (age > 0)',
			})
			return
		}
		props.onSaveUsersHandler(username, age)
		setUsername('')
		setAge('')
	}
	const errorHandler = () => {
		setError(null)
	}
	return (
		<Fragment>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						onChange={usernameChangeHandler}
						value={username}
					/>
					<label htmlFor='age'>Age (years)</label>
					<input
						id='age'
						type='number'
						onChange={ageChangeHandler}
						value={age}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</Fragment>
	)
}

export default AddUser
