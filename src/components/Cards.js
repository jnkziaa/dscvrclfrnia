import React from "react";
import CardItem from "./CardItem";
import "./Cards.css"


function Cards(){
    return(
        <div className="cards">
            <h1>Preview California!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            img src="images/img-2.jpg"
                            text="Explore the Sunset of California"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            img src="images/img-3.jpg"
                            text="Unrivaled Beaches of California"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            img src="images/img-4.jpg"
                            text="Waterfalls crafted by the Gods"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            img src="images/img-5.jpg"
                            text="Luxurious Skyline of Los Angeles"
                            label="Adventure"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Cards;