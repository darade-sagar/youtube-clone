import React from "react";

const Button = ({ name, isActive = false }) => {
	const cssClass =
		"px-5 py-1 m-2 border rounded-md font-semibold cursor-pointer hover:bg-slate-200";
	return (
		<div className={isActive ? cssClass + " bg-slate-200" : cssClass}>
			{name}
		</div>
	);
};

export default Button;
