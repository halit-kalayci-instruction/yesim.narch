import React from "react";
import "./Login.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import FormikInput from "../components/FormikInput";

const Login = () => {
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
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
				<Form>
					<FormikInput name="email" title="E-Posta" />
					<FormikInput type="password" name="password" title="Şifre" />
					<button type="submit">Giriş Yap</button>
				</Form>
			</Formik>
		</div>
	);
};

export default Login;
