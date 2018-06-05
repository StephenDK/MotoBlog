import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return(
            <ul className="navbar nav ">
                <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Computers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Gadgets</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Video Games</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Music</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Boards</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Motorcycles</a>
                </li>
          </ul>
        )
    }
}
export default Navbar;