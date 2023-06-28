import Image from "next/image";
import React, { MouseEventHandler } from "react";
import Logo from "../assets/Logo.svg";
import Button from "./Button";

export default function Modal({
	onClick,
}: {
	onClick: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<div className="fixed top-0 left-0 w-screen h-full bg-[rgba(0,0,0,0.89)] z-10 flex flex-col justify-center items-center">
			<div className="py-10 md:w-[70%] px-3 rounded-lg bg-primary text-white flex flex-col justify-center items-center">
				<Image src={Logo} alt="taxity" className=" w-1/2" />
				<h1 className="font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-4 mb-4 ">
					Thank you!
				</h1>
				<p className="text-sm md:text-base">
					You have been added to Taxity waitlist
				</p>
				<p className="text-sm md:text-base">
					We will update you soon with your invites
				</p>
				<div className="mt-4 w-[50%]">
					<Button name="Close" type="button" onClick={onClick} />
				</div>
			</div>
		</div>
	);
}
