import React from "react";
export default function Card(props){
    return(
        <div className="card-container">
            {props.spots-filled && <div className="spots-filled-tag">Spots Filled</div>}
            <img src="" alt="" />
            <h1>{props.title}</h1>
            <p>{props.date}, {props.time}</p>
            <p>{props.location}</p>
            <p>{props.spots.filled}/{props.spots.available}</p>
        </div>
    )
}