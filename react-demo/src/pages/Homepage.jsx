import React from "react";
import {Link} from "react-router-dom";

// HREF kullanımı yanlış.
function Homepage() {
	return (
		<div>
			<p>Homepage</p>
			<Link to="/about">About'a Git</Link>
			<br />
			<a href="/about">About href</a>
		</div>
	);
}

export default Homepage;
