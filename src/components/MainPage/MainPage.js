import React, { Component } from "react";
import NavBar from "../NavBar/NavBar.js";
import "../NavBar/NavBar.css";
import './MainPage.css';

class MainPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div className="body-style-about">
                    <p style={{ fontWeight: "bolder", fontSize: "150%", color: "#E83088" }}>Main Page</p>
                </div>
                <div>
                    <style>
                        {`
                            body {
                                font-family: Arial, sans-serif;
                                text-align: center;
                                padding: 20px;
                                background-color: #f8f8f8;
                            }
                            .stone-img {
                                width: 150px;
                                height: auto;
                            }
                            .milestone-title {
                                color: #d61c6f;
                                font-size: 28px;
                                margin: 10px 0;
                            }
                            .milestone-completed {
                                font-size: 18px;
                                color: #333;
                                margin-bottom: 40px;
                            }
                            .steps-info {
                                font-size: 22px;
                                color: #333;
                                margin-bottom: 20px;
                            }
                            .button-container {
                                display: flex;
                                justify-content: center;
                                gap: 10px;
                                margin-top: 20px;
                            }
                            .button {
                                background-color: #007bff;
                                color: white;
                                border: none;
                                padding: 10px 20px;
                                font-size: 16px;
                                border-radius: 5px;
                                cursor: pointer;
                            }
                            .button:hover {
                                background-color: #0056b3;
                            }
                            .journey-map-button {
                                margin-top: 10px;
                                padding: 10px 15px;
                                background-color: #007bff;
                                color: white;
                                border: none;
                                border-radius: 5px;
                                cursor: pointer;
                            }
                            .journey-map-button:hover {
                                background-color: #0056b3;
                            }
                        `}
                    </style>
                    <br>
                    </br>
                    <br>
                    </br>
                    
                    <div className="milestone-title">TEST USER</div>
                    <div className="milestone-completed">0 Milestones Completed!</div>
                    <div className="steps-info">0 Steps<br />Until Next Milestone</div>
                    <button className="journey-map-button">Journey Map</button>
                    <br>
                    </br>
                    
                    <p>Please add your progress<br />using one of the options below.</p>
                    <div className="button-container">
                        <button className="button">Sync Fitbit</button>
                        <button className="button">Manual Entry</button>
                    </div>


                    
                </div>
            </div>
        );
    }
}

export default MainPage;