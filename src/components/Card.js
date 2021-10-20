import React from "react";
import './Card.css'

function Card({cover, title, author}){
    return(
        <div className="card">
            <img src={cover} alt="Cover for the book" className="card__img" />
            <div className="card__body">
                <h2 className="card__title">{title}</h2>
                <h3 className="card__author">{author}</h3>
                <button className="card__button">More Info</button>
            </div>
        </div>
    )
}

export default Card