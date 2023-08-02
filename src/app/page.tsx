import CustomerSupport from "./components/CustomerSupport";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShortCard from "./components/ShortCard";
import Subscription from "./components/Subscription";
import Waitlist from "./components/Waitlist";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
	return (
		<>
			<Header />
			<main className="flex w-full bg-[url('assets/Sectionbg.svg')] bg-white bg-center bg-no-repeat flex-col items-center justify-between  py-10 mx-auto">
				<WhatWeDo />
				<Waitlist />
				<Subscription />
				<ShortCard />
				<CustomerSupport />
			</main>
			<Footer />
		</>
	);
}
