import React from "react";
import Button from "./Button";

const BUTTONS = [
	"All",
	"Gaming",
	"Music",
	"Coding",
	"News",
	"Programming",
	"Education",
	"Other",
];

const ButtonList = () => {
	return (
		<div className="flex pt-1">
			{BUTTONS.map((item) => (
				<Button name={item} isActive={item === "All"} />
			))}
		</div>
	);
};

export default ButtonList;
