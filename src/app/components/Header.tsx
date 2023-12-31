import Image from "next/image";
import Logo from "../assets/Logo.svg";
// import GooglePlay from "../assets/googleplay.svg";
// import AppStore from "../assets/appStore.svg";
import Phone from "../assets/Phone1.svg";

// export const AppStores = () => (
// 	<div>
// 		<p className="md:text-start">Coming soon</p>
// 		<div className="w-full flex justify-center lg:justify-between items-center md:items-start md:w-fit mt-4">
// 			<Image
// 				src={GooglePlay}
// 				alt="logo"
// 				className="mr-2 w-27 lg:w-36"
// 				loading="lazy"
// 			/>
// 			<Image
// 				src={AppStore}
// 				alt="logo"
// 				className="w-27 lg:w-36"
// 				loading="lazy"
// 			/>
// 		</div>
// 	</div>
// );

const Header = () => {
	return (
		<header className="w-full z-10 mx-auto py-4 fixed left-0 ">
			<article className="w-[100%] max-w-screen-xl h-full mx-auto">
				<nav className="md:pl-6">
					<Image
						src={Logo}
						alt="logo"
						priority={true}
						className="mx-auto md:mx-0 w-[20%] md:w-36 lg:w-48"
					/>
				</nav>
			</article>
		</header>
	);
};

export default Header;
