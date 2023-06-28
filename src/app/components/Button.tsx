import React, { MouseEventHandler } from "react";

export default function Button({
	name,
	onClick,
	type,
	styles = "w-full py-2  mt-3 rounded-lg bg-transparent border border-gray text-white",
}: {
	name: string;
	type: "button" | "submit" | "reset";
	onClick?: MouseEventHandler<HTMLButtonElement>;
	styles?: string;
}) {
	return (
		<button type={type} className={styles} onClick={onClick}>
			{name}
		</button>
	);
}
