import React from "react";
import "./App.scss";

import Layout from "./containers/app-layout/Layout";
import Routes from "./containers/Routes/Route";
// import Login from "./components/Login/Login";

function App() {
	return (
		<Layout>
			<Routes />
		</Layout>
	);
}

export default App;
