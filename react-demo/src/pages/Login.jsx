import React from "react";
import "./Login.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import FormikInput from "../components/FormikInput";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const initialValues = {email: "", password: ""};
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.required("E-posta alanı zorunludur.")
			.email("Lütfen düzgün bir mail giriniz."),
		password: Yup.string().required().min(3),
	});
	return (
		<div id="login" className="content-center">
			<Formik
				initialValues={initialValues}
				onSubmit={values => {
					axios
						.post("https://localhost:7285/api/Auth/Login", values)
						.then(response => {
							navigate("/");
							let token = response.data.accessToken.token;
							localStorage.setItem("token", token);
						})
						.catch(err => {
							alert("E-posta veya şifre yanlış");
						});
				}}
				validationSchema={validationSchema}
			>
				<Form>
					<FormikInput name="email" title="E-Posta" />
					<FormikInput type="password" name="password" title="Şifre" />
					<button className="btn btn-primary w-100" type="submit">
						Giriş Yap
					</button>
				</Form>
			</Formik>
		</div>
	);
};
export default Login;
