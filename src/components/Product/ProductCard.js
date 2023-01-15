import React from 'react'
import { Link } from 'react-router-dom'
import ReactStart from "react-rating-stars-component"

export default function ProductCard({product}) {
  const options = {
    edit: false,
    color: "gray",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.rating,
    isHalf: true,
  }
  return (
    <Link to={`/${product._id}`}>
        <div className='product-card'>
            <img src={product.images[0].url} alt={product.name}/>
            <p>{product.name}</p>
            <div className='stars'>
                <ReactStart {...options} /> <span>({product.numOfReviews})</span>
            </div>
            <span>{product.price}</span>
        </div>
    </Link>
  )
}
