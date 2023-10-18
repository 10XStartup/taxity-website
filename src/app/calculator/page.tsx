"use client";

import Image from "next/image";
import React, {
	Fragment,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";

import {
	DirectionsRenderer,
	GoogleMap,
	Marker,
	useJsApiLoader,
} from "@react-google-maps/api";
import axios from "axios";
import Button from "../components/Button";
import Loader from "../components/Loader";
import DatePicker from "react-datepicker";

import { Checkbox, MenuItem, Select } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
// import Input from "./Input";

const Dates = [
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
	"sunday",
];

export default function Calculator() {
	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: "AIzaSyCDfI1GOcaZ2W3xQZyWwN_d2ZUzMufGSS4",
		libraries: ["places"],
	});
	const originRef = useRef<any>();
	const destinationRef = useRef<any>();
	// const startDate = useRef<any>(new Date());
	// const endDate = useRef<any>(new Date());
	const [distance, setDistance] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);
	const [startDate, setStartDate] = useState<Date>(new Date());
	const [endDate, setEndDate] = useState<Date>(new Date());
	const [plan, setPlans] = useState("");
	const [directionResult, setDirectionResult] = useState<any>({});
	const [rateResponse, setResponse] = useState<{
		[x: string]: any;
	}>({});
	const [loading, setLoading] = useState(false);
	const [type, setType] = useState("");
	const [members, setMembers] = useState("");
	const [twoWay, setTwoWay] = useState(false);
	const [tags, setTags] = useState<string[]>([]);
	const [selected, setSelected] = useState<string[]>([]);

	const handleSelected = (name: string) => () => {
		const id = selected.findIndex(
			(val) => val.toLowerCase() === name.toLowerCase()
		);
		if (id !== -1) {
			const data = selected.filter((v, i) => i !== id);
			setSelected(data);
		} else {
			setSelected((prevState) => [...prevState, name]);
		}
	};

	const active = (d: string) =>
		selected.find((v) => v.toLowerCase() === d.toLowerCase())
			? "border border-white bg-transparent text-white"
			: "text-primary-dark bg-white";

	const CurrencyFormatter = (amount: number): string =>
		new Intl.NumberFormat("NGN", {
			style: "currency",
			currency: "NGN",
		}).format(amount || 0);

	const handleSubmit = useCallback(
		async (distance: number, duration: number) => {
			setLoading(true);
			console.log(selected, endDate, startDate);
			if (!duration || !distance) return;
			try {
				const response = await axios.post(
					"https://api.taxity.africa/api/v1/ride/subscription-cost",
					{
						duration,
						distance,

						members: Number(members),
						type,
						toAndFro: twoWay,
						startDate: startDate,
						endDate: endDate,
						pickup_days: selected,
					}
				);
				if (response) {
					setLoading(false);
					setResponse(response?.data?.rideCost);
				}
			} catch (error) {
				setLoading(false);
			}
		},
		[selected, endDate, startDate, members, type, twoWay]
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
		width: "100%",
		height: "80%",
	};

	const center = {
		lat: 9.082,
		lng: 8.6753,
	};

	const handleScriptLoad = useCallback((originRef: any) => {
		let autoComplete = new google.maps.places.Autocomplete(originRef);
		autoComplete.setFields(["address_components", "formatted_address"]);
	}, []);

	useEffect(() => {
		if (isLoaded) {
			handleScriptLoad(originRef.current);
			handleScriptLoad(destinationRef.current);
		}
		return;
	}, [handleScriptLoad, isLoaded]);

	const handleChecked = (e: { target: { checked: boolean } }) => () =>
		setTwoWay(e.target.checked);

	const handleStartDate = (value: any) => setStartDate(() => value);
	const handleEndDate = (value: any) => setEndDate(() => value);

	return (
		<section className="md:w-[90%] h-screen  mx-auto  px-4 md:px-0 bg-primary md:rounded-[30px] pb-4 lg:pb-10">
			<article className=" max-w-screen-xl pt-14  mx-auto ">
				<div className="md:px-36 md:my-4">
					<h1 className="font-bold text-base md:text-2xl lg:text-3xl text-center text-primary-light">
						Calculate your ride subscription
					</h1>
				</div>
				<div className="h-full grid grid-cols-1 gap-x-4 lg:grid-cols-2 lg:gap-x-10 mt-2 md:mt-12 lg:mt-6 ">
					<div className="h-full flex flex-col items-center w-full bg-[#2B4D4C] rounded-3xl py-5 md:py-10 lg:py-6">
						<form
							className="lg:w-[80%] max-w-[423px] mx-auto px-2 md:px-0"
							onSubmit={(e) => {
								e.preventDefault();
								calculateRoute();
							}}>
							<>
								<input
									ref={originRef}
									name="origin"
									type="text"
									required
									className="w-full placeholder:text-gray placeholder:text-xs  border-gray my-3 py-3 md:py-3 border-none px-4 rounded-[22px] text-xs lg:text-base text-black"
									placeholder="Enter your location"
								/>

								<input
									ref={destinationRef}
									name="destination"
									type="text"
									required
									className="w-full placeholder:text-gray placeholder:text-xs  border-gray my-3 py-3 md:py-3 border-none px-4 text-xs lg:text-base rounded-[22px] text-black"
									placeholder="Enter your destination"
								/>
							</>
							<Select
								name="type"
								className="w-full bg-white border-gray my-3 py-3 md:py-0.5 border-none px-4 text-xs  rounded-[22px] text-gray"
								onChange={(e) => setType(e.target.value as any)}>
								<MenuItem value="Select a plan">Select plan</MenuItem>
								<MenuItem value="single">Single subscription</MenuItem>
								<MenuItem value="group">Group subscription</MenuItem>
							</Select>

							{type === "group" ? (
								<Select
									name="members"
									className="w-full bg-white border-gray my-3 py-3 md:py-0.5 border-none px-4 text-xs  rounded-[22px] text-gray"
									onChange={(e) => setMembers(e.target.value as any)}>
									<MenuItem value="Select number of people">
										Select number of people
									</MenuItem>
									<MenuItem value="2">2</MenuItem>
									<MenuItem value="3">3</MenuItem>
									<MenuItem value="4">4</MenuItem>
								</Select>
							) : null}

							<div className="grid grid-cols-1 w-full md:grid-cols-2  gap-y-3 gap-x-5">
								<div className="flex flex-col justify-center w-full px-1">
									<label className="text-xs md:text-sm mb-1">Start Date</label>
									<DatePicker
										className="py-1 w-full md:py-2 text-black px-3 rounded-[22px]"
										selected={startDate}
										onChange={(date) => handleStartDate(date)}
									/>
								</div>
								<div className="flex flex-col  justify-center w-full px-1">
									<label className="text-xs md:text-sm mb-1">End Date</label>
									<DatePicker
										className="py-1 md:py-2 rounded-[22px] px-3 text-black w-full"
										placeholderText="text"
										selected={endDate}
										onChange={(date) => handleEndDate(date)}
									/>
								</div>
							</div>
							<div className="w-full flex items-center flex-wrap gap-2 mt-4 px-1 md:mt-6">
								{Dates.map((d, i) => (
									<button
										type="button"
										className={`py-1 px-3 md:py-2 md:px-6 capitalize text-xs lg:text-sm rounded-[22px] ${active(
											d
										)}`}
										key={i + 1}
										onClick={handleSelected(d)}>
										{d}
									</button>
								))}
							</div>
							<div className="flex items-center gap-x-1 w-full py-2 ">
								<Checkbox
									name="toAndFro"
									onChange={handleChecked}
									sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
								/>
								<p>Round trip</p>
							</div>
							<Button name="Calculate" type="submit" />
						</form>
						{!loading ? (
							<Fragment>
								<div className="mt-6 lg:hidden">
									<h1 className="text-2xl font-bold text-white">
										{CurrencyFormatter(rateResponse?.totalFare)}
									</h1>
								</div>
							</Fragment>
						) : (
							<div className="mt-10">
								<Loader />
							</div>
						)}
					</div>
					<div className="mt-10 lg:mt-0 w-full hidden lg:flex justify-center overflow-x-hidden">
						{!isLoaded ? (
							<p>Loading map</p>
						) : (
							<div className=" h-full w-full">
								<GoogleMap
									mapContainerStyle={containerStyle}
									center={center}
									zoom={10}>
									<Marker position={center} />
									{directionResult ? (
										<DirectionsRenderer directions={directionResult} />
									) : null}
								</GoogleMap>

								{!loading ? (
									<Fragment>
										<div className="mt-2 hidden lg:block bg-primary-dark py-6 rounded-xl">
											<h1 className="text-2xl font-bold text-white text-center ">
												{CurrencyFormatter(rateResponse?.totalFare)}
											</h1>
										</div>
									</Fragment>
								) : (
									<div className="mt-10">
										<Loader />
									</div>
								)}
							</div>
						)}
						{/* <Image src={Phone2} alt="" loading="lazy" className="mx-auto" /> */}
					</div>
				</div>
			</article>
		</section>
	);
}
