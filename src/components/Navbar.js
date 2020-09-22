import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../whitelogo.jpg";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
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
            <button>
              <i className="fas fa-cart-plus"></i>
            </button>
          </Link>
        </nav>
      </div>
    );
  }
}
