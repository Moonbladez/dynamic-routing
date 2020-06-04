import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import { DogDetails } from "../DogDetails/DogDetails";
import { DogList } from "../DogList/DogList";

export class Routes extends Component {
	render() {
		const getDog = (props) => {
			let name = props.match.params.name;
			let currentDog = this.props.dogs.find(
				(dog) => dog.name.toLowerCase() === name.toLowerCase()
			);

			return <DogDetails {...props} dog={currentDog} />;
		};
		return (
			<Switch>
				<Route
					exact
					path='/dogs'
					render={() => <DogList dogs={this.props.dogs} />}
				/>
				<Route path='/dogs/:name' render={getDog} />
				<Redirect to='/dogs' />
			</Switch>
		);
	}
}