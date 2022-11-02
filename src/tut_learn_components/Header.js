import React from "react"
import reactLogo from "../src/images/logo192.png"

export default function Header(){
    return(
        <header>
            <nav className="nav">
                <img className="nav-logo" src={reactLogo}/>
                <h3>ReactFacts</h3>
                <h4>React tutorial - Project 1</h4>
            </nav>
        </header>
    )
}