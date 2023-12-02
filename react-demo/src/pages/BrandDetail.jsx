import React, {useEffect} from "react";
import {useLocation, useSearchParams, useParams} from "react-router-dom";
function BrandDetail() {
	// const location = useLocation();
	// const parameters = useSearchParams();
	const params = useParams();

	useEffect(() => {
		// console.log(parameters[0].get("id"));
		if (!params.id) return;
		fetchBrandDetail(params.id);
	}, []);

	const fetchBrandDetail = id => {
		console.log("Backende istek atılıyor id:" + id);
		// axios get
	};

	return <div>BrandDetail</div>;
}

export default BrandDetail;
