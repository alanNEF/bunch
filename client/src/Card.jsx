import React from "react";
export default function Card(props){
    const tags = props.tags.map((tag)=>{
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
            {props.spots-filled && <div className="spots-filled-tag">Spots Filled</div>}
            <img className="card-img" src={props.img} />
            <h1 className="card-title">{props.title}</h1>
            <p className="card-info">{props.date}, {props.time}</p>
            <p className="card-info">{props.location}</p>
            <p className="card-info">{props.spots.filled}/{props.spots.available} Spots Filled</p>
            {tags != [] && <div className="tags">{tags}</div>}
            <div className="card-username">
                {props.username}
            </div>
        </div>
    )
}