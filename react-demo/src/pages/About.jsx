import React, {useEffect, useState} from "react";
import axios from "axios";

function About() {
	const [name, setName] = useState("");
	const [brands, setBrands] = useState([]);

	useEffect(() => {
		fetchBrands();
	}, []);

	const fetchBrands = () => {
		axios
			.get("https://localhost:7285/api/Brands?PageIndex=0&PageSize=20")
			.then(response => {
				setBrands(response.data.items);
			});
	};

	const submit = () => {
		axios
			.post("https://localhost:7285/api/Brands", {name: name})
			.then(response => {
				console.log("istek başarılı sonlandı:", response);
			})
			.catch(err => {
				console.log("İstek hatalı sonlandı:", err);
			})
			.finally(() => {
				console.log("İstek cevabı geldi.");
			});
	};

	// Two Way Data Binding
	// değişken değişirse inputun içi değişsin
	// input değişirse değişken değişsin
	return (
		<div>
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
					<li key={brand.id}>
						{brand.id} - {brand.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default About;
