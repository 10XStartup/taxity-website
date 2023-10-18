import Link from "next/link";
import Image from "next/image";
import React from "react";
import PlayStore from "@/app/assets/GooglePlay.svg";
import AppStore from "@/app/assets/AppStore.svg";

import Lady from "@/app/assets/Lady.webp";

const data = [
	{
		id: 1,
		heading: "Ride -Hailing Subscription",
		desc: "Taxity offers a subscription service for convenient home-to-work rides, providing hassle-free commuting between your home and workplace.",
	},
	{
		id: 2,
		heading: "Budget and pay regular taxi",
		desc: "Taxity provides affordable daily taxis within your monthly budget. Pay upfront for your transportation fees and conveniently scan the driver's car QR code with the app for payment. Start using Taxity today for hassle-free rides.",
	},
	{
		id: 3,
		heading: "Create or Join a group Subscription",
		desc: "Don't have the budget for a subscription by yourself? Taxity can match you with fellow subscribers heading in the same direction, so you can share costs and commute together. Start by downloading our mobile app from the Play Store or App Store.",
	},
	{
		id: 4,
		heading: "Are you a driver",
		desc: "Take your taxi or ride-hailing business to the next level with Taxity! Register on our mobile app today to increase your earnings. Taxi drivers can start without a smartphone, while ride-hailing drivers can quickly install our app to get started.",
	},
];

export default function Product() {
	return (
		<section className=" w-screen h-screen">
			<article className="h-[80%] max-w-screen-xl md:pt-24 mx-auto">
				<div className="flex flex-col lg:flex-row justify-center items-center h-full  ">
					<div className="basis-[40%] mt-16 hidden lg:block">
						<Image
							src={Lady}
							alt=""
							className="w-[90%] lg:w-[80%] object-cover "
							loading="eager"
						/>
						<div className=" w-full h-fit flex mt-4 justify-center lg:justify-start gap-x-3">
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
									src={AppStore}
									alt="playstore"
									loading="eager"
									className="w-24 md:w-36 object-cover"
								/>
							</Link>
						</div>
					</div>
					<div className="basis-[50%]">
						<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-6 md:gap-x-8 h-full px-4 md:px-10">
							{data.map((d) => (
								<div
									key={d.id}
									className="w-full flex flex-col items-start gap-y-2 ">
									<span className="inline-block py-1 px-2 md:py-4 md:px-6 rounded-full font-bold text-base md:text-lg lg:text-2xl bg-primary-dark">
										<h2 className="text-xs md:text-base">{d.id}</h2>
									</span>
									<h3 className="font-bold text-base md:text-lg  text-primary-dark">
										{d.heading}
									</h3>
									<p className="text-xs md:text-sm text-black">{d.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</article>
		</section>
	);
}
