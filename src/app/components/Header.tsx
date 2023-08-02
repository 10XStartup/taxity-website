import Image from "next/image";
import Logo from "../assets/Logo.svg";
import GooglePlay from "../assets/GooglePlay.svg";
import AppStore from "../assets/AppStore.svg";
import Phone from "../assets/Phone1.svg";

export const AppStores = () => (
	<div>
		<p className="md:text-start">Coming soon</p>
		<div className="w-full flex justify-center lg:justify-between items-center md:items-start md:w-fit mt-4">
			<Image
				src={GooglePlay}
				alt="logo"
				className="mr-2 w-27 lg:w-36"
				loading="lazy"
			/>
			<Image
				src={AppStore}
				alt="logo"
				className="w-27 lg:w-36"
				loading="lazy"
			/>
		</div>
	</div>
);

const Header = () => {
	return (
		<header className="md:h-[70vh] lg:h-[80vh] w-full py-10 bg-[url('assets/background.svg')] bg-cover bg-no-repeat">
			<article className="w-[90%] h-full mx-auto">
				<nav>
					<Image
						src={Logo}
						alt="logo"
						priority={true}
						className="mx-auto md:mx-0 w-1/2 md:w-48 lg:w-52"
					/>
				</nav>
				<div className="grid grid-cols-1 justify-items-center md:justify-items-start md:grid-cols-2 h-full lg:mt-16 mt-10 text-white">
					<div className="h-full md:h-[70%] w-full flex flex-col justify-between lg:justify-evenly  xl:w-4/5 lg:pr-10 text-center lg:text-start ">
						<h1 className="font-bold text-2xl lg:text-5xl leading-1 text-center md:text-start">
							Budget your movement for the month
						</h1>
						<p className="text-center text-sm leading-6 lg:text-base md:text-start xl:pr-14 my-10 md:my-0">
							Experience affordable transportation options with Taxity: choose
							daily regular taxis within your monthly budget, subscribe for
							convenient home-to-work rides, or enjoy a one-time full-day ride
							at a fixed fee
						</p>
						<AppStores />
					</div>
					<div className="h-full mt-10 w-full md:mt-0 md:h-[70%] ">
						<Image
							src={Phone}
							alt="logo"
							className="w-1/2 h-[100%] mx-auto lg:ml-auto"
							loading="lazy"
						/>
					</div>
				</div>
			</article>
		</header>
	);
};

export default Header;
