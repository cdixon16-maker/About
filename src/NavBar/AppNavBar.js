import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AppNavBar.css";




class AppNavbar extends Component {
    state = {
            isOpen: false
        }

        toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }

    render() {
        return (

        <div className="navigation">
            <Navbar color="secondary" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="./AboutMeTab">Chase Dixon</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mx-auto" navbar>
                            <NavItem className="pr-5">
                            <NavLink className ="Portfolio" href="/">Portfolio</NavLink>
                            </NavItem>
                            <NavItem className="pr-5">
                            <NavLink href="/EducationandExperience">Experience and Education</NavLink>
                            </NavItem>
                            <NavItem className="pr-5">
                            <NavLink href="./AboutMeTab">About Me</NavLink>
                            </NavItem>
                            <NavItem className="pr-5">
                            <NavLink href="/Contact">Contact Me</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
    }
}



export default AppNavbar;