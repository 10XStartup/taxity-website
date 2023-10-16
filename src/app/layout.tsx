"use client";

import "./globals.css";
import { Baloo_2 } from "next/font/google";
import Header from "./components/Header";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ id: 1, name: "Home", link: "/" },
	{ id: 2, name: "Products", link: "/products" },
	{ id: 3, name: "Features", link: "/features" },
	{ id: 4, name: "Calculator", link: "/calculator" },
	{ id: 5, name: "Contact us", link: "/contact" },
];

// If loading a variable font, you don't need to specify the font weight
const Baloo = Baloo_2({
	subsets: ["devanagari"],
	display: "swap",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const location = usePathname();

	const active = (path: string) =>
		location === path
			? "bg-white text-primary-dark font-bold"
			: "text-white bg-primary-dark";

	return (
		<html lang="en" className={Baloo.className}>
			<body className=" h-screen w-screen bg-white  bg-[url('assets/background.svg')]  bg-cover bg-center bg-no-repeat ">
				<main className="h-screen overflow-x-hidden  w-full  mx-auto ">
					<Header />
					<section>{children}</section>

					<nav className="w-full ">
						<div className="fixed shadow-lg py-2 px-4 md:px-2 z-50 w-[90%] mx-auto md:w-[100%] h-12 md:h-14 max-w-xl -translate-x-1/2  bg-primary-dark border border-primary-dark rounded-[14px] bottom-4 md:bottom-10 left-1/2  ">
							<div className="grid h-full max-w-lg grid-cols-5 mx-auto">
								{links.map((d) => (
									<Link
										key={d.id}
										href={d.link}
										data-tooltip-target="tooltip-home"
										type="button"
										className={`inline-flex ${active(
											d.link
										)} rounded-lg flex-col items-center justify-center px-1  hover:bg-gray-50 dark:hover:bg-gray-800`}>
										<span className="text-[10px] md:text-base ">{d.name}</span>
									</Link>
								))}
							</div>
						</div>
					</nav>
				</main>
			</body>
		</html>
	);
}
