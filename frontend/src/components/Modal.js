import React from 'react'
import './Modal.css'

function Modal({open, close, props}) {
    if (!open) return null
    const {title, author, cover, link, description} = props
    return (
        <>
            <div className="overlay" onClick={close}></div>
            <div className='modal'>
                <div className="cover">
                    <img src={cover} alt="book cover" className='cover__full' />
                </div>
                <div className="info">
                    <div className="heading">
                        <h2>{title}</h2> 
                        <h4>{author}</h4>   
                    </div>                    
                    <p>{description}</p>
                    <a className='shop-link' href={link}>Link</a>
                    <button className="close-modal" onClick={close}>&times;</button>
                </div>
            </div>
        </>
    )
}

export default Modal
