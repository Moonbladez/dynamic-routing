import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export class NavBarMain extends Component {
	render() {
		const dogLinks = this.props.dogs.map((dog) => (
			<NavLink exact to={`/dogs/${dog.name}`} className='nav-link'>
				{dog.name}
			</NavLink>
		));
		return (
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Container>
					<NavLink className='navbar-brand' to='/dogs'>
						Rescue Me
					</NavLink>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='ml-auto'>
							<NavLink exact to='/dogs' className='nav-link'>
								Home
							</NavLink>
							{dogLinks}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}
