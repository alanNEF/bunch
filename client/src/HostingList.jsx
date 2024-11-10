import React, {useState} from "react";
// import { useEffect } from "react";
import './MiniCard.css'
import image from './assets/sugarloaf.jpg'
import MiniCard from "./MiniCard";
import CardExpanded from "./CardExpanded";
import Card from "./Card";
import './CardList.css' 
import { useEffect } from 'react';

export default function HostingList(){
    const userID = document.cookie;
    console.log(userID);
    const [cards, setCards] = useState([]);
    const [user, setUser] = useState({});
    const dateToString = (date) => {
        if (!date) return 'nates mom';
        const parsedDate = new Date(date);
        if (isNaN(parsedDate)) return 'Invalid Date';
        const year = parsedDate.getFullYear();
        const month = parsedDate.toLocaleString('default', { month: 'long' });
        const day = parsedDate.getDate();
        let hours = parsedDate.getHours();
        const minutes = parsedDate.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        return `${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`;
    };
    useEffect(() => {
        // Fetch card data from server
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:3000/users/byID/${userID}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        };
        fetchUser();
    }, []);
    useEffect(() => {
        if (user.hosting) {
            const fetchEventDetails = async () => {
                try {
                    const eventDetails = await Promise.all(
                        user.hosting.map(async (id) => {
                            console.log(id);
                            const response = await fetch(`http://localhost:3000/events/byID/${id}`);
                            if (!response.ok) throw new Error('Network response was not ok');
                            return await response.json();
                        })
                    );
                    setCards(eventDetails);
                } catch (error) {
                    console.error('Error fetching event details:', error);
                }
            };
            fetchEventDetails();
        }
    }, [user]);
    const cardsJSX = cards.map((card) => {
        let sTime = card.startTime ? dateToString(card.startTime) : 'Invalid Date';
        let eTime = card.endTime ? dateToString(card.endTime) : 'Invalid Date';
        return(
            <>
                <Card
                    cardKey = {card._id}
                    hosting = {true}
                    attending = {false}
                    event = {{
                        img: image,
                        title: card.title,
                        start: sTime,
                        end: eTime,
                        location: card.location,
                        spotsAvailable: card.spotsAvailable,
                        attendees: card.attendees,
                        description: card.description,
                        tags: card.tags,
                    }}
                    user={{
                        firstName: user.firstName,
                        lastname: user.lastName,
                        userName: user.userName

                    }}
                />
            </>
        )
    })
    return(
        <div className="card-grid">
            {cardsJSX}
        </div>
    )
}