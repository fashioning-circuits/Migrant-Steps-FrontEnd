import { scaleDown as Menu } from 'react-burger-menu';
import React, { Component } from "react";
import './NavBar.css';
import './react-burger.css';
import { Link } from 'react-router-dom';


class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="fixed-content">
                <div>
                    <Menu>
                        <a id="Main Page" className="menu-item" href="/mainPage">Main Menu</a>
                        <a id="Journey Map" className="menu-item" href="/journeyMap">Journey Map</a>
                        <a id="My Collection" className="menu-item" href="/myCollection">My Collection</a>
                        <a id="How to Sync Fitbit" className="menu-item" href="/howToSyncFitbit">How to Sync Fitbit</a>
                        <a id="Manual Entry" className="menu-item" href="/manualEntry">Manual Entry</a>
                        <a id="About" className="menu-item" href="/about">About</a>
                    </Menu>
                </div>
                <div className="logout-style">
                    <Link to="/" style={{ textDecoration: "none", color: "darkgrey", fontWeight: "bold" }}><u style={{ textDecoration: "none" }}>Log Out</u></Link>
                </div>
            </div>
        )
    }
}

export default NavBar;