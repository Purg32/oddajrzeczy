import React, { Component } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <NavLink to="/">
                                Start
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <Link to="section2">
                                O co chodzi?
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="section4">
                                O nas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="section5">
                                Fundacja i organizacje
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="section6">
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;