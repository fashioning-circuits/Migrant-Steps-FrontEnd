import React, { Component } from "react";
import NavBar from "../NavBar/NavBar.js";
import "../NavBar/NavBar.css";
import './JourneyMap.css';
import journeyImage from './journey.png'; // Import the image


class JourneyMap extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div className="body-style-about">
                    <p style={{ fontWeight: "bolder", fontSize: "150%", color: "#E83088" }}>Journey Map</p>
                    <img src={journeyImage} alt="Journey" /> {/* Add the image here */}

                </div>

            </div>
            
        )
    }
}

export default JourneyMap;