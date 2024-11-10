import React, {useState} from "react";
// import { useEffect } from "react";
import './MiniCard.css'
import image from './assets/sugarloaf.jpg'
import MiniCard from "./MiniCard";
import CardExpanded from "./CardExpanded";
import Card from "./Card";
import './CardList.css' 
import { useEffect } from 'react';

export default function CardList(){
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // Fetch card data from server
        const fetchCards = async () => {
            try {
                const response = await fetch('http://localhost:3000/events/upcoming');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        };
        
        fetchCards();
    }, []);
    const cardsJSX = cards.map((card) => {
        return(
            <>
                <Card
                    key = {card._id}
                    event = {{
                        img: image,
                        title: card.title,
                        startTime: card.startTime,
                        endTime: card.endTime,
                        location: card.location,
                        spotsAvailable: card.spotsAvailable,
                        attendees: card.attendees,
                        description: card.description,
                        tags: card.tags,
                    }}
                    user={{}}
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