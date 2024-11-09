import React from "react";
import './AddEvent.css'

export default function AddEvent(){
    return(
        <form action="" id="add-event-form">
            <h1>Add Event</h1>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            <label htmlFor="start-time">Start Time</label>
            <input type="datetime-local" name="start-time" id="start-time" />
            <label htmlFor="end-time">End Time</label>
            <input type="datetime-local" name="end-time" id="end-time"/>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location"/>
            <label htmlFor="available-spots">Available Spots</label>
            <input type="number" name="available-spots" id="available-spots"/>
            <div id="tag-selectors">
                <input type="checkbox" id="social" name="social" value="social"/>
                <label htmlFor="social"> Social</label><br/>
                <input type="checkbox" id="outdoor" name="outdoor" value="outdor"/>
                <label htmlFor="outdoor"> Outdoors</label><br/>
                <input type="checkbox" id="sports-fitness" name="sports-fitness" value="sports-fitness"/>
                <label htmlFor="sports-fitness"> Sports/Fitness</label><br/>
                <input type="checkbox" id="movies" name="movies" value="movies"/>
                <label htmlFor="movies"> Movies</label><br/>
                <input type="checkbox" id="gaming" name="gaming" value="gaming"/>
                <label htmlFor="gaming"> Gaming</label><br/>
                <input type="checkbox" id="food" name="food" value="food"/>
                <label htmlFor="food"> Food</label><br/>
                <input type="checkbox" id="art" name="art" value="art"/>
                <label htmlFor="art"> Art</label><br/>
            </div>
        </form>
    )
}