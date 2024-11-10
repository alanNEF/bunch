import React, {useState} from "react";
import './MiniCard.css'
export default function MiniCard(props){
    const tagsJSX = props.event.tags.map((tag)=>{
        if(tag === 0){
            return <div className="social-tag tag">Social</div>
        } else if(tag === 1){
            return <div className="outdoor-tag tag">Outdoor</div>
        } else if(tag === 2){
            return <div className="sports-tag tag">Sports/Fitness</div>
        } else if(tag === 3){
            return <div className="movies-tag tag">Movies</div>
        } else if(tag === 4){
            return <div className="gaming-tag tag">Gaming</div>
        } else if(tag === 5){
            return <div className="food-tag tag">Food</div>
        } else if(tag === 6){
            return <div className="art-tag tag">Art</div>
        } 
    })
    return(
        <div className="card-container">
            <div className="card-banner">
                {props.event.attendees.length === props.event.spotsAvailable && <div className="spots-filled-tag">Spots Filled</div>}
                <img className="card-img" src={props.event.img} />
            </div>
            <div className="card-details">
                <h1 className="card-title">{props.event.title}</h1>
                <p className="card-info">{props.event.start} to {props.event.end}</p>
                <p className="card-info">{props.event.location}</p>
                <p className="card-info">{props.event.attendees.length}/{props.event.spotsAvailable} Spots Filled</p>
                {props.event.tags != [] && <div className="tags">{tagsJSX}</div>}
            </div>
            {/* <div className="card-username">
                {props.user.firstName} {props.user.lastName}
            </div> */}
        </div>
    )
}