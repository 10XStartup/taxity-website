import CustomerSupport from "./components/CustomerSupport";
import ShortCard from "./components/ShortCard";
import Subscription from "./components/Subscription";
import Waitlist from "./components/Waitlist";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
	return (
		<main className="flex w-full bg-[url('assets/Sectionbg.svg')] bg-white bg-center bg-no-repeat flex-col items-center justify-between  py-10 mx-auto">
			<WhatWeDo />
			<Waitlist />
			<Subscription />
			<ShortCard />
			<CustomerSupport />
		</main>
	);
}
