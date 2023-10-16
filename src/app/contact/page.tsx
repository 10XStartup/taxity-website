"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Link from "next/link";
import React, { useCallback, useEffect } from "react";
import PhoneIcon from "@/app/assets/PhoneIcon.svg";
import WhatappIcon from "@/app/assets/WhatappIcon.svg";
import LocationIcon from "@/app/assets/LocationIcon.svg";
import Image from "next/image";

const data = [
	{
		id: 1,
		icon: PhoneIcon,
		name: "Phone",
		link: "tel:+234 8135967639",
		desc: "+234 8135967639",
	},
	{
		id: 2,
		icon: WhatappIcon,
		name: "WhatsApp",
		link: "https://wa.link/fbhd67",
		desc: "+234 8135967639",
	},
	{
		id: 3,
		icon: LocationIcon,
		name: "Email",
		link: "mailto:support@taxity.africa",
		desc: "support@taxity.africa",
	},
];

export default function Contact() {
	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: "AIzaSyCDfI1GOcaZ2W3xQZyWwN_d2ZUzMufGSS4",
	});
	const containerStyle = {
		width: "100%",
		height: "100%",
	};

	const center = { lat: 9.0765, lng: 7.3986 };

	const location = {
		lat: 9.0322968,
		lng: 7.465841,
	};
	const handleScriptLoad = useCallback(() => {
		const directionService = new google.maps.DirectionsService();
	}, []);

	useEffect(() => {
		if (isLoaded) {
			handleScriptLoad();
		}
		return;
	}, [handleScriptLoad, isLoaded]);

	return (
		<section className="w-screen bg-center bg-cover md:pt-24">
			<article className="flex items-start h-full max-w-screen-xl  mx-auto  md:shadow-lg bg-white rounded-xl lg:mt-0 md:px-6">
				{/* <div className="w-full py-4 md:py-10">
					<h1 className="font-bold text-primary text-base md:text-lg text-center">
						Follow us on our social media
					</h1>
				</div> */}

				<div className="px-4 py-4 md:py-10 bg-white  w-full max-w-[42rem] mx-auto">
					<form className="w-full  mb-6 ">
						<div className="my-6">
							<h2 className="font-bold text-2xl md:text-[45px] text-black text-center md:text-start">
								Get in <span className="text-primary-light">Touch</span>{" "}
							</h2>
							<h5 className="text-center md:text-start md:my-5 text-black">
								Got any issue? contact us through the following channels
							</h5>
						</div>
						<div className="mb-6">
							<input
								type="text"
								id="name"
								className=" border border-gray text-gray-900 text-sm rounded-[14px] focus:border-primary w-full py-3.5 px-2.5"
								placeholder="your name"
								required
							/>
						</div>
						<div className="mb-6">
							<input
								type="email"
								id="email"
								className="border border-gray text-gray-900 text-sm rounded-[14px] focus:border-primary w-full py-3.5 px-2.5"
								placeholder="mail@mail.com"
								required
							/>
						</div>
						<div className="mb-6">
							<textarea
								id="message"
								rows={4}
								className="bg-grey-light border border-gray text-gray-900 text-sm rounded-lg focus:border-primary  block w-full py-4 px-2.5"
								placeholder="Your message..."></textarea>
						</div>
						<button
							type="submit"
							className="text-white bg-primary-dark hover:bg-primary w-full focus:ring-4 focus:ring-blue-300  rounded-xl text-sm px-5  mr-2 mb-2 block font-bold py-4">
							Submit
						</button>
					</form>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-2">
						{data.map((v) => (
							<Link
								key={v.id}
								href={v.link}
								className=" py-2 px-3 md:py-3 md:px-4 bg-[#AAB8B7] rounded-xl text-white text-xs md:text-sm flex items-center gap-x-3 justify-center">
								<Image src={v.icon} alt="" />
								<div>
									<p>{v.name}</p>
									<p>{v.desc}</p>
								</div>
							</Link>
						))}
					</div>
				</div>

				<div className="hidden h-[20rem] md:h-[30rem] lg:h-[40rem] w-full p-4">
					{isLoaded ? (
						<GoogleMap
							mapContainerStyle={containerStyle}
							center={center}
							zoom={50}>
							<Marker position={location} />
						</GoogleMap>
					) : null}
				</div>
			</article>
		</section>
	);
}
