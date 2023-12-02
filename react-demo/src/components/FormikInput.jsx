import {ErrorMessage, Field} from "formik";
import React from "react";

function FormikInput(props) {
	// const type = props.type || "text"; // props.type var ise o değer, yoksa "text" değeri
	return (
		<div className="d-flex">
			<label htmlFor={props.name}>{props.title}</label>
			<Field
				className="form-control"
				name={props.name}
				type={props.type || "text"}
			/>
			<ErrorMessage name={props.name}>
				{message => <span style={{color: "red"}}>{message}</span>}
			</ErrorMessage>
		</div>
	);
}

export default FormikInput;
