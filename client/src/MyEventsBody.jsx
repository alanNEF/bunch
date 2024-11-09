import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './MyEventsBody.css'
import MyEvents from './Home.jsx'
import Hosting from './Hosting.jsx'
import Attending from './Attending.jsx'
export default function MyEventsBody() {
    return (
        <>
            <Hosting/>
            {/* <Attending/>             */}
        </>
        
        
    )
}