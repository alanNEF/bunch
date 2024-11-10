import React, {useState} from "react"
import './CardExpanded.css'
import MiniCard from './MiniCard'
export default function CardExpanded(props) {
    const handleAttendee = async (e) => {
        e.preventDefault()
        console.log(props.cardExpandedKey)
        try {
            
            const response = await fetch('http://localhost:3000/events/addAttendee', {
                
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: document.cookie, eventId: props.cardExpandedKey})
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            console.log('Server response:', result);
            location.reload();
        } catch (error) {
            // console.log(JSON.stringify(dataToSubmit))
            console.error('Error submitting form:', error);
        }
    }
    const handleDelete = async (e) => {
        e.preventDefault()
        console.log(props.cardExpandedKey)
        try {
            
            const response = await fetch(`http://localhost:3000/events/delete/${props.cardExpandedKey}`, {
                
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            location.reload();
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            console.log('Server response:', result);
        } catch (error) {
            // console.log(JSON.stringify(dataToSubmit))
            console.error('Error submitting form:', error);
        }
    }
    const tagsJSX = props.event.tags.map((tag)=>{
        if(tag === 0){
            return <div className="social-tag-exp tag-exp">Social</div>
        } else if(tag === 1){
            return <div className="outdoor-tag-exp tag-exp">Outdoor</div>
        } else if(tag === 2){
            return <div className="sports-tag-exp tag-exp">Sports/Fitness</div>
        } else if(tag === 3){
            return <div className="movies-tag-exp tag-exp">Movies</div>
        } else if(tag === 4){
            return <div className="gaming-tag-exp tag-exp">Gaming</div>
        } else if(tag === 5){
            return <div className="food-tag-exp tag-exp">Food</div>
        } else if(tag === 6){
            return <div className="art-tag-exp tag">Art</div>
        } 
    })
    let button = <button onClick={handleAttendee} className="join-btn">Join</button>
    if(props.hosting){
       button = <button onClick={handleDelete} className="join-btn">Delete</button>
    } else if(props.attending){
        // <button onClick={handleAttendee} className="join-btn">Delete</button>
        button = <button  className="join-btn"></button>
    }

    return (
        <>
            <div className="card-container-exp">
                <div className="card-banner-exp">
                    {props.event.attendees.length === props.event.spotsAvailable && <div className="spots-filled-tag-exp">Spots Filled</div>}
                    <img className="card-img-exp" src={props.event.img} />
                </div>
                <div className="card-details-exp"> 
                    <h1 className="card-title-exp">{props.event.title}</h1>
                    <p className="card-info-exp">{props.event.start} to {props.event.end}</p>
                    <p className="card-info-exp">{props.event.location}</p>
                    <p className="card-info-exp">{props.event.attendees.length}/{props.event.spotsAvailable} Spots Filled</p>
                    {props.event.tags != [] && <div className="tags-exp">{tagsJSX}</div>}
                </div>
                <p className="card-description">{props.event.description}</p>
                <div className="card-username-exp">
                    {props.user.firstName} {props.user.lastName}
                </div>
                {button}
            </div>
        </>
        
        
    )

}