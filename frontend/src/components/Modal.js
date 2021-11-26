import React from 'react'
import Button from './Button'
import TextareaAutosize from 'react-autosize-textarea';
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
                        <h2 className="card__title">{title}</h2> 
                        <h3 className="card__author">{author}</h3>   
                    </div>
                    <div className="modal-body">
                        <div className='desc'>
                            <div className="description__heading"><h4>Description:</h4></div>      
                            <div style={{display:'table'}}>{description? <div style={{display: 'table-cell', verticalAlign: 'middle'}}><TextareaAutosize className="description" rows={2} maxRows={15} readOnly value={description}/></div>: <><div className="skeleton skeleton-text"></div><div className="skeleton skeleton-text"></div><div className="skeleton skeleton-text"></div><div className="skeleton skeleton-text"></div></>}</div>
                        </div>
                    </div>
                    <div>{link?<a className='shop-link' title={link} href={link}>{'Purchase'}</a>:null}</div>

                    <Button className="close-modal" onClick={close} message="&times;" />
        
                </div>

            </div>
        </>
    )
}

export default Modal
