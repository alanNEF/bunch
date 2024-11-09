import React, {useState} from "react";
import './AddEvent.css'
import Nav from "./Nav";

export default function AddEvent(){
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    let modalContent;
    if (modal) {
        modalContent = (
            <form action="" id="add-event-form">
                <div id="general-info">
                <h1>Add Event</h1>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="An Amazing Title..."/>
                    <label htmlFor="start-time">Start Time</label>
                    <input type="datetime-local" name="start-time" id="start-time" />
                    <label htmlFor="end-time">End Time</label>
                    <input type="datetime-local" name="end-time" id="end-time"/>
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" id="location" placeholder="A cool place..."/>
                    <label htmlFor="available-spots">Available Spots</label>
                    <input type="number" name="available-spots" id="available-spots" placeholder="Friends..."/>
                </div>
                <div id="photo-sub">
                    <h1> t </h1>
                    <label htmlFor="banner-image">Banner Image</label>
                    <input type="file" name="banner-iamge" id="banner-image"/>
                </div>
                <div id="extra-info">
                    <label htmlFor="tags">Tags</label>
                    <div name="tags" id="tag-selectors">
                        <div className="tag-checkbox" id="social-checkbox">
                            <input type="checkbox" id="social" name="social" value="social"/>
                            <label htmlFor="social"> Social</label>
                        </div>
                        <div className="tag-checkbox" id="outdoor-checkbox">
                            <input type="checkbox" id="outdoor" name="outdoor" value="outdor"/>
                            <label htmlFor="outdoor"> Outdoors</label>
                        </div>
                        <div className="tag-checkbox" id="sports-checkbox">
                            <input type="checkbox" id="sports-fitness" name="sports-fitness" value="sports-fitness"/>
                            <label htmlFor="sports-fitness"> Sports/Fitness</label>
                        </div>
                        <div className="tag-checkbox" id="movies-checkbox">
                            <input type="checkbox" id="movies" name="movies" value="movies"/>
                            <label htmlFor="movies"> Movies</label>
                        </div>
                        <div className="tag-checkbox" id="gaming-checkbox">
                            <input type="checkbox" id="gaming" name="gaming" value="gaming"/>
                            <label htmlFor="gaming"> Gaming</label>
                        </div>
                        <div className="tag-checkbox" id="food-checkbox">
                            <input type="checkbox" id="food" name="food" value="food"/>
                            <label htmlFor="food"> Food</label>
                        </div>
                        <div className="tag-checkbox" id="art-checkbox">
                            <input type="checkbox" id="art" name="art" value="art"/>
                            <label htmlFor="art"> Art</label>
                        </div>
                    </div>
                    <div id="desc-field">
                        <label htmlFor="description">Description (500 Characters)</label>
                        <textarea name="description" id="description" maxLength={500}></textarea>
                    </div>
                </div>
            </form>
        )
    }
    return(
        <>
            <button onClick={toggleModal} id="add-btn">+</button>
            {modalContent}
        </>
        
       
    )
}