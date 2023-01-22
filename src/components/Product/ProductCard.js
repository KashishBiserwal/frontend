import React from 'react'
import { Link } from 'react-router-dom'
import ReactStart from "react-rating-stars-component"

export default function ProductCard({product}) {
  const options = {
    edit: false,
    color: "gray",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 18 : 20,
    value: product.ratings,
    isHalf: true,
  }
  return (
    <Link to={`/${product._id}`} style={{textDecoration: "none"}}>
        <div className='product-card'>
            <div className='image'><img src={`images/products/${product.images[0]}`} alt={product.name}/></div>
            <p className='product-name'>{product.name}</p>
            <div className='stars'>
                <ReactStart {...options} /> <span>({product.numOfReviews})</span>
            </div>
            <span className='price'>&#8377;{product.price}</span>
        </div>
    </Link>
  )
}
