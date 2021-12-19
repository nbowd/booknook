import React from 'react'
import Button from './Button'
import './Modal.css'
import BookDescription from './BookDescription'
import axios from 'axios'

function Modal({open, close, props}) {
    if (!open) return null
    const {title, author, cover, link, description, key, token, isSaved, id, results, setResults} = props
   
    const saveBook = async () => {
        try{
            await axios.post('/api/saved', {title, author, cover, link, description, key}, config)
        } catch (error) {
            console.log(error)
        }
    }
    
    const deleteBook = async () => {
        const confirm = window.confirm('Delete this entry?')
        if (!confirm) return
        await axios.delete(`/api/saved/${id}`, config)
        setResults(results.filter(result=> result.id !== id))
    }

    const parseToken = () => {
        if (!token) return null
        else if (!token.token) return token
        else return token.token

    }
    const config = {
        headers: {Authorization: `bearer ${parseToken()}`}
    }
    const userButton = () => {
        if (!description || !token) return null
        if (isSaved) return <Button className='shop-link' onClick={()=>deleteBook()} message="Delete" />
        return <Button className='shop-link' onClick={()=>saveBook()} message="Save" />
    }

    return (
        <>
            <div className="overlay" onClick={close}></div>

            <div className='modal'>
                
                <div className="cover">
                    <img src={cover} alt="book cover" className='cover__full' />
                </div>

                <div className="info">

                    <div className="heading">
                        <h2 className="card__title modal__title">{title}</h2> 
                        <h3 className="card__author modal__author">{author}</h3>   
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
                        {userButton()}
                        {/* {isSaved?
                            <button className='delete shop-link' onClick={()=>deleteBook()}>Delete</button>
                        :
                            <button className='save shop-link' onClick={()=>saveBook()}>Save</button>
                        } */}
                    </div>

                    <Button className="close-modal" onClick={close} message="&times;" />
        
                </div>

            </div>
        </>
    )
}

export default Modal
