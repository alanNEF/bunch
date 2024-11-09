import React, {useState} from "react"
import './CardExpanded.css'
import MiniCard from './MiniCard'
export default function CardExpanded(props) {
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

    return (
        <>
            <div className="card-container-exp">
                <div className="card-banner-exp">
                    {props.event.attendees.length === props.event.spotsAvailable && <div className="spots-filled-tag-exp">Spots Filled</div>}
                    <img className="card-img-exp" src={props.event.img} />
                </div>
                <div className="card-details-exp"> 
                    <h1 className="card-title-exp">{props.event.title}</h1>
                    <p className="card-info-exp">{props.event.date}, {props.time}</p>
                    <p className="card-info-exp">{props.event.location}</p>
                    <p className="card-info-exp">{props.event.attendees.length}/{props.event.spotsAvailable} Spots Filled</p>
                    {props.event.tags != [] && <div className="tags-exp">{tagsJSX}</div>}
                </div>
                <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.dwdwqdqwdqwdqwdqwdqwdqwdqdawfdawefawefadsfaewfasdfafewf</p>
                <div className="card-username-exp">
                    {props.user.firstName} {props.user.lastName}
                </div>
                <button className="join-btn">Join</button>
            </div>
        </>
        
        
    )

}