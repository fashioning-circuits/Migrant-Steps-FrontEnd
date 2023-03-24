import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import './SignUp.css';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickName: "",
            email: "",
            password: "",
            re_password: "",
            avatarId: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        alert('Form was successfully submitted');
        event.preventDefault();
    }

    selectAvatar() {
        alert("avatar selcted" )
    }

    handleButtonClick(e) {
        console.log(e.target.id)
        this.setState({avatarId: e.target.id })
    }

    render() {
        return (
            <div className="body-style">
                <div className="signUp-body">
                    <p style={{ fontWeight: "bolder", fontSize: "110%", color: "#E83088"}}>Sign Up Here</p>
                    <form>
                        <div className="input-div-style">
                            <div>
                                Nickname
                            </div>
                            <input className="input-style" type="text" name="nickName" value={this.state.nickName} onChange={this.handleChange} required />
                        </div>
                        <div className="input-div-style">
                            <div>
                                Email
                            </div>
                            <input className="input-style" type="text" name="email" value={this.state.email} onChange={this.handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Enter valid email ID" />
                        </div>
                        <div className="input-div-style">
                            <div>
                                Password
                            </div>
                            <input className="input-style" type="password" name="password" value={this.state.password} onChange={this.handleChange} required pattern="(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                        </div>
                        <div className="input-div-style">
                            <div>
                                Re-enter Password
                            </div>
                            <input className="input-style" type="password" name="re_password" value={this.state.re_password} onChange={this.handleChange} required pattern="(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}" title="Must match the above entered password" required />
                            <div style={{ fontSize: "75%", textAlign: "center" }}>
                                <br/>
                                <p><sup><b></b>*</sup>Password must contain min 8 and max 15 characters</p>
                                <p><sup><b></b>*</sup>Password must contain atleast one Upper case</p>
                                <p><sup><b></b>*</sup>Password must contain atleast one Lower case</p>
                                <p><sup><b></b>*</sup>Password must contain atleast one special character</p>
                            </div>
                        </div>
                        <div className="input-div-style">
                            <div style={{ "paddingBottom":"3%"}}>
                                Choose an Avatar
                            </div>
                            <Button style={{ backgroundColor: "white", border: "None", margin: "0.4%" }} onClick={this.handleButtonClick}><img id="male_1.jpg" src="Avatar_images/male_1.jpg" alt="Avatar" className="avatar" /></Button>
                            <Button style={{ backgroundColor: "white", border: "None", margin: "0.4%" }} onClick={this.handleButtonClick}><img id="male_2.png" src="Avatar_images/male_2.png" alt="Avatar" className="avatar" /></Button>
                            <Button style={{ backgroundColor: "white", border: "None", margin: "0.4%" }} onClick={this.handleButtonClick}><img id="female_1.jpg" src="Avatar_images/female_1.jpg" alt="Avatar" className="avatar" /></Button>
                            <Button style={{ backgroundColor: "white", border: "None", margin: "0.4%" }} onClick={this.handleButtonClick}><img id="female_2.jpg" src="Avatar_images/female_2.jpg" alt="Avatar" className="avatar" /></Button>
                        </div>
                        <br></br>
                        <div className="form-bottom">
                            <div className="form-bottom-right">
                                <Button style={{ backgroundColor: "#4D58BA" }} type="submit" size="sm">Continue</Button>
                            </div>
                            <div className="form-bottom-left">
                                <Link to="/"><Button style={{ backgroundColor: "#4D58BA" }} type="submit" size="sm">Back</Button></Link>
                            </div>
                        </div>
                    </form>
                    <br></br>
                </div>
            </div>

        )
    }
}

export default SignUp;