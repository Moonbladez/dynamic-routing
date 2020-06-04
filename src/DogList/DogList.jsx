import React, { Component } from "react";

import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./DogList.module.scss";

export class DogList extends Component {
	render() {
		return (
			<div className={styles.DogList}>
				<h1 className='display-4 text-center my-5'>Dogs Ready for Adoption</h1>
				<Row>
					{this.props.dogs.map((dog) => (
						<Col className={styles.Dog} md={6} lg={4}>
							<img src={dog.src} alt={dog.name} />
							<Link to={`/dogs/${dog.name}`} className={styles.underline}>
								{dog.name}
							</Link>
						</Col>
					))}
				</Row>
			</div>
		);
	}
}
