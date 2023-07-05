import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../assets/Logo.svg";
import Twitter from "../assets/Twitter.svg";
import Linkedin from "../assets/Linkedin.svg";
import WhatsApp from "../assets/WhatsApp.svg";
import Instagram from "../assets/Instagram.svg";
import Phone from "../assets/Phone.svg";
import Message from "../assets/Message.svg";
import Location from "../assets/Location.svg";

const footData = [
	{
		id: 1,
		name: "Navigations",
		items: [
			{ slug: "privacy_policy", name: "Privacy Policy", icon: null },
			{ slug: "term_of_use", name: "Terms of use", icon: null },
		],
	},
	{
		id: 2,
		name: "Socials",
		items: [
			{ slug: "instagram_icons", name: "Twitter", icon: Instagram },
			{ slug: "twitter_icons", name: "Twitter", icon: Twitter },
			{ slug: "linkedin_icons", name: "LinkedIn", icon: Linkedin },
			{ slug: "whatsapp_icons", name: "WhatsApp", icon: WhatsApp },
		],
	},
	{
		id: 3,
		name: "Contact",
		items: [
			{
				slug: "location",
				name: ". suite 206 merit mall Apo, Abuja",
				icon: Location,
			},
			{
				slug: "phone",
				name: ". +2349029104210",
				icon: Phone,
				link: "tel:+2349029104210",
			},
			{
				slug: "message",
				name: ".contact@taxity.africa",
				icon: Message,
				link: "mailto:contact@taxity.africa",
			},
		],
	},
];

export default function Footer() {
	return (
		<footer className="h-full w-full bg-black">
			<article className="w-[95%] md:w-[90%] mx-auto py-10">
				<div className=" w-full h-full flex flex-row justify-between flex-wrap ">
					{footData.map((_v) => (
						<div key={_v.id} className="mx-2">
							{_v.id !== 4 ? (
								<div>
									<h1 className="text-lg md:text-2xl">{_v.name}</h1>
									<div className="mt-6">
										{_v.items?.map((_v) => (
											<div
												key={_v.slug}
												className="flex flex-col text-sm lg:text-base">
												<Link
													href={_v.link || ""}
													className="flex items-center my-2">
													{_v.icon ? (
														<Image
															src={_v.icon || ""}
															alt="twitter"
															priority={true}
															className="h-4 w-4 mr-2"
														/>
													) : null}

													{_v.name}
												</Link>
											</div>
										))}
									</div>
								</div>
							) : null}
						</div>
					))}
					<div className="lg:basis-[35%] ml-3">
						<Image
							src={Logo}
							loading="lazy"
							alt="Taxity"
							className="h-20 w-20 lg:h-10 lg:w-36"
						/>
						<p className=" text-white text-sm md:text-base leading-6 md:mt-2 lg:mt-4">
							Taxity provides affordable transportation options tailored to your
							needs. Whether you prefer daily regular taxis within your budget,
							convenient home-to-work rides through a subscription, or a
							fixed-fee full-day ride, Taxity aims to offer flexibility,
							affordability, and convenience in your transportation experience
						</p>
					</div>
				</div>
			</article>
		</footer>
	);
}
