import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import axiosInstance from "../utilities/axiosInterceptors";

function About() {
	const [name, setName] = useState("");
	const [brands, setBrands] = useState([]);

	useEffect(() => {
		fetchBrands();
	}, []);

	const fetchBrands = () => {
		axiosInstance.get("Brands?PageIndex=0&PageSize=20").then(response => {
			setBrands(response.data.items);
		});
	};

	const submit = () => {
		axiosInstance
			.post("Brands", {name: name})
			.then(response => {
				fetchBrands();
				//setBrands([...brands, response.data]);
				setName("");
			})
			.catch(err => {})
			.finally(() => {});
	};

	// Two Way Data Binding
	// değişken değişirse inputun içi değişsin
	// input değişirse değişken değişsin
	return (
		<div className="content-center">
			<form>
				<input
					type="text"
					placeholder="Ad"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<button type="button" onClick={() => submit()}>
					Gönder
				</button>
			</form>

			<ul>
				{brands.map(brand => (
					<Link to={"/brand-detail/" + brand.id}>
						<li key={brand.id}>{brand.name}</li>
					</Link>
				))}
			</ul>
		</div>
	);
}

export default About;
