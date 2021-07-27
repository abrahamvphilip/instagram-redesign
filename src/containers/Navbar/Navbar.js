import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.scss";

import Setting from "../../assets/outline/Setting.svg";
import Search from "../../assets/outline/Search.svg";
import Heart from "../../assets/outline/Heart.svg";
import Message from "../../assets/outline/Message.svg";
import ArrowLeft from "../../assets/outline/Arrow-Left.svg";

export default function Navbar(props) {
	const path = props.location.pathname;
	let type = "default";

	if (path.includes("profile")) type = "profile";
	else if (path.includes("store")) type = "store";

	return (
		<section className="navbar">
			{type === "profile" ? <Types.Profile /> : <Types.Default {...type} />}
		</section>
	);
}

/**
 * type:
 * {
 * 	"default" - home, activity
 * 	"store" - store, products
 *  "profile" - profile
 * 	}
 */

const Types = {
	Default: ({ type = "default" }) => {
		const history = useHistory();
		const [active, setActive] = useState(false);

		return (
			<>
				<section className="navbar__left">
					{type === "default" && !active ? (
						<SettingComponent />
					) : (
						<BackComponent {...{ setActive, history }} />
					)}
				</section>

				<SearchComponent {...{ active, setActive, history }} />
				<section className="navbar__right">
					<HeartComponent />
					<MessageComponent />
				</section>
			</>
		);
	},

	Profile: () => {
		return (
			<>
				<section className="navbar__left">
					<SettingComponent />
				</section>
				<section className="navbar__main">
					<MainProfileComponent />
				</section>
			</>
		);
	},
};

const SearchComponent = ({ active, setActive, history }) => {
	const ref = useRef();
	const classList = `search ${active ? "search__active" : ""}`;

	const handler = () => {
		if (!active) {
			ref.current.classList.add("search__active");
			setActive(true);
			history.push("/search");
		}
	};

	return (
		<div ref={ref} className={classList} onClick={handler}>
			<label htmlFor="search">
				<div className="iconBox">
					<img src={Search} alt="search icon" />
				</div>
			</label>
			<input id="search" type="text" placeholder="Search" />
		</div>
	);
};

const BackComponent = ({ setActive, history }) => {
	const handler = () => {
		setActive(false);
		history.goBack();
	};
	return (
		<div className="back iconBox" onClick={handler}>
			<img src={ArrowLeft} alt="" />
		</div>
	);
};

const SettingComponent = () => {
	return (
		<div className="settings iconBox">
			<img src={Setting} alt="settings icon" />
		</div>
	);
};

const HeartComponent = () => {
	return (
		<div className="heart iconBox">
			<img src={Heart} alt="heart icon" />
		</div>
	);
};

const MessageComponent = () => {
	return (
		<div className="message iconBox">
			<img src={Message} alt="message icon" />
		</div>
	);
};

const MainProfileComponent = () => {
	return (
		<div className="profile">
			<p>kenmyersofficial</p>
		</div>
	);
};
