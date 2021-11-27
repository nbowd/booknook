import React from 'react'
import './BookDescription.css'
import TextareaAutosize from 'react-autosize-textarea';


function BookDescription({description}) {
    return (
        <div className='desc'>
            <div className="description__heading"><h4>Description:</h4></div>

            <div style={{display:'table'}}>
                { description? 
                <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                    <TextareaAutosize className="description" rows={2} maxRows={15} readOnly value={description}/>
                </div>
                : 
                <>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text"></div>
                </>
                }
            </div>
        </div>
    )
}

export default BookDescription
