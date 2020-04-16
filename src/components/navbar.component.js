import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		let isAuth = this.props.isAuthenticated();
		if(isAuth){
			return (
				<nav className="navbar navbar-dark bg-dark">
					<Link to="/" className="navbar-brand">Home</Link>
					<Link to="/add-dog" className="navbar-brand">Add Dog</Link>
					<Link onClick={this.props.logout} to="/" className="navbar-brand">Log Out</Link>
				</nav>
			);
		}else{
			return (
				<nav className="navbar navbar-dark bg-dark">
					<Link to="/" className="navbar-brand">Home</Link>
					<Link to="/sign-up" className="navbar-brand">Sign Up</Link>
				</nav>
			);
		}
	}
}


// To know enough about a subject to think your right but not enough to know your wrong