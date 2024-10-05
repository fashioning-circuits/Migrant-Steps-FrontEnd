import React, { Component } from "react";
import NavBar from "../NavBar/NavBar.js";
import "../NavBar/NavBar.css";
import './MyCollection.css';
//import collectionPic from './collection.png'; // Import the image

class MyCollection extends Component {
    render() {
        return (
            <div>
                <NavBar />
                {/*<div className="body-style-about">
                    <p style={{ fontWeight: "bolder", fontSize: "150%", color: "#E83088" }}>My Collection</p>
                    <p className="text-body">
                        <img src={collectionPic} alt="Journey" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                        <br />
                        <br />
                    </p>
                </div>*/}
                <style>
                    {`
                        body {
                            font-family: Arial, sans-serif;
                            text-align: center;
                            background-color: #f8f8f8;
                            padding: 20px;
                        }
                        h1 {
                            color: #d61c6f;
                            font-size: 26px;
                            margin-bottom: 20px;
                        }
                        table {
                            width: 100%;
                            max-width: 600px;
                            margin: 20px auto;
                            border-collapse: collapse;
                            background-color: white;
                            border: 1px solid #ddd;
                            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                        }
                        th {
                            background-color: #1d4a85;
                            color: white;
                            padding: 10px;
                            font-size: 16px;
                        }
                        td {
                            padding: 10px;
                            font-size: 14px;
                            border-bottom: 1px solid #ddd;
                        }
                        td a {
                            color: #1d4a85;
                            text-decoration: none;
                        }
                        td a:hover {
                            text-decoration: underline;
                        }
                        .section-title {
                            font-weight: bold;
                            margin-top: 30px;
                            text-align: left;
                            max-width: 600px;
                            margin-left: auto;
                            margin-right: auto;
                        }
                        .button-container {
                            margin-top: 20px;
                            display: flex;
                            justify-content: center;
                            gap: 10px;
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
                    `}
                </style>
                <h1>My Collection</h1>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="3">Content Unlocked</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>Media</th>
                            <th>Date Unlocked</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The Stories of Migrants Risking...</td>
                            <td>Article</td>
                            <td>01/24/2022</td>
                        </tr>
                        <tr>
                            <td>Diary of a Reluctant Dreamer</td>
                            <td>Memoir</td>
                            <td>02/18/2022</td>
                        </tr>
                        <tr>
                            <td>The Journey</td>
                            <td>Short Film</td>
                            <td>02/27/2022</td>
                        </tr>
                        <tr>
                            <td>Home</td>
                            <td>Comic Book</td>
                            <td>03/09/2022</td>
                        </tr>
                        <tr>
                            <td>Queer Brown Voices</td>
                            <td>Book</td>
                            <td>03/14/2022</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="3">My Favorites</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>Media</th>
                            <th>Date Unlocked</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The Journey</td>
                            <td>Short Film</td>
                            <td>02/27/2022</td>
                        </tr>
                        <tr>
                            <td>Queer Brown Voices</td>
                            <td>Book</td>
                            <td>03/09/2022</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="3">Reflections</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>Media</th>
                            <th>Date Unlocked</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Diary of a Reluctant Dreamer</td>
                            <td>Memoir</td>
                            <td>01/24/2022</td>
                        </tr>
                        <tr>
                            <td>The Journey</td>
                            <td>Short Film</td>
                            <td>02/27/2022</td>
                        </tr>
                        <tr>
                            <td>Home</td>
                            <td>Comic Book</td>
                            <td>03/09/2022</td>
                        </tr>
                        <tr>
                            <td>Queer Brown Voices</td>
                            <td>Book</td>
                            <td>03/14/2022</td>
                        </tr>
                    </tbody>
                </table>
                <div className="button-container">
                    <button className="button">Search in WorldCat</button>
                    <button className="button">Suggest a Source</button>
                </div>
            </div>
        );
    }
}

export default MyCollection;