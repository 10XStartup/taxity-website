"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Logo from "../app/assets/Logo.svg";
import GooglePlay from "../app/assets/googleplay.svg";
import AppStore from "../app/assets/appstore.svg";
import Phone from "../app/assets/phone1.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
// import "aos/dist/aos.css";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
// 	title: "Taxity",
// 	description: "Budget your movement for the month",
// };

const links = [
	{ id: 1, name: "Home", link: "/" },
	{ id: 2, name: "Calculator", link: "/calculator" },
	{ id: 2, name: "Products", link: "/products" },
	{ id: 2, name: "Contact us", link: "/contact" },
];

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const location = usePathname();

	console.log(location);
	const active = (path: string) =>
		location === path
			? "bg-white text-primary-dark font-bold"
			: "text-white bg-primary-dark";
	return (
		<html lang="en">
			<body>
				<main className="h-full w-full mx-auto ">
					<section>{children}</section>
					<nav className="w-full ">
						<div className="fixed shadow-lg p-2 md:px-4 z-50 w-[95%] h-12 max-w-lg -translate-x-1/2  bg-primary-dark border border-primary-dark rounded-[14px] bottom-4 md:bottom-14 left-1/2 dark:bg-gray-700 dark:border-gray-600 ">
							<div className="grid h-full max-w-lg grid-cols-4 mx-auto">
								{links.map((d) => (
									<Link
										key={d.id}
										href={d.link}
										data-tooltip-target="tooltip-home"
										type="button"
										className={`inline-flex ${active(
											d.link
										)} rounded-lg flex-col items-center justify-center px-1  hover:bg-gray-50 dark:hover:bg-gray-800`}>
										<span className=" text-[10px] md:text-sm ">{d.name}</span>
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
