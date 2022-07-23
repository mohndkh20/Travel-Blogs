import React, { useEffect, useState, useRef } from "react";
import { useRequest } from "../hooks2/useRequest";

const Countries = () => {
	const sendRequest = useRequest();
	const [countries, setCountries] = useState([]);
	const nameRef = useRef();

	useEffect(() => {
		sendRequest(`${process.env.REACT_APP_API_URL}/countries/`, {}, {}, {
			auth: true,
		},
			"GET"
		).then((response) => {
			if (response?.success) {
				setCountries(response.data);
			}
		});
	}, []);

	const deletCategorie = (id) => {
		if (window.confirm("Do you want to delete this Country")) {
			sendRequest(`${process.env.REACT_APP_API_URL}/countries/${id}`, {}, {}, {
				auth: true,
			}, "DELETE" ).then((response) => {
				if (response?.success) {
					const currentCountries = [...countries];
					const filteredCountries = currentCountries.filter((country) => country.id != id);
					setCountries(filteredCountries);
				}
			});
		}
	};

	const addCountry = () => {
		sendRequest(`${process.env.REACT_APP_API_URL}/countries/add`, {}, {
			country_name : nameRef.current.value,
		},
			{ auth: true, type: "json" },
			"POST"
		).then((newCountry) => {
			window.alert(newCountry?.messages);
			if (newCountry?.success == true) {
				window.location.reload()
			}
		});
	};

	return (
		<>
			<h3>Add Country</h3>
			<div className="d-flex w-100 mb-5">
				<input
					type={"text"}
					ref={nameRef}
					className="form-control"
					placeholder="Country"
				/>
				<button onClick={addCountry} type="button" className="btn btn-primary">
					Submit
				</button>
			</div>
			<h3>Countries</h3>
			<table className="w-100 table table-striped">
				<thead>
					<tr>
						<th>Countries</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{countries.map((country, i) => {
						return (
							<tr key={i}>
								<td>{country?.country_name}</td>
								<td>
									<button onClick={() => { deletCategorie(country.id) }} className="btn btn-primary">
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

export default Countries;
