import React from "react"

export default function MainContent(){
    return(
        <div className="content-div">  
            <h1 className="content-title">Fun facts about React</h1>
            <ul className="content-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by jordan walke</li>
                <li>Has well over 100k stars on github</li>
                <li>Is maintained by facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul> 
        </div>
    )
}