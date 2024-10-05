import React, { Component } from "react";
import NavBar from "../NavBar/NavBar.js";
import "../NavBar/NavBar.css";
import './About.css';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

class About extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div className="body-style-about">
                    <p style={{ fontWeight: "bolder", fontSize: "150%", color: "#E83088" }}>About</p>
                    <p className="text-body">
                    Please follow the steps below to ensure thatyour Fitbit is in sync with the application.
                    The Migrant Steps App is a mobile application that uses daa from a firness tracker to unlock
                    curated content that presents users with a variety of stories about migration in the Americas. Content includes literary texts
                    (e.g novels, poetry, short stories), autobiographies, flim clips, music, journalistic features, to name a few. The project team
                    Please follow the steps below to ensure that your Fitbit is in sync with the application.
                        fjjty hdjfj sifkef kkfkg Afhjgm dfjmgr jg jrg,rmniotui.
                        <br></br>
                        <br></br>
                    Here, you can view a sample content of the platform.
                    </p>
                    <div>
                        <Button style={{ backgroundColor: "#4D58BA", float: "left" }} size="sm">Sample Content</Button>
                    </div>
                </div>
                <div style={{ marginTop: "20%", marginLeft: "10%", marginRight:"10%" }}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Project Team</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Advisory Board</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Terms and Conditions</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Privacy Policy</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <p></p>
                
            </div>

        )
    }
}

export default About;