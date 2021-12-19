import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";
import Modal from "./Modal";
import './Card.css'
import defaultCover from '../assets/default_book_cover.jpeg'


function Card({result, results, setResults, token}){
    const {cover, title, author, description, link, id} = result
    const [isOpen, setIsOpen] = useState(false)
    const [ModalProps, setModalProps] = useState({})
    const [currentCover, setCurrentCover] = useState(cover)
    let bookID = result.key

    
    const openModal = async () => {
        setModalProps({
            author:author,
            title:title,
            description: description? description:null,
            link: link? link:null,
            cover: cover? cover:defaultCover,
            token:token,
            id:id,
            results:results,
            setResults:setResults,
            key:bookID,
            isSaved: description? true: false
        })
        setIsOpen(true)
        if (description) return
        let request = await axios.get('/api/book', 
            {params: {
                id: bookID, 
                title:title, 
                author:author
            }})
        let findCover = () => {
            if (cover) {return cover}
            else if (request.data.cover) {
                setCurrentCover(request.data.cover)
                return request.data.cover
            }
            else {return defaultCover}
        }
        setModalProps({
            author:author,
            title:title,
            cover: findCover(),
            description: parseDescription(request.data.bookDetails),
            link: request.data.vendor,
            token:token,
            id:id,
            results:results,
            setResults:setResults,
            key:bookID,
            isSaved: false
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
                <img src={currentCover?currentCover:defaultCover} alt="Cover for the book" className="card__img" />
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