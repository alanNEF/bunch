import React, {useState} from "react"
import "./Nav.css"
import pfp from "./assets/pfp.svg"
import AddEvent from "./AddEvent"

export default function Nav(){
   
    return(
        <>
            
            <nav id="nav">
            
            <ul id="nav-pages">
                <li className="nav-page">Home</li>
                <li className="nav-page">My Events</li>
            </ul>
            <div id="account-add-button">
                <AddEvent/>
                <img className="user-pfp" id="nav-pfp" src={pfp} />
            </div>   
        </nav>
        </>
        
    )
}