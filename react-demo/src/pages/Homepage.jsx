import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

// HREF kullanımı yanlış.
function Homepage() {
	// hooks
	// 2. parametre => Dep List.
	useEffect(() => {
		console.log("Sayfanın ilk yüklenme anı");
	}, []);

	let [count2, setCount2] = useState(0);

	// değiştiğinde state'i (UI) değiştirmek istediğiniz değişkenleri
	// useState

	// useState ile tanımlı bir değişkenin değerinin değiştiği anı izlemek istersek
	useEffect(() => {
		console.log(count2);
	}, [count2]);
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
			<Link to="/about">About'a Git</Link>
		</div>
	);
}

export default Homepage;
