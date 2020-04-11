import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from "../auth";

export default class Navbar extends Component {
	render() {
		let isAuth = auth.isAuthenticated();
		console.log(isAuth);
		if(isAuth){
			console.log(isAuth);
			return (
				<nav className="navbar navbar-dark bg-dark">
					<Link to="/" className="navbar-brand">Home</Link>
					<Link to="/add-dog" className="navbar-brand">Add Dog</Link>
					<Link onClick={auth.logout()} to="/sign-in" className="navbar-brand">Log Out</Link>
				</nav>
			);
		}else{
			console.log(isAuth);
			return (
				<nav className="navbar navbar-dark bg-dark">
					<Link to="/" className="navbar-brand">Home</Link>
					<Link to="/sign-up" className="navbar-brand">Sign Up</Link>
				</nav>
			);
		}
	}
}