import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Logo from "../app/assets/Logo.svg";
import GooglePlay from "../app/assets/googleplay.svg";
import AppStore from "../app/assets/appstore.svg";
import Phone from "../app/assets/phone1.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import "aos/dist/aos.css";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Taxity",
	description: "Budget your movement for the month",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<main className="h-full w-full mx-auto ">
					<section>{children}</section>
					<nav className="w-full ">
						<div className="fixed p-2 md:px-4 z-50 w-[95%] h-12 max-w-lg -translate-x-1/2  bg-primary-dark border border-primary-dark rounded-[14px] bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 ">
							<div className="grid h-full max-w-lg grid-cols-5 mx-auto">
								<button
									data-tooltip-target="tooltip-home"
									type="button"
									className="inline-flex text-white active:bg-emerald-900 active:text-primary-dark rounded-lg flex-col items-center justify-center px-5  hover:bg-gray-50 dark:hover:bg-gray-800 group">
									<span className=" text-xs text-white">Home</span>
								</button>
							</div>
						</div>
					</nav>
				</main>
			</body>
		</html>
	);
}
