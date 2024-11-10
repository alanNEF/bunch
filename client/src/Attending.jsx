import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Attending.css'
import MyEvents from './Home.jsx'
import Card from './Card.jsx'
import image from './assets/sugarloaf.jpg'
import AttendingList from './AttendingList.jsx'
export default function Attending() {
    return (
        <div id="attending-container">
            {/* <h1 id="attending-title">Attending</h1> */}
            <AttendingList/>
        </div>
    )
}