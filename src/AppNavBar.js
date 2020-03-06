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
            <Navbar color="danger" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="./AboutMe">Chase Dixon</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            <NavLink className ="Portfolio" href="/">Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="/EducationandExperience">Education and Experience</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="./AboutMe">About Me</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="/Contactme">Contact Me</NavLink>
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