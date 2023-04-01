import React from 'react'                                   //   TO BE MODIFIED -- REVIEW SCHEMA IN PRODUCT MODEL
import ReactStart from "react-rating-stars-component"

export default function ReviewCard({review}) {
    const options = {
        edit: false,
        color: "gray",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: review.ratings,
        isHalf: true,
      }
    
    return (
        <div className="reviewCard">
            <p>{review.name}</p>
            <div className='stars'>
                <ReactStart {...options} /> <span>({review.numOfReviews})</span>
            </div>
            <span className="reviewCardComment">{review[0]}</span>
        </div>
    );
}
