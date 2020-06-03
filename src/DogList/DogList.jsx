import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./DogList.module.scss";

export class DogList extends Component {
	render() {
		return (
			<div className={styles.DogList}>
				<h1 className='display-2'>Dog List</h1>
				<Container>
					<Row>
						{this.props.dogs.map((dog) => (
							<Col className={styles.Dog} md={6} lg={4}>
								<img src={dog.src} alt={dog.name} />
								<h3>{dog.name}</h3>
							</Col>
						))}
					</Row>
				</Container>
			</div>
		);
	}
}
