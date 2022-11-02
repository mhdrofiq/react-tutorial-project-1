import React from "react"
import reactLogo from "../images/logo192.png"

export default function Navbar(){
    return(
        <nav className="nav">
            <img className="nav--icon" src={reactLogo}/>
            <h3 className="nav--logotext">ReactFacts</h3>
            <h4 className="nav--pagetitle">React tutorial - Project 1</h4>
        </nav>
    )
}