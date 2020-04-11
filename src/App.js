import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component.js";
import CreateUser from "./components/create-user.component.js";
import AddDog from "./components/add-dog.component.js";
import SignIn from "./components/sign-in.component.js";

import ProtectedRoute from "./protected-route.component.js";

function App() {
	return (
		<Router>
			<Navbar></Navbar>
			<Route exact path="/" component={SignIn} />
			<Route path="/sign-up" component={CreateUser} />
			<ProtectedRoute path="/add-dog" component={AddDog} redirect="/" />
		</Router>
	);
}

export default App;
