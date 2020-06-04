import React, { Component } from "react";

import Container from "react-bootstrap/Container";

import { NavBarMain } from "./components/NavBarMain/NavBarMain";
import { Routes } from "./Routes/Routes";

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
		return (
			<>
				<NavBarMain dogs={this.props.dogs} />
				<Container>
					<Routes dogs={this.props.dogs} />
				</Container>
			</>
		);
	}
}
