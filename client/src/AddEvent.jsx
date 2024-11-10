import React, {useState} from "react";
import './AddEvent.css'
import Nav from "./Nav";

export default function AddEvent(){
    const [modal, setModal] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        startTime: '',
        endTime: '',
        location: '',
        spotsAvailable: 0,
        image: {
            "url": "https://example.com/cybersecurity.jpg",
            "altText":"niskns"
        },
        tags: [],
        description: '',
        host: "672fd00f0637e2361e575050",
        attendees: []
      });
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
        // Convert the tag name to a number
        const tagValue = parseInt(value, 10);
        
        setFormData((prevFormData) => ({
            ...prevFormData,
            tags: checked
            ? [...prevFormData.tags, tagValue] // Add tag if checked
            : prevFormData.tags.filter((tag) => tag !== tagValue), // Remove tag if unchecked
        }));
        } else {
        // Update other input values
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const startTime = new Date(formData.startTime);
        const endTime = new Date(formData.endTime);
    
        const dataToSubmit = {
        ...formData,
        startTime,
        endTime,
        };
        try {

          const response = await fetch('http://localhost:3000/events/postEvent', {
            
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSubmit)
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        
          const result = await response.json();
          console.log('Server response:', result);
        } catch (error) {
            console.log(JSON.stringify(dataToSubmit))
          console.error('Error submitting form:', error);
        }
    };
    const toggleModal = () => {
        setModal(!modal)
    }
    let modalContent;
    if (modal) {
        modalContent = (
            <>
                <div id="overlay" onClick={toggleModal}></div>
                <form id="add-event-form" onSubmit={handleSubmit}>
                    <div id="general-info">
                    <h1>Add Event</h1>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" placeholder="An Amazing Title..." onChange={handleChange}/>
                        <label htmlFor="startTime">Start Time</label>
                        <input type="datetime-local" name="startTime" id="start-time"  onChange={handleChange}/>
                        <label htmlFor="endTime">End Time</label>
                        <input type="datetime-local" name="endTime" id="end-time" onChange={handleChange}/>
                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" id="location" placeholder="A cool place..." onChange={handleChange}/>
                        <label htmlFor="spotsAvailable">Available Spots</label>
                        <input type="number" name="spotsAvailable" id="available-spots" placeholder="20..." onChange={handleChange}/>
                    </div>
                    <div id="photo-sub">
                        <h1> t </h1>
                        <label htmlFor="image">Banner Image</label>
                        <input type="file" name="image" id="banner-image" onChange={handleChange}/>
                    </div>
                    <div id="extra-info">
                        <label htmlFor="tags">Tags</label>
                        <div name="tags" id="tag-selectors">
                            <div className="tag-checkbox" id="social-checkbox">
                                <input type="checkbox" id="social" name="social" value="0" onChange={handleChange}/>
                                <label htmlFor="social"> Social</label>
                            </div>
                            <div className="tag-checkbox" id="outdoor-checkbox">
                                <input type="checkbox" id="outdoor" name="outdoor" value="1" onChange={handleChange}/>
                                <label htmlFor="outdoor"> Outdoors</label>
                            </div>
                            <div className="tag-checkbox" id="sports-checkbox">
                                <input type="checkbox" id="sports-fitness" name="sports-fitness" value="2" onChange={handleChange}/>
                                <label htmlFor="sports-fitness"> Sports/Fitness</label>
                            </div>
                            <div className="tag-checkbox" id="movies-checkbox">
                                <input type="checkbox" id="movies" name="movies" value="3" onChange={handleChange}/>
                                <label htmlFor="movies"> Movies</label>
                            </div>
                            <div className="tag-checkbox" id="gaming-checkbox">
                                <input type="checkbox" id="gaming" name="gaming" value="4" onChange={handleChange}/>
                                <label htmlFor="gaming"> Gaming</label>
                            </div>
                            <div className="tag-checkbox" id="food-checkbox">
                                <input type="checkbox" id="food" name="food" value="5" onChange={handleChange}/>
                                <label htmlFor="food"> Food</label>
                            </div>
                            <div className="tag-checkbox" id="art-checkbox">
                                <input type="checkbox" id="art" name="art" value="6" onChange={handleChange}/>
                                <label htmlFor="art"> Art</label>
                            </div>
                        </div>
                        <div id="desc-field">
                            <label htmlFor="description">Description (500 Characters)</label>
                            <textarea name="description" id="description" maxLength={500} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <button type="submit" id="add-sub">Add</button>
                </form>
            </>
            
        )
    }
    
    return(
        <>
            <button onClick={toggleModal} id="add-btn">+</button>
            {modalContent}
        </>
        
       
    )
}