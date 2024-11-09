import React from "react";
import './Card.css'
export default function Card(props){
    const tagsJSX = props.event.tags.map((tag)=>{
        if(tag === 0){
            return <div className="social-tag">Social</div>
        } else if(tag === 1){
            return <div className="outdoor-tag">Outdoor</div>
        } else if(tag === 2){
            return <div className="sports-tag">Sports/Fitness</div>
        } else if(tag === 3){
            return <div className="movies">Movies</div>
        } else if(tag === 4){
            return <div className="gaming">Gaming</div>
        } else if(tag === 5){
            return <div className="food-tag">Food</div>
        } else if(tag === 6){
            return <div className="art-tag">Art</div>
        } 
    })
    return(
        <div className="card-container">
            <div className="card-banner">
                {props.event.spots.filled === props.event.spots.available && <div className="spots-filled-tag">Spots Filled</div>}
                <img className="card-img" src={props.event.img} />
            </div>
            <div className="card-details">
                <h1 className="card-title">{props.event.title}</h1>
                <p className="card-info">{props.event.date}, {props.time}</p>
                <p className="card-info">{props.event.location}</p>
                <p className="card-info">{props.event.spots.filled}/{props.event.spots.available} Spots Filled</p>
                {props.event.tags != [] && <div className="tags">{tagsJSX}</div>}
                <div className="card-username">
                    {props.user.firstName} {props.user.lastName}
                </div>
            </div>
        </div>
    )
}