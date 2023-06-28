"use client";
import axios from "axios";
import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function Waitlist() {
	const [email, setEmail] = useState<string>("");
	const [showModal, setShowModal] = useState<boolean>(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"https://taxity-staging-api.onrender.com/api/v1/user/waitlist",
				{ email }
			);
			if (response) {
				setShowModal((prevState) => !prevState);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const onClick = () => {
		setShowModal((prevState) => !prevState);
	};

	return (
		<section className="w-[90%] md:w-[90%]">
			{showModal ? <Modal onClick={onClick} /> : null}
			<article>
				<div className="mt-12 md:mt-14">
					<h1 className="font-bold text-xl lg:text-3xl text-center text-primary">
						Join our waitlist
					</h1>
				</div>
				<form
					className="md:w-1/2 lg:w-[492px] mx-auto"
					onSubmit={(e) => handleSubmit(e)}>
					<input
						type="email"
						required
						className="w-full border border-gray my-4 rounded-md py-3 px-2 text-sm text-black"
						placeholder="Enter your email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Button
						name="Submit"
						type="submit"
						styles="w-full py-2 rounded-lg bg-primary text-white"
					/>
				</form>
			</article>
		</section>
	);
}
