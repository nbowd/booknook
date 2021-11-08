import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";
import Modal from "./Modal";
import './Card.css'

function Card({cover, title, author, id, vendor}){
    const [isOpen, setIsOpen] = useState(false)
    const [ModalProps, setModalProps] = useState({})

    const openModal = async () => {
        let request = await axios.get('http://localhost:3001/api/book', {params: {id: id}})
        setModalProps({
            author:author,
            title:title,
            cover:cover,
            description: request.data.description? request.data.description.value: "No Description Available",
            link: vendor
        })
        setIsOpen(true)
    }

    return(
        <div className="card">
            <img src={cover} alt="Cover for the book" className="card__img" />

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