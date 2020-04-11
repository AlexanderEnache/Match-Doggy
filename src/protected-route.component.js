import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

export const ProtectedRoute = ({ component: Component, redirect: redirect, ...rest }) => {
	return (
		<Route 
			{...rest}
			render={props => {
				if(auth.isAuthenticated()){
					return <Component {...props} />
				}else{
					return <Redirect to={
						{
							pathname: redirect,
							state: {
								from: props.location
							}
						}
					}></Redirect>
				}
			}}
		/>
	);
};

export default ProtectedRoute;