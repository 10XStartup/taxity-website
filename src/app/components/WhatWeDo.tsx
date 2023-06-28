import React from "react";
import Image from "next/image";
import Icon1 from "../assets/Icon1.svg";
import Icon2 from "../assets/Icon2.svg";
import Icon3 from "../assets/Icon3.svg";
import Icon4 from "../assets/Icon4.svg";

const data = [
	{
		id: 1,

		heading: "Don't run out of transportation money",
		desc: "Taxity offers daily regular taxis within your monthly budget. Set aside your transportation fee for the month upfront and use it effectively. you can pay for your tp by simply scanning the QR code on the driver's car with your app. Get started now with Taxity",
		icon: Icon1,
	},
	{
		id: 2,

		heading: "Daily work commute subscription with a dedicated driver",
		desc: "Convenient home-to-work rides: Taxity provides a subscription service for convenient home-to-work rides. With this feature, you can subscribe to a specific transportation plan that ensures hassle-free commuting between your home and workplace.",
		icon: Icon2,
	},
	{
		id: 3,

		heading: "Make or join a group susbscription",
		desc: "Can't afford a subscription alone, don't worry, Taxity will match and pair you with with other subscribers going almost the same location or area and have you guys split the bills and a driver take you to and from work everyday. Get started by installing the mobile app from playstore or app store.",
		icon: Icon3,
	},
	{
		id: 4,

		heading: "Let someone drive you all day",
		desc: "Experience a full-day ride with Taxity at a fixed fee, giving you the freedom to move to multiple destinations without any extra costs. Enjoy the convenience and flexibility of transportation throughout the day, knowing there are no surprises in pricing.",
		icon: Icon4,
	},
];

export default function WhatWeDo() {
	return (
		<section className="w-[95%] md:w-[90%]">
			<article>
				<div>
					<h1 className="font-bold text-xl lg:text-3xl text-center text-primary">
						What we do
					</h1>
				</div>

				<div className="h-full w-full lg:w-[90%] mx-auto  grid grid-cols-1 gap-4  content-between justify-items-center md:grid-cols-2 px-2 md:px-0 mt-6">
					{data.map((_v, i) => (
						<div
							key={_v.id}
							className="bg-lightPrimary w-full  p-2  rounded-lg">
							<div className="flex items-center text-sm  text-primary md:text-lg ">
								<Image
									src={_v.icon}
									alt=""
									className="h-16 w-12 mr-4"
									loading="lazy"
								/>
								<h1>{_v.heading}</h1>
							</div>
							<div className="mt-3 py-3 px-1 md:px-4">
								<p className="text-xs text-primary md:text-ms leading-5">
									{_v.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</article>
		</section>
	);
}
