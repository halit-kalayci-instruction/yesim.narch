import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

// HREF kullanımı yanlış.
function Homepage() {
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);
	// hooks
	// 2. parametre => Dep List.
	useEffect(() => {
		console.log("Sayfanın ilk yüklenme anı");
	}, []);
	// değiştiğinde state'i (UI) değiştirmek istediğiniz değişkenleri
	// useState

	// useState ile tanımlı bir değişkenin değerinin değiştiği anı izlemek istersek
	useEffect(() => {
		console.log(count2);
		console.log(count3);
	}, [count2, count3]);

	const submitForm = () => {};

	return (
		<div>
			<p>{count2}</p>
			<button
				onClick={() => {
					setCount2(prevState => prevState + 1);
				}}
			>
				Artır
			</button>

			<p>{count3}</p>
			<button
				onClick={() => {
					setCount3(prevState => prevState + 1);
				}}
			>
				Artır 3
			</button>
			<Link to="/about">About'a Git</Link>
		</div>
	);
}

export default Homepage;
