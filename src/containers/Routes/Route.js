import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	withRouter,
} from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

const NavbarWithRouter = withRouter(Navbar);

export default function Routes() {
	return (
		<Router>
			<NavbarWithRouter />
			<Switch>
				<Route
					sensitive
					path="/:url([a-z/]*[A-Z]+[a-z/]*)/"
					render={(props) => (
						<Redirect to={`${props.location.pathname.toLowerCase()}`} />
					)}
				/>

				<Route exact path="/" render={() => <Redirect to="/home" />} />

				<Route exact path="/home" component={Home} />
			</Switch>
		</Router>
	);
}
