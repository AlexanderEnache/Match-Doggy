import React, { Component } from 'react';
import axios from 'axios';

export default class AddDog extends Component {

	constructor(props){
		super(props);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    state = {
		authenticated: false,
		user: null
	}

}