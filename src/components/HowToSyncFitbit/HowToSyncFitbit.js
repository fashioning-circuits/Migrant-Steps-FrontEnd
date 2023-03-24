import React, { Component } from "react";
import NavBar from "../NavBar/NavBar.js";
import "../NavBar/NavBar.css";
import './HowToSyncFitbit.css';

class HowToSyncFitbit extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div className="body-style-sync">
                    <p style={{ fontWeight: "bolder", fontSize: "150%", color: "#E83088" }}>How to Sync Fitbit</p>
                    <p className="text-inside-step">Please follow the steps below to ensure that<br></br>your Fitbit is in sync with the application.</p>
                    <div className="full-step">
                        <div className="steps-style">Step 1</div>
                        <p className="text-inside-step">Prompt Fitbit Coneect to sync with your device</p>
                    </div>
                    <div>
                        <div className="steps-style">Step 2</div>
                        <p className="text-inside-step">Click the Fitbit Connect icon and click Open Main Menu</p>
                    </div>
                    <div>
                        <div className="steps-style">Step 3</div>
                        <p className="text-inside-step">With your charged Fitbit device nearby, click Sync Now</p>
                    </div>
                    <div>
                        <div className="steps-style">Step 4</div>
                        <p className="text-inside-step">You maybe asked to sign into your Fitbit account, after which your device should sync</p>
                    </div>
                    <div style={{ paddingTop:"6%" }}>
                        <span style={{ fontWeight: "bolder", fontSize: "100%" }}> If you have any further queries or issues, please reach out to us: </span>
                        support@migrantsteps.org
                    </div>
                </div>
            </div>
            
        )
    }
}

export default HowToSyncFitbit;