"use client";

import Image from "next/image";
import React, {
	Fragment,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
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
import { AddRoles } from "../components/TagInput";
import Button from "../components/Button";
import Loader from "../components/Loader";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Chip } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
// import Input from "./Input";

const Dates = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

export default function Calculator() {
	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: "AIzaSyBt_vereLcrqPFn0j6AbWYKQKwTNmKzMeo",
		libraries: ["places"],
	});
	const originRef = useRef<any>();
	const destinationRef = useRef<any>();
	const startDate = useRef<any>(new Date());
	const endDate = useRef<any>(new Date());
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
	const [tags, setTags] = useState<string[]>([]);
	const [selected, setSelected] = useState<string[]>([]);

	const handleSelected = (name: string) => () => {
		console.log([...selected, name]);
		setSelected(() => [...selected, name]);
	};

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
					"https://api.taxity.africa/api/v1/ride/subscription-cost",
					{
						duration,
						distance,
						plan,
						members: Number(members),
						type,
						toAndFro: twoWay,
						startDate: startDate.current?.value,
						endDate: endDate.current?.value,
						pickup_days: tags,
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
		[plan, members, type, twoWay, tags]
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
		height: "100%",
	};

	const center = {
		lat: 9.072264,
		lng: 7.491302,
	};

	const handleScriptLoad = useCallback((originRef: any) => {
		let autoComplete = new google.maps.places.Autocomplete(originRef);
		autoComplete.setFields(["address_components", "formatted_address"]);
	}, []);
	// async function handleScriptLoad({ originRef, destinationRef }) {}

	useEffect(() => {
		if (isLoaded) {
			handleScriptLoad(originRef.current);
			handleScriptLoad(destinationRef.current);
		}
		return;
	}, [handleScriptLoad, isLoaded]);

	function onDelete() {
		return;
	}
	function onChange() {
		return;
	}

	return (
		<section className="md:w-[90%] h-screen  bg-red-600 mx-auto  px-4 md:px-0 bg-primary md:rounded-[30px] mt-4 pb-4 lg:pb-10">
			<article className="lg:h-[80%] max-w-screen-xl mx-auto">
				<div className="md:px-36">
					<h1 className="font-bold text-xl lg:text-3xl text-center text-primary-light">
						Calculate your ride subscription
					</h1>
				</div>
				<div className="h-full grid grid-cols-1 bg-primary-dark lg:grid-cols-2 mt-2 lg:mt-10">
					<div className="h-full flex flex-col items-center">
						<form
							className="lg:w-[80%] max-w-[423px] mx-auto"
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
									className="w-full placeholder:text-gray placeholder:text-xs  border-gray my-4 py-4 border-none px-4 rounded-[22px] text-xs lg:text-base text-black"
									placeholder="Enter your location"
								/>

								<input
									ref={destinationRef}
									name="destination"
									type="text"
									required
									className="w-full placeholder:text-gray placeholder:text-xs  border-gray my-4 py-4 border-none px-4 text-xs lg:text-base rounded-[22px] text-black"
									placeholder="Enter your destination"
								/>
							</>
							<select
								name="type"
								className="w-full  border-gray my-4 py-4 border-none px-4 text-xs  rounded-[22px] text-gray"
								onChange={(e) => setType(e.target.value)}>
								<option>Select plan</option>
								<option value="single">Single subscription</option>
								<option value="group">Group subscription</option>
							</select>
							{type === "group" ? (
								<select
									name="members"
									onChange={(e) => setMembers(e.target.value)}
									className="w-full  border-gray my-4 py-4 border-none px-4 text-xs  rounded-[22px] text-gray">
									<option>Select number of people</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
							) : null}

							<div className="grid grid-cols-2 gap-x-5">
								<div className="">
									<label>Start Date</label>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<MobileDatePicker
											ref={startDate}
											sx={{
												border: "none",
												outline: "none",
												backgroundColor: "red",
												borderRadius: "22px",
												background: "white",
												mt: 1,
											}}
											defaultValue={dayjs()}
										/>
									</LocalizationProvider>
								</div>
								<div>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<label>End Date</label>
										<MobileDatePicker
											ref={endDate}
											sx={{
												border: "none",
												outline: "none",
												backgroundColor: "red",
												borderRadius: "22px",
												background: "white",
												mt: 1,
											}}
											defaultValue={dayjs()}
										/>
									</LocalizationProvider>
								</div>
							</div>
							<div className="w-full flex items-center flex-wrap gap-2 mt-6">
								{Dates.map((d, i) => (
									<Chip
										key={i + 1}
										sx={{ backgroundColor: "white", padding: "10px" }}
										label={d}
										onClick={handleSelected(d)}
										onDelete={onDelete}
										deleteIcon={
											selected.find(
												(v) => v.toLowerCase() === d.toLowerCase()
											) ? (
												<DoneIcon color="error" />
											) : null
										}
									/>
								))}
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
							</Fragment>
						) : (
							<div className="mt-10">
								<Loader />
							</div>
						)}
					</div>
					<div className="mt-10 lg:mt-0 w-full flex justify-center overflow-x-hidden">
						{!isLoaded ? (
							<p>Loading map</p>
						) : (
							<div className="bg-red-900 h-full w-full">
								{/* <GoogleMap
									mapContainerStyle={containerStyle}
									center={center}
									zoom={10}>
									
									<Marker position={center} />
									{directionResult ? (
										<DirectionsRenderer directions={directionResult} />
									) : null}
								</GoogleMap> */}
							</div>
						)}
						{/* <Image src={Phone2} alt="" loading="lazy" className="mx-auto" /> */}
					</div>
				</div>
			</article>
		</section>
	);
}
