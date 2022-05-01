import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
	const [users, setUsers] = useState([])
	const saveUsersHandler = (name, age) => {
		setUsers((prevState) => [
			...prevState,
			{ name, age, id: Math.random().toString() },
		])
	}
	return (
		<div>
			<AddUser onSaveUsersHandler={saveUsersHandler} />
			<UserList users={users} setUsers={setUsers}/>
		</div>
	)
}

export default App
