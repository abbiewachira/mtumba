import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../blacklogo.jpg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavWrapper className="navbar navbar-expand-sm bg-warning  navbar-dark px-sm-5">
          <Link to="/">
            <img
              src={logo}
              alt="store"
              width="100"
              height="100"
              className="navbar-brand"
            />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Store
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              My Cart
            </ButtonContainer>
          </Link>
        </NavWrapper>
      </div>
    );
  }
}

const NavWrapper = styled.nav`
  .nav-link {
    color: var(--mainDark) !important;
    font-size: 1.5rem;
    text-transform: uppercase;
    transition: all 0.5s linear;
  }
  .navbar-brand {
    border-radius: 3rem;
    transition: all 0.5s linear;
  }
  .nav-link:hover {
    background: var(--mainDark);
    color: var(--mainYellow) !important;
    border-radius: 0.5rem;
    box-shadow: 10px 10px rgba(0, 0, 0, 0.3);
  }
  .navbar-brand:hover {
    box-shadow: 5px 5px rgba(0, 0, 0, 0.3);
  }
`;
