import PlayStore from "./assets/GooglePlay.svg";
import AppStore from "./assets/AppStore.svg";
import Phone from "./assets/Phone.svg";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<section className=" w-screen h-screen">
			<article className="h-[80%] max-w-screen-xl md:pt-24 mx-auto">
				<div className="flex flex-col lg:flex-row justify-center items-center h-full  ">
					<div className="basis-[50%]  px-2 md:px-4 lg:px-6 py-4 flex pt-6  md:pt-0 flex-col items-centergap-y-6 md:gap-y-10">
						<div className=" py-6  mt-0  flex justify-center flex-col items-center px-6 md:px-4 gap-y-6 md:gap-y-10">
							<h1 className="text-xl md:text-4xl lg:text-5xl text-center lg:text-start text-black font-bold">
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
						<div className="w-full h-fit flex justify-center lg:justify-start gap-x-3 px-4">
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
					<div className="basis-1/2 ">
						<Image
							src={Phone}
							alt=""
							className="w-[90%] md:w-full md:h-full lg:w-[60%] object-cover mx-auto"
							loading="eager"
						/>
					</div>
				</div>
			</article>
		</section>
	);
}
