import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import './Login.css';
import { Link } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);

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

    render() {
        return (
            <div className="body-style-login">
                <div className="login-header">Welcome to<br/>The Migrant Steps App!</div>
                <div className="login-body">
                    <p style={{ fontWeight: "bolder", fontSize: "110%", color: "#E83088" }}>User login</p>
                    <form>
                        <div className="style-between-inputs">
                            <div>
                                Email
                            </div>
                            <input className="input-style" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="style-between-inputs">
                            <div>
                                Password
                            </div>
                            <input className="input-style" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className="form-bottom-login">
                            <div className="form-bottom-right">
                                {/* <Button style={{ backgroundColor: "#4D58BA"}} type="submit" size="sm">Continue</Button> */}
                                
                                <Link to="/MainPage" style={{ textDecoration: 'underline', color: '#4D58BA' }}>Continue</Link><br></br>
                            </div>
                            <div className="form-bottom-left">
                                <Link to="/SignUp"><u style={{ color: "#2B5BB3" }}>Forgot Password?</u></Link><br></br>
                                <Link to="/SignUp"><u className="link-style">Not a member?</u></Link>
                            </div>
                        </div>
                    </form>
                    <br></br>
                </div>
                <div className="login-bottom">
                    <p style={{ fontWeight: "bolder", fontSize: "110%", color: "#E83088"}}>About Migrant Steps</p>
                    <div style={{marginLeft: "10%", marginRight: "10%"}}>
                        <p style={{ textAlign: "justify"}}>The Migrant Steps App is a mobile application that uses daa from a firness tracker to unlock
                        curated content that presents users with a variety of stories about migration in the Americas. Content includes literary texts
                        (e.g novels, poetry, short stories), autobiographies, flim clips, music, journalistic features, to name a few. The project team
                        </p>
                        <Button style={{ backgroundColor: "#4D58BA", float: "left" }}>Sample Content</Button><br></br>
                    </div>
                    
                </div>
            </div>
            
            )
    }
}

export default Login;