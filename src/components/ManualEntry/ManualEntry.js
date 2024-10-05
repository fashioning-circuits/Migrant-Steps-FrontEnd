import React, { Component } from "react";
import NavBar from "../NavBar/NavBar.js";
import "../NavBar/NavBar.css";
import './ManualEntry.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BsFillSquareFill } from 'react-icons/bs';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


class ManualEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: "",
            distance: "",
            products : [{
                    step_name: 157,
                    date: "02/18/2022",
            }, {
                    step_name: 129,
                    date: "02/27/2022",
                }],
            columns : [{
                dataField: 'step_name',
                text: 'Name'
            }, {
                dataField: 'date',
                text: 'Date_achieved'
            }],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }
    
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div className="body-style-manualEntry">
                    <p style={{ fontWeight: "bolder", fontSize: "150%", color: "#E83088" }}>Manual Entry</p>
                    <form>
                        <div className="input-div-style">
                            <div>
                                Enter Steps
                            </div>
                            <input className="input-style" type="text" name="steps" value={this.state.steps} onChange={this.handleChange} required />
                        </div>
                        <div className="input-div-style">
                            <div>
                                Enter distance
                            </div>
                            <input className="input-style" type="text" name="distance" value={this.state.distance} onChange={this.handleChange} required />
                        </div>
                        <br></br>
                        <div className="form-bottom">
                            <div className="form-bottom-right">
                                <Button style={{ backgroundColor: "#4D58BA" }} type="submit" size="sm">Continue</Button>
                            </div>
                            <div className="form-bottom-left-manualentry">
                                <BsFillSquareFill /> Kilometers  <BsFillSquareFill /> Miles
                            </div>
                        </div>
                    </form>
                </div>
                <div style={{ marginTop: "20%", marginLeft: "10%", marginRight: "10%" }}>
                    <BootstrapTable keyField='date' data={this.state.products} columns={this.state.columns} />
                </div> 
            </div>
            
        )
    }
}

export default ManualEntry;