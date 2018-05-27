import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return(
            <ul className="nav">
                <li className="nav-item">
                    <a class="nav-link active" href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Riders</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Roads</a>
                </li>
          </ul>
        )
    }
}
export default Navbar;