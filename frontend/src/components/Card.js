import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";
import Modal from "./Modal";
import './Card.css'

function Card({cover, title, author, id}){
    const [isOpen, setIsOpen] = useState(false)
    const [ModalProps, setModalProps] = useState({})

    const openModal = async () => {
        setModalProps({
            author:author,
            title:title,
            cover:cover
        })
        setIsOpen(true)
        let request = await axios.get('/api/book', 
            {params: {
                id: id, 
                title:title, 
                author:author
            }})
        setModalProps({
            author:author,
            title:title,
            cover:cover,
            description: parseDescription(request.data.bookDetails),
            link: request.data.vendor
        })
    }

    if (isOpen) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    
    const parseDescription = (details) => {
        if (!details.description) {return "No Description Found"}
        else if (details.description.value) {return details.description.value}
        else {return details.description}
    }

    return(
        <div className="card">
            <div className="card__img-bg">
                <img src={cover} alt="Cover for the book" className="card__img" />
            </div>
            <div className="card__body">
                <h2 className="card__title">{title}</h2>
                <h3 className="card__author">{author}</h3>
            </div>

            <Button onClick={openModal} className="card__button" message="More Info" />
            <Modal props={ModalProps} open={isOpen} close={() => setIsOpen(false)} />
        </div>
    )
}

export default Card