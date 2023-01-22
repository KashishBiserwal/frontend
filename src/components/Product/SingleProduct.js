import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../../actions/productAction'
import Loader from '../Layout/Loader';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import ReactStart from "react-rating-stars-component"

export default function SingleProduct() {
    const dispatch = useDispatch();
    const {loading, product} = useSelector(state => state.productDetails);
    const {id} = useParams();
    const imagesArray = product.images;
    useEffect(() => {
        dispatch(getProductDetails(id));
      }, [dispatch, id])

      const options = {
        edit: false,
        color: "gray",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true,
      }

  return (
    <div>
        {
          loading? (
            <Loader />
          ) : (
            <div className='single-product-container'>
              <div className='images'>
                <div className='all'>
                {
                  imagesArray && imagesArray.map((items, index)=> {
                    return (
                      items && <img src={`images/products/${items}`} key={index} alt='something'/>
                    )
                  })
                }
                </div>
                <div className='main'>
                  <Swiper pagination={true} navigation modules={[Pagination, Navigation]} className="main-swiper">
                  {
                  imagesArray && imagesArray.map((items, index)=> {
                    return (
                      items && <SwiperSlide><img src={`images/products/${items}`} key={index} alt='something'/></SwiperSlide>
                    )
                  })
                }
                  </Swiper>
                </div>
              </div>
              <div className='details'>
                <h2 style={{textTransform: 'uppercase'}}>{product.name}</h2><br />
                <h2><span style={{color: '#01aade'}}>&#8377;{product.price}</span></h2><br />
                <div className='stars'>
                  <ReactStart {...options} /> <span>({product.numOfReviews})</span>
                </div>
                {product.stock <= 0 && <p className='red'>Out of stock</p>}
              </div>
            </div>
          )
        }
    </div>
  )
}
