import React, {useState} from "react";

function About() {
	const [name, setName] = useState("");

	const changeName = () => {
		setName("Halit");
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
				<button type="button" onClick={() => console.log(name)}>
					Gönder
				</button>
				<button type="button" onClick={() => changeName()}>
					Değiştir
				</button>
			</form>
		</div>
	);
}

export default About;
