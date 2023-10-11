import React from "react";
// import { AppStores } from "./Header";
import Driver from "../assets/Driver.svg";
import Image from "next/image";

export default function ShortCard() {
	return (
		<section>
			<article className="bg-lightPrimary py-4  md:grid md:grid-cols-2 lg:gap-4 content-center lg:px-6 lg:mx-10 xl:px-4 xl:mx-[4.5rem] md:rounded-xl mt-6 lg:rounded-[30px]">
				<div className="px-6 mt-6 text-center lg:text-start text-primary ">
					<h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-start ">
						Are you a driver
					</h2>
					<p className="text-xs md:text-sm text-primary my-6 md:my-3 md:text-start">
						Move your ride-hailing or taxi business to the next level and earn
						more cash with taxity, register with our mobile app today and let
						our passengers pay you with convenience. As a taxi driver, you do
						not necessarily need a smartphone to start. but as a ride-hailing
						driver quickly install our app and get started.
					</p>
					{/* <AppStores /> */}
				</div>
				<div className="hidden md:block ">
					<Image src={Driver} loading="lazy" alt="" />
				</div>
			</article>
		</section>
	);
}
