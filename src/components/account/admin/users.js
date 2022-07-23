import React, { useEffect, useState, useRef } from "react";
import { useRequest } from "../hooks2/useRequest";

const Users = () => {
	const sendRequest = useRequest();
	const [users, setUsers] = useState([]);

	useEffect(() => {
		sendRequest(`${process.env.REACT_APP_API_URL}/users/`, {}, {}, {
			auth: true,
		},
			"GET"
		).then((response) => {
			if (response?.success) {
				setUsers(response.data);
			}
		});
	}, []);

	const deletUser = (id) => {
		if (window.confirm("Do you want to delete this user")) {
			sendRequest(`${process.env.REACT_APP_API_URL}/users/${id}`, {}, {}, {
				auth: true,
			}, "DELETE" ).then((response) => {
				if (response?.success) {
					const currentCountries = [...users];
					const filteredCountries = currentCountries.filter((user) => user.id != id);
					setUsers(filteredCountries);
				}
			});
		}
	};


	return (
		<>
			<h3>Users</h3>
			<table className="w-100 table table-striped">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, i) => {
						return (
							<tr key={i}>
								<td>{user?.firstname}</td>
								<td>{user?.lastname}</td>
								<td>{user?.username}</td>
								<td>
									<button onClick={() => { deletUser(user.id) }} className="btn btn-primary">
										Delete 
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Users;
