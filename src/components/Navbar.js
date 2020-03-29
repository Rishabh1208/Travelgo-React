import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';
import Styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/"> <img style={{height:"40px", width:"40px"}} src="img/icon.png" alt="Store" className="navabr-brand"/>Travelgo </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-items ml-5">
                        <Link to="/" className="nav-link">
                            Destinations
                        </Link>
                    </li>
                    <li className="nav-items ml-5">
                        <Link to="/aboutus" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li className="nav-items ml-5">
                        <Link to="/contactus" className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
                
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="far fa-compass"/>
                        </span>
                        <span  style={{color:"rgba(36, 37, 42, 1)"}}>my booking</span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
            
        )
    }
}

const NavWrapper = Styled.nav `
    background: rgba(137, 196, 244, 1) !important;
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
    position: fixed;
    overflow: hidden;
    top: 0;
    width: 100%;
    z-index: 5;
    border-bottom: 1px solid white;
`
