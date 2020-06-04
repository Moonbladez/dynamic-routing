import React, { Component } from "react";

import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export class DogDetails extends Component {
	render() {
		let { dog } = this.props;
		return (
			<Row className={"mt-5 align-items-center justify-content-center"}>
				<Col sm={9} lg={4}>
					<Card>
						<Card.Img variant='top' src={dog.src} alt={dog.name} />
						<Card.Body>
							<Card.Title>{dog.name}</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>
								{dog.age} years old
							</Card.Subtitle>
						</Card.Body>
						<ListGroup varient='flush'>
							{dog.facts.map((fact, index) => (
								<ListGroupItem key={index}>{fact}</ListGroupItem>
							))}
						</ListGroup>
						<Link to='/dogs'>Back</Link>
					</Card>
				</Col>
			</Row>
		);
	}
}
