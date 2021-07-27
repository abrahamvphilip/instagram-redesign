import React from "react";
import "./Navbar.scss";

import Setting from "../../assets/outline/Setting.svg";
import Search from "../../assets/outline/Search.svg";
import Heart from "../../assets/outline/Heart.svg";
import Message from "../../assets/outline/Message.svg";
import ArrowLeft from "../../assets/outline/Arrow-Left.svg";

export default function Navbar(props) {
	return (
		<section className="navbar">
			{props?.type === "profile" ? (
				<Style.Profile />
			) : (
				<Style.Classic {...props} />
			)}
		</section>
	);
}

const SettingComponent = () => {
	return (
		<div className="settings iconBox">
			<img src={Setting} alt="settings icon" />
		</div>
	);
};

const BackComponent = () => {
	return (
		<div className="back iconBox">
			<img src={ArrowLeft} alt="" />
		</div>
	);
};

const SearchComponent = () => {
	return (
		<div className="search iconBox">
			<img src={Search} alt="seearch icon" />
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

const Style = {
	Classic: ({ type = "classic", active = "false" }) => {
		return (
			<>
				<section className="navbar__left">
					{type === "classic" ? <SettingComponent /> : <BackComponent />}
				</section>

				<section className="navbar__right">
					<SearchComponent {...active} />
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
