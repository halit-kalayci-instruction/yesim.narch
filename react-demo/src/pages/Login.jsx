import React from "react";
import "./Login.css";
import {Link} from "react-router-dom";
const Login = () => {
	return (
		<div id="login" className="content-center">
			<form>
				<div>
					<label htmlFor="email">Email Address</label>
					<input id="email" name="email" type="email" />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input id="password" name="password" type="password" />
				</div>
			</form>
		</div>
	);
};

export default Login;
