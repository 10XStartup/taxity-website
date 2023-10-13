import CustomerSupport from "./components/CustomerSupport";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShortCard from "./components/ShortCard";
import Subscription from "./components/Subscription";
import Waitlist from "./components/Waitlist";
import WhatWeDo from "./components/WhatWeDo";
import PlayStore from "./assets/GooglePlay.svg";
import Phone from "./assets/Phone.svg";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<section className=" w-screen h-screen">
			<article className="h-[80%] max-w-screen-xl mx-auto">
				<div className="flex flex-col lg:flex-row justify-center items-center h-full  ">
					<div className="basis-[50%]  px-2 md:px-4 lg:px-6 py-4 flex pt-6  md:pt-0 flex-col items-centergap-y-6 md:gap-y-10">
						<div className=" py-6  mt-0  flex justify-center flex-col items-center px-2 md:px-4 gap-y-6 md:gap-y-10">
							<h1 className="text-xl md:text-4xl lg:text-5xl text-center lg:text-start text-black">
								Taxity, the{" "}
								<span className="text-primary-light">subscription</span> and
								budget <span className="text-primary-light">ride-share</span>{" "}
								infrastructure for Africa
							</h1>
							<p className="text-sm text-center md:text-base lg:text-lg lg:text-start text-black">
								Experience affordable transportation options with Taxity, pay a
								daily regular taxis within your monthly budget, subscribe for
								convenient home-to-work rides.
							</p>
						</div>
						<div className=" w-full h-fit flex justify-center lg:justify-start gap-x-3">
							<Link href="https://play.google.com/store/apps/details?id=com.app.taxity.android">
								<Image
									src={PlayStore}
									alt="playstore"
									loading="eager"
									className="w-24 md:w-36 object-cover"
								/>
							</Link>
							<Link href="https://play.google.com/store/apps/details?id=com.app.taxity.android">
								<Image
									src={PlayStore}
									alt="playstore"
									loading="eager"
									className="w-24 md:w-36 object-cover"
								/>
							</Link>
						</div>
					</div>
					<div className="basis-1/2 ">
						<Image
							src={Phone}
							alt=""
							className="w-[60%] md:w-full lg:w-[60%] object-cover mx-auto"
							loading="eager"
						/>
					</div>
				</div>
			</article>
		</section>
	);
}
