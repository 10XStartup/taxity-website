import CustomerSupport from "./components/CustomerSupport";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShortCard from "./components/ShortCard";
import Subscription from "./components/Subscription";
import Waitlist from "./components/Waitlist";
import WhatWeDo from "./components/WhatWeDo";
import PlayStore from "./assets/GooglePlay.svg";

// export default function Home() {
// 	return (
// 		<>
// 			<Header />
// 			<main className="flex w-full bg-[url('assets/Sectionbg.svg')] bg-white bg-center bg-no-repeat flex-col items-center justify-between  py-10 mx-auto">
// 				{/* <WhatWeDo />
// 				<Waitlist />
// 				<Subscription />
// 				<ShortCard />
// 				<CustomerSupport /> */}
// 			</main>
// 			{/* <Footer /> */}
// 		</>
// 	);
// }

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<section className="bg-white w-screen h-screen overflow-hidden bg-[url('assets/background.svg')] bg-cover bg-center bg-no-repeat">
			<article className="h-full max-w-screen-xl">
				<Header />
				<div className="h-full w-full px-2 md:px-4 lg:px-6 py-4 flex pt-12  md:pt-0 flex-col items-center gap-y-10">
					<div className="md:w-[95%] lg:w-[90%] md:h-[256px] py-4 md:py-0 bg-[#F0FBF8] md:rounded-[47px] mt-0 md:mt-36 flex justify-center flex-col items-center px-2 md:px-4 gap-y-10">
						<h1 className="text-xl md:text-4xl text-center text-black">
							Taxity, the{" "}
							<span className="text-primary-light">subscription</span> and
							budget <span className="text-primary-light">ride-share</span>{" "}
							infrastructure for Africa
						</h1>
						<p className="text-sm text-center md:text-base lg:text-lg text-black">
							Experience affordable transportation options with Taxity, pay a
							daily regular taxis within your monthly budget, subscribe for
							convenient home-to-work rides.
						</p>
					</div>
					<div className=" w-full h-fit flex justify-center gap-x-3">
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
			</article>
		</section>
	);
}
