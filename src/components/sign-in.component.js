import React, { Component } from 'react';

export default class SignIn extends Component {

	constructor(props){
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);

		this.state = {
			username: '',
			password: ''
		}
	}

	onChangeUsername(e){
		this.setState({
			username: e.target.value
		});
	}

	onChangePassword(e){
		this.setState({
			password: e.target.value
		});
	}

	render() {
		return (
			<div id="sign-in" className="text-center" data-gr-c-s-loaded="true">
				<form onSubmit={this.props.login} className="form-signin">
					<img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
					<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
					<label htmlFor="inputEmail" className="sr-only">Email address</label>
						<input name="username" type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={this.onChangeUsername} required="" autoFocus="" />
					<label htmlFor="inputPassword" className="sr-only">Password</label>
						<input name="password" type="password" placeholder="Password" className="form-control" value={this.state.password} onChange={this.onChangePassword} required="" />
					<div className="checkbox mb-3">
						<label>
							<input type="checkbox" value="remember-me" /> Remember me
						</label>
					</div>
					<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
					<p className="mt-5 mb-3 text-muted">© 2017-2019</p>
				</form>
			</div>
		);		
	}
}