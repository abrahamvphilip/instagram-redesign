import React from "react";
import "./App.scss";

import Layout from "./components/app-layout/Layout";
import Story from "./components/story-section/Story";
// import Login from "./components/Login/Login";

function App() {
	return (
		<Layout>
			<Story />
			{/* <Login /> */}
		</Layout>
	);
}

export default App;
