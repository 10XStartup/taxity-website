import { Fragment, useState } from "react";

export const AddRoles = ({
	setTags,
	tags,
}: {
	tags: string[];
	setTags: (arg: string[]) => void;
}) => {
	// const [tags, setTags] = useState<string[]>([]);
	const [inputData, setInputData] = useState("");
	const [departmentSug, setDepartmentSug] = useState([
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	]);

	// const keyPress = (e: {
	// 	target: { value: string };
	// 	code: string;
	// 	preventDefault: () => void;
	// }) => {
	// 	let tag = e.target.value.replace(/\s+/g, " ");
	// 	if (e.code === "Comma" && tag !== "") {
	// 		e.preventDefault();
	// 		setTags([...tags, tag]);
	// 		e.target.value = "";
	// 	}
	// };
	const addSuggestion = (tag: string[]) => {
		return setDepartmentSug([...departmentSug, ...tag]);
	};

	const closeTag = (indx: number) => {
		setTags([...tags.filter((tag) => tags.indexOf(tag) !== indx)]);
		addSuggestion([...tags.filter((tag) => tags.indexOf(tag) === indx)]);
	};

	// const onChange = (e: { target: { value: any } }) => {
	// 	const input = e.target.value;
	// 	setInputData(input);
	// };

	// const onClick = () => {
	// 	setInputData("");
	// 	if (!inputData) {
	// 		return null;
	// 	} else {
	// 		setTags([...tags, inputData]);
	// 	}
	// };
	const tagList = () => {
		return tags.map((tag, index) => {
			return (
				<li
					key={index}
					className="bg-white text-primary w-fit text-xs  flex rounded-lg px-2 py-2 border-red-900 m-1">
					{tag}
					{
						<span
							style={{ cursor: "pointer" }}
							onClick={() => {
								closeTag(index);
							}}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="15"
								height="15"
								fill="currentColor"
								className=""
								viewBox="0 0 16 16">
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
							</svg>
						</span>
					}
				</li>
			);
		});
	};

	const suggestDepartment = () => {
		return departmentSug.map((tag, index) => {
			return (
				<li
					key={index}
					style={{ cursor: "pointer" }}
					className="bg-white text-primary text-sm w-fit flex rounded-lg px-3 py-2  m-2"
					onClick={() => {
						setTags([...tags, tag.toLowerCase()]);
						removeSuggestion(tag);
					}}>
					{tag}
				</li>
			);
		});
	};

	const removeSuggestion = (tag: string) => {
		return setDepartmentSug([...departmentSug.filter((cur) => cur !== tag)]);
	};

	return (
		<Fragment>
			<label className="text-xs my-2">Select days</label>
			<div className="flex justify-start items-center flex-wrap">
				{suggestDepartment()}
			</div>
			<div className="w-full  h-fit rounded-lg p-2 ">
				<ul className="flex flex-wrap">
					{tagList()}
					{/* <input type="text" spellCheck="false" /> */}
				</ul>
			</div>
		</Fragment>
	);
};
