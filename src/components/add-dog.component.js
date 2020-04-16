import React, { Component } from 'react';
import axios from 'axios';

export default class AddDog extends Component {

	constructor(props){
		super(props);

		this.onChangeName = this.onChangeName.bind(this);

		this.state = {
			name: ''
		}
	}

	onChangeName(e){
		this.setState({
			name: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const dog = {
			name: e.target.name.value
			// ,user: {
			// 	username: ,
			// 	password:
			// }
		}
		axios.post('http://localhost:5000/dogs/add', dog).then(res => console.log(res.data));
		// window.location = '/';
	}

	render() {
		return (
			<div id="sign-up" className="text-center" data-gr-c-s-loaded="true">
				<form onSubmit={this.onSubmit} className="form-signin">
					<img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
					<h1 className="h3 mb-3 font-weight-normal">Add Dog</h1>
					<label htmlFor="inputEmail" className="sr-only">Dogs Name</label>
						<input name="name" type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={this.onChangeUsername} required="" autoFocus="" />
					<button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
				</form>
			</div>
		);		
	}

}