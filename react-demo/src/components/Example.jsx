import React from "react";

function Example(props) {
	console.log(props);
	return (
		<div>
			<p>{props.title}</p>
			<button onClick={() => props.clickFunc()}>Example Button</button>
		</div>
	);
}

export default Example;
