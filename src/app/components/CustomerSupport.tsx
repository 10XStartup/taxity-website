import Image from "next/image";
import React, { Fragment } from "react";
import Customer from "../assets/Customer.svg";
import Check from "../assets/Check.svg";
import Card1 from "../assets/Card1.svg";
import Card2 from "../assets/Card2.svg";
import Card3 from "../assets/Card3.svg";

const budgets = [
	{ id: 1, budget: "Monthly budget" },
	{ id: 2, budget: "Weekly budget" },
	{ id: 3, budget: "Weekdays budget" },
	{ id: 4, budget: "Weekend budget" },
];

const data = [
	{
		id: 1,

		heading: "Pay for your TP easily",
		desc: "Scan the QR code pasted on any taxity enabled car to pay.",
		icon: Card1,
	},
	{
		id: 2,

		heading: "All day ride?",
		desc: "Yes, let taxity drivers take you around all day in comfort and pay once.",
		icon: Card2,
	},
	{
		id: 3,

		heading: "Let us take you to work",
		desc: "We calculate the distance from your home and office to generate subscription price for you.",
		icon: Card3,
	},
];
export default function CustomerSupport() {
	return (
		<section className="w-[95%] md:w-[90%]">
			<article className=" h-full pb-4 w-full mt-20">
				<div className="w-full h-full">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
						<div className="h-full ">
							<Image
								src={Customer}
								alt=""
								className="h-42 lg:w-[500px] object-cover"
								loading="lazy"
							/>

							<div className="h-42 mt-12  md:hidden flex flex-col justify-center px-3 text-black">
								<h3 className=" font-bold lg:text-4xl">
									24hours customer support
								</h3>
								<br />
								<p className="text-sm lg:text-base">
									Our availability is constant, whether you have inquiries to
									make or problems to solve, we are here to listen and assist
									you.
								</p>
								<p>Call us on +234 9029104210</p>
								<div className="h-1/2 "></div>
							</div>

							<div className="flex flex-col justify-center px-3 mt-16 text-black">
								<h3 className="font-bold lg:text-4xl">
									Making daily commute easy for Africans
								</h3>

								<p className="my-4 text-sm lg:text-base">
									We have made it very easy to commute from your home to work
									everyday in style,we dont just stop there, we also made it
									easy for everyday taxi users to pay on the spot. Download the
									mobile app now.
								</p>
								<div className="">
									{budgets.map((_v) => (
										<div
											className="flex items-center text-black my-2"
											key={_v.id}>
											<Image
												src={Check}
												alt="tick"
												className="w-6 mr-3"
												loading="lazy"
											/>
											<p>{_v.budget}</p>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="h-42 hidden md:flex flex-col justify-center px-3 text-black">
							<h3 className=" font-bold lg:text-4xl">
								24hours customer support
							</h3>
							<br />
							<p className="text-sm lg:text-base">
								Our availability is constant, whether you have inquiries to make
								or problems to solve, we are here to listen and assist you.
							</p>
							<p>Call us on +234 9029104210</p>
							<div className="h-1/2 "></div>
						</div>
					</div>

					<div className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-4 items-center px-4 mt-16">
						{data.map((_v) => (
							<div key={_v.id} className="basis-[45%] my-4 md:my-0">
								<Image
									src={_v.icon}
									alt="tick"
									className="-mb-4 -ml-5"
									loading="lazy"
								/>
								<h5 className="text-lg mb-3 text-black">{_v.heading}</h5>
								<p className="text-sm text-[#4F4F4F]">{_v.desc}</p>
							</div>
						))}
					</div>
				</div>
			</article>
		</section>
	);
}
