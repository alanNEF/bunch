import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Hosting.css'
import MyEvents from './Home.jsx'
import Card from './Card.jsx'
import image from './assets/sugarloaf.jpg'
export default function Hosting() {
    return (
        <div id="hosting-container">
            <h1 id="hosting-title">Hosting</h1>
            <Card
                event = {{
                    img : image,
                    title : 'Hike at Mt.Sugarloaf',
                    date : 'November 25th',
                    time : '4 P.M',
                    location : 'Mt.Sugarloaf',
                    spotsAvailable : 10,
                    attendees:[{firstName:'Alan', lastName:'Achilles', userName: 'alanNEF'}],
                    tags : [0,1,2,3,4,5]
                }}
                user = {{
                    firstName: 'Alan',
                    lastName: 'Achilles',
                    userName: 'balch'
                }}
            />
        </div>
    )
}