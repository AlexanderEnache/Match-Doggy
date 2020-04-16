import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component.js";
import CreateUser from "./components/create-user.component.js";
import AddDog from "./components/add-dog.component.js";
import SignIn from "./components/sign-in.component.js";

import ProtectedRoute from "./protected-route.component.js";

import axios from 'axios';

class App extends Component {

	constructor(props) {
		super(props);
		this.isAuthenticated = this.isAuthenticated.bind(this);
	}

	state = {
		authenticated: false,
		user: null
	}

	getUser(){
		return {
			username: this.state.username,
			password: this.state.password
		}
	}

	login(e){
		e.preventDefault();
		const user = {
			username: e.target.username.value,
			password: e.target.password.value
		}
		axios.post('http://localhost:5000/users/sign-in', user).then(res => {
			if(Object.keys(res.data).length){
				this.setState({
					authenticated: true,
					user: user
				}, () => {
					console.log(this.isAuthenticated());
				});
			}else{
				alert("Your username or password is incorrect");
			}
		});
	}

	logout = () => {
		this.setState({
			authenticated: false
		});
		console.log("Logged Out");
	}

	isAuthenticated = () => {
		return this.state.authenticated;
	}

	render(){
		return (
			<Router>
				<Navbar logout={this.logout.bind(this)} isAuthenticated={this.isAuthenticated.bind(this)}></Navbar>
				<Route exact path="/" render={(props) => <SignIn {...props} login={this.login.bind(this)} /> } />
				<Route path="/sign-up" component={CreateUser} />
				<ProtectedRoute path="/add-dog" component={AddDog} redirect="/" isAuthenticated={this.isAuthenticated()} getUser={this.getUser()} />
			</Router>
		);
	}
}

export default App;
