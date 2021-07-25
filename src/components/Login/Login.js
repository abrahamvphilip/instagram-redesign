import React from "react";
import "./Login.scss";

// Logo's
import InstagramLogo from "../../assets/filled/Instagram.svg";
import GoogleLogo from "../../assets/filled/bxl-google.svg";
import AppleLogo from "../../assets/filled/bxl-apple.svg";
import FacebookLogo from "../../assets/filled/bxl-facebook.svg";

export default function Home() {
	return (
		<div className="Login">
			<main className="Login__LoginContainer">
				<img src={InstagramLogo} alt="" />
				<form action="" className="LoginContainer__Form">
					<input type="text" id="username" placeholder="username" />
					<input type="text" id="password" placeholder="password" />
					<button className="submit">Login</button>
				</form>

				<div className="LoginContainer__divider"></div>

				<div className="LoginContainer__LoginOptions">
					<p>Or login with</p>
					<div className="row1">
						<div className="LoginOptions__btn btn__google">
							<img src={GoogleLogo} alt="" />
							<p>Google</p>
						</div>
						<div className="LoginOptions__btn btn__apple">
							<img src={AppleLogo} alt="" />
							<p>Apple</p>
						</div>
					</div>
					<div className="row2">
						<div className="LoginOptions__btn btn__facebook">
							<img src={FacebookLogo} alt="" />
							<p>Facebook</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
