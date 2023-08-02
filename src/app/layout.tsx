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
			<body className="bg-primary">
				<main className="h-full w-full mx-auto bg-white">
					{children}
					{/* <Footer /> */}
				</main>
			</body>
		</html>
	);
}
