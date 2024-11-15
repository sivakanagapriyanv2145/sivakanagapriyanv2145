import React from "react";
import profile from "./images/profile.png";
import './index.css'
import Main from "./Main"
export default function Header(){
    return(
    <div className="a">
        <p className="b">NirFit</p>
        <a  className="c">Home</a>
        <a className="d">Challenges</a>
        <p className="e">Community</p>
        <p className="f">Progress</p>
        <img className="g"src={profile} title="Profile"/>
   
    </div>
    )
}