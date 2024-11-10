import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Attending.css'
import MyEvents from './Home.jsx'
import Card from './Card.jsx'
import image from './assets/sugarloaf.jpg'
export default function Attending() {
    return (
        <div id="attending-container">
            <h1 id="attending-title">Attending</h1>
            <Card
                event = {{
                    img : image,
                    title : 'Bowling at Adam House',
                    date : 'December 31st',
                    time : '1 P.M',
                    location : 'Adam Mom House',
                    spotsAvailable : 2,
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