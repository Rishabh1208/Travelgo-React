import React, { Component } from 'react';
import Logo from '../logo.svg';
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';
import Styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/"> <img src={Logo} alt="Store" className="navabr-brand"/> </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-items ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
            
        )
    }
}

const NavWrapper = Styled.nav `
    background: var(--mainBlue) !important;
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`
