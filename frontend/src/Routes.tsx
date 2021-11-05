import Dahsboard from "pages/Dashboard";
import Home from "pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//React Component for routing the objects:
function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/dashboard">
					<Dahsboard />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
