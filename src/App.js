import React from "react";
import "./App.scss";

import Layout from "./components/app-layout/Layout";
import NavbarTop from "./components/navbar-top/NavbarTop";
import Story from "./components/story-section/Story";
import Post from "./components/feed-post/Post";
// import Login from "./components/Login/Login";

function App() {
	return (
		<Layout>
			<NavbarTop />
			<Story />
			<Post />
			{/* <Login /> */}
		</Layout>
	);
}

export default App;
