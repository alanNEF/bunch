import React, {useState} from "react";
import './MiniCard.css'
import image from './assets/sugarloaf.jpg'
import MiniCard from "./MiniCard";
import CardExpanded from "./CardExpanded";
import './Card.css' 
export default function Card(props) {
    const [modal, setModal] = useState(false)
    const toggleCardModal = () => {
        setModal(!modal)
    }
    let cardModalContent;
    if (modal) {
        cardModalContent = (
            <>
                <div onClick={toggleCardModal} id="overlay"></div>
                <CardExpanded
                    event = {{
                        img : props.event.img,
                        title : props.event.title,
                        date : props.event.date,
                        start: props.event.start,
                        end : props.event.end,
                        location : props.event.location,
                        spotsAvailable : props.event.spotsAvailable,
                        attendees : props.event.attendees,
                        tags : props.event.tags,
                        description : props.event.description
                    }}
                    user = {{
                        firstName: props.user.firstName,
                        lastName: props.user.lastName,
                        userName: props.user.userName
                    }}
                />
            
            </>
        )
    }
    return (
        <>
            
            <div className="mini-container" onClick={toggleCardModal}>
                <MiniCard
                    event = {{
                        img : props.event.img,
                        title : props.event.title,
                        date : props.event.date,
                        start : props.event.start,
                        end : props.event.end,
                        location : props.event.location,
                        spotsAvailable : props.event.spotsAvailable,
                        attendees : props.event.attendees,
                        tags : props.event.tags,
                        description : props.event.description
                    }}
                    user = {{
                        firstName: props.user.firstName,
                        lastName: props.user.lastName,
                        userName: props.user.userName
                    }}
                    
                />
            </div>
            
            
            {cardModalContent}
        </>
        
    )
    

}