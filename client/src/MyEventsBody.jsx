import React, {useState}from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './MyEventsBody.css'
import MyEvents from './Home.jsx'
import Hosting from './Hosting.jsx'
import Attending from './Attending.jsx'
export default function MyEventsBody() {
    const [isHostingClicked, setIsHostingClicked] = useState(true);

    const toggleClicked = () => {
        setIsHostingClicked(!isHostingClicked);
    };
    
    return (
        <>
            <div id="tabs-container">
                <div id="tabs">
                    <div onClick={toggleClicked} id="hosting-tab" className={isHostingClicked ? 'clicked' : ''}>Hosting</div>
                    <div onClick={toggleClicked} id="attending-tab" className={!isHostingClicked ? 'clicked' : ''}>Attending</div>
                </div>
                
                {/* <Attending/>             */}
            </div>
            <Hosting/>
        </>
        
        
        
    )
}