"use client";

import Image from "next/image";
import React, { Fragment, useCallback, useRef, useState } from "react";
import Note from "../assets/Note.svg";
import Phone2 from "../assets/Phone2.svg";
import Instagram from "../assets/Instagram.svg";

import {
	DirectionsRenderer,
	GoogleMap,
	Marker,
	useJsApiLoader,
} from "@react-google-maps/api";
import axios from "axios";
import Loader from "./Loader";
import Button from "./Button";

export default function Subscription() {
	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: "AIzaSyBt_vereLcrqPFn0j6AbWYKQKwTNmKzMeo",
		libraries: ["places"],
	});
	const originRef = useRef<any>();
	const destinationRef = useRef<any>();
	const [distance, setDistance] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);
	const [plan, setPlans] = useState("");
	const [directionResult, setDirectionResult] = useState<any>({});
	const [rateResponse, setResponse] = useState<{
		[x: string]: any;
	}>({});
	const [loading, setLoading] = useState(false);
	const [type, setType] = useState("");
	const [members, setMembers] = useState("");
	const [twoWay, setTwoWay] = useState(false);

	const CurrencyFormatter = (amount: number): string =>
		new Intl.NumberFormat("NGN", {
			style: "currency",
			currency: "NGN",
		}).format(amount || 0);

	const handleSubmit = useCallback(
		async (distance: number, duration: number) => {
			setLoading(true);
			if (!duration || !distance) return;
			try {
				const response = await axios.post(
					"https://taxity-staging-api.onrender.com/api/v1/ride/subscription-cost",
					{
						duration,
						distance,
						plan,
						members: Number(members),
						type,
						toAndFro: twoWay,
					}
				);
				if (response) {
					setLoading(false);
					setResponse(response?.data?.subscription);
				}
			} catch (error) {
				// console.log(error);/
				setLoading(false);
			}
		},
		[members, plan, type, twoWay]
	);

	async function calculateRoute() {
		if (
			originRef.current?.value === "" ||
			destinationRef.current?.value === ""
		) {
			return;
		}
		const directionService = new google.maps.DirectionsService();
		const result = await directionService.route({
			//the route takes the origin and the destinations and the travel mode
			origin: originRef.current?.value,
			destination: destinationRef.current?.value,
			travelMode: google.maps.TravelMode.DRIVING,
		});
		handleSubmit(
			Number(result?.routes[0]?.legs[0]?.distance?.text?.split(" ")[0]),
			Number(result.routes[0].legs[0].duration?.text?.split(" ")[0])
		);

		setDistance(
			Number(result?.routes[0]?.legs[0]?.distance?.text?.split(" ")[0]) || 0
		);
		setDuration(
			Number(result.routes[0].legs[0].duration?.text?.split(" ")[0] || 0)
		);
		setDirectionResult(result);
	}

	const containerStyle = {
		width: "400px",
		height: "400px",
	};

	const center = {
		lat: 9.072264,
		lng: 7.491302,
	};

	return (
		<section className="md:w-[90%] lg:h-fit  px-4 md:px-0 bg-primary md:rounded-[30px] mt-20 pb-4 lg:pb-10">
			<article>
				<div className="mt-12 md:mt-14 md:px-36">
					<h1 className="font-bold text-xl lg:text-3xl text-center text-white">
						Calculate your subscription cost to get an insight
					</h1>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 mt-6 lg:mt-20">
					<div className="flex flex-col items-center justify-center">
						<form
							className="lg:w-[80%] max-w-[423px] mx-auto"
							onSubmit={(e) => {
								e.preventDefault();
								calculateRoute();
							}}>
							<>
								<label className="text-white text-xs">Enter your address</label>
								<input
									ref={originRef}
									name="origin"
									type="text"
									required
									className="w-full border border-gray my-4 rounded-md py-2 px-2 text-xs lg:text-base text-black"
									placeholder="Enter your location"
								/>
								<label className="text-white text-xs">
									Enter your destination
								</label>
								<input
									ref={destinationRef}
									name="destination"
									type="text"
									required
									className="w-full border border-gray my-4 rounded-md py-2 px-2 text-xs text-black lg:text-base"
									placeholder="Enter your destination"
								/>
							</>

							<select
								required
								name="plan"
								className="w-full border border-gray my-4 rounded-md py-2 px-2 text-sm text-black"
								onChange={(e) => setPlans(e.target.value)}>
								<option>Select durations</option>

								<option value="weekly">Weekly</option>
								<option value="monthly">Monthly</option>
							</select>
							<select
								name="type"
								className="w-full border border-gray my-4 rounded-md py-2 px-2 text-sm text-black"
								onChange={(e) => setType(e.target.value)}>
								<option>Select plan</option>
								<option value="single">Single subscription</option>
								<option value="group">Group subscription</option>
							</select>
							{type === "group" ? (
								<select
									name="members"
									onChange={(e) => setMembers(e.target.value)}
									className="w-full border border-gray my-4 rounded-md py-2 px-2 text-sm text-black">
									<option>Select number of people</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
							) : null}
							<div className=" flex justify-start items-center">
								<input
									type="checkbox"
									name="toAndFro"
									onChange={(e) => setTwoWay(() => e.target.checked)}
									className=" border border-gray my-4 rounded-md py-6 px-6 text-lg text-black lg:text-base mr-3"
								/>
								<label className="text-white">Round trip?</label>
							</div>
							<Button name="Calculate" type="submit" />
						</form>
						{!loading ? (
							<Fragment>
								<div className="mt-6">
									<h1 className="text-2xl font-bold text-white">
										{CurrencyFormatter(rateResponse?.totalFare)}
									</h1>
								</div>
								<div className="mt-6">
									<h3 className="text-white">
										Breakdown of how we calculate our ride
									</h3>
									<div className="flex items-center justify-between">
										<div className="flex flex-col mt-3">
											{[
												"Base Fare",
												"Price per km",
												"Distance Cost",
												"Duration Cost",
												"Total Fare",
											].map((_v, i) => (
												<div key={i} className="my-1">
													<p className="text-sm capitalize text-gray">{_v}</p>
												</div>
											))}
										</div>
										<div className="flex flex-col mt-3">
											{Object.values(rateResponse || {}).map((_v: any, i) => (
												<div key={i} className="my-1">
													<p className="text-sm text-white">
														{CurrencyFormatter(_v) || (0 as any)}
													</p>
												</div>
											))}
										</div>
									</div>
								</div>
							</Fragment>
						) : (
							<div className="mt-10">
								<Loader />
							</div>
						)}

						<div className="border border-gray mt-6 py-2 rounded-lg flex justify-around items-center px-2 md:w-[80%]  max-w-[423px]">
							<Image src={Note} alt="" className="h-10 w-10 mr-6" />
							<p className="text-xs text-white">
								Note: The above calculation are summed up to the total number
								and arrived at the final price. Our prices are considerably
								lower than other ride share service right now.
							</p>
						</div>
					</div>
					<div className="mt-10 lg:mt-0 w-full flex justify-center overflow-x-hidden">
						{!isLoaded ? (
							<p>Loading map</p>
						) : (
							<GoogleMap
								mapContainerStyle={containerStyle}
								center={center}
								zoom={10}>
								{/* Child components, such as markers, info windows, etc. */}
								<Marker position={center} />
								{directionResult ? (
									<DirectionsRenderer directions={directionResult} />
								) : null}
							</GoogleMap>
						)}
						{/* <Image src={Phone2} alt="" loading="lazy" className="mx-auto" /> */}
					</div>
				</div>
			</article>
		</section>
	);
}
