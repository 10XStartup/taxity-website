import Link from "next/link";
import Image from "next/image";
import React from "react";
// import PlayStore from "@/app/assets/GooglePlay.svg";
import PlayStore from '../assets/GooglePlay.svg'
import AppStore from "../assets/AppStore.svg";

import Arrow from "@/app/assets/Arrow.svg";
import Thumbsup from "@/app/assets/Thumbsup.svg";
import ProductImage from "@/app/assets/ProductImage.webp";

const data = [
	{
		id: 1,
		icon: Arrow,
		heading: "Ride -Hailing Subscription",
		desc: "Taxity offers a subscription service for convenient home-to-work rides, providing hassle-free commuting between your home and workplace.",
	},
	{
		id: 2,
		icon: Thumbsup,
		heading: "Budget and pay regular taxi",
		desc: "Taxity provides affordable daily taxis within your monthly budget. Pay upfront for your transportation fees and conveniently scan the driver's car QR code with the app for payment. Start using Taxity today for hassle-free rides.",
	},
];

export default function Product() {
	return (
		<section className=" w-screen h-screen ">
			<article className="h-[60%] max-w-screen-xl pt-24 mx-auto">
				<div className="flex flex-col lg:flex-row justify-center mt-2 h-full md:mt-16 ">
					<div className="basis-[40%] lg:h-full  hidden lg:block">
						<div className="w-full h-full flex flex-col gap-y-3 items-center justify-between">
							<Image
								src={ProductImage}
								alt=""
								className="w-full md:w-1/2 lg:w-[60%] object-fit "
								loading="eager"
							/>
							<p className="text-black text-start">
								Download the app to join us
							</p>
							<div className=" w-full h-fit flex justify-center gap-x-3">
								<Link href="https://play.google.com/store/apps/details?id=com.app.taxity.android">
									<Image
										src={PlayStore}
										alt="playstore"
										loading="eager"
										className="w-24 md:w-36 object-cover"
									/>
								</Link>
								<Link href="/">
									<Image
										src={AppStore}
										alt="playstore"
										loading="eager"
										className="w-24 md:w-36 object-cover"
									/>
								</Link>
							</div>
						</div>
					</div>
					<div className="basis-[60%] h-full">
						<div className="w-full  grid grid-cols-1 gap-y-8 lg:gap-y-6 px-4 lg:px-0">
							{data.map((d) => (
								<div
									key={d.id}
									className="w-full flex flex-col items-start gap-y-2 md:rounded-[30px] rounded-xl py-4 px-6 md:px-6 md:py-9 bg-[#E5F0F0]">
									<span className="block">
										<Image src={d.icon} alt="" loading="lazy" />
									</span>
									<h3 className="font-bold text-base md:text-xl  text-black">
										{d.heading}
									</h3>
									<p className="text-xs md:text-base text-black">{d.desc}</p>
								</div>
							))}
						</div>
						<div className="px-6 py-4 flex gap-x-4">
							<Link
								href="/drivers-privacy-policy"
								className=" text-[#5458F7] text-xs md:text-base">
								Drivers Policy
							</Link>

							<Link
								className=" text-[#5458F7] text-xs md:text-base"
								href="/passenger-privacy-policy">
								Passenger Policy
							</Link>
							<Link
								className=" text-[#5458F7] text-xs md:text-base"
								href="/terms-of-use">
								Terms of Use
							</Link>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
}
