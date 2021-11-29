import React from 'react'
import Button from './Button'
import './Modal.css'
import BookDescription from './BookDescription'

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
                        <h2 className="card__title">{title}</h2> 
                        <h3 className="card__author">{author}</h3>   
                    </div>

                    <div className="modal-body">
                        <BookDescription description={description}/>
                    </div>

                    <div>
                        {link?
                            <a className='shop-link' title={link} href={link} target="_blank" rel="no noreferrer">
                                {'Purchase'}
                            </a>
                        :null
                        }
                    </div>

                    <Button className="close-modal" onClick={close} message="&times;" />
        
                </div>

            </div>
        </>
    )
}

export default Modal
