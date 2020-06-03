import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { DogList } from "./DogList/DogList";
import { DogDetails } from "./DogDetails/DogDetails";

import "./App.css";
import buddy from "./images/buddy.jpg";
import charlie from "./images/charlie.jpg";
import max from "./images/max.jpg";

export class App extends Component {
	static defaultProps = {
		dogs: [
			{
				name: "Buddy",
				age: 5,
				src: buddy,
				facts: [
					"Buddy loves eating popcorn",
					"Buddy is a terrible guard dog",
					"Buddy wants to cuddle with you",
				],
			},
			{
				name: "Charlie",
				age: 5,
				src: charlie,
				facts: [
					"Charlie loves eating popcorn",
					"Charlie is a terrible guard dog",
					"Charlie wants to cuddle with you",
				],
			},
			{
				name: "Max",
				age: 5,
				src: max,
				facts: [
					"Max loves eating popcorn",
					"Max is a terrible guard dog",
					"Max wants to cuddle with you",
				],
			},
		],
	};
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
					path='/'
					render={() => <DogList dogs={this.props.dogs} />}
				/>
				<Route path='/dogs/:name' render={getDog} />
			</Switch>
		);
	}
}
