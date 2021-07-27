import React from "react";
import "./App.scss";

import Layout from "./containers/app-layout/Layout";
import Home from "./containers/Home/Home";
// import Login from "./components/Login/Login";

function App() {
	return (
		<Layout>
			<Home />
		</Layout>
	);
}

export default App;
