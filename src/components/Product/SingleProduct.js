import React, { useEffect, useState } from 'react'
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
import CartAmountToggle from '../Cart/CartAmountToggle';
import ReviewCard from './ReviewCard';
import { addItemsToCart } from '../../actions/cartAction';

export default function SingleProduct() {
  const dispatch = useDispatch();
  const { loading, product } = useSelector(state => state.productDetails);
  const { id } = useParams();
  const imagesArray = product.images;
  const { sizes, stock } = product;
  const [size, setSize] = useState(sizes);
  const [quantity, setQuantity] = useState(1);
  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  }
  const setIncrease = () => {
    quantity < 10 ? setQuantity(quantity + 1) : setQuantity(10);
  }

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity))
  }

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
        loading ? (
          <Loader />
        ) : (
          <div>
            <div className='single-product-container'>
              <div className='images'>
                <div className='all'>
                  {
                    imagesArray && imagesArray.map((items, index) => {
                      return (
                        items && <img src={`images/products/${items}`} key={index} alt='something' />
                      )
                    })
                  }
                </div>
                <div className='main'>
                  <Swiper pagination={true} navigation modules={[Pagination, Navigation]} className="main-swiper">
                    {
                      imagesArray && imagesArray.map((items, index) => {
                        return (
                          items && <SwiperSlide><img src={`images/products/${items}`} key={index} alt='something' /></SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                </div>
              </div>
              <div className='details'>
                <h2 style={{ textTransform: 'uppercase' }}>{product.name}</h2><br />
                <h2><span style={{ color: '#01aade' }}>&#8377;{product.price}</span></h2><br />
                <div className='stars'>
                  <ReactStart {...options} /> <span>({product.numOfReviews})</span>
                </div>
                {product.stock <= 0 && <p className='red'>Out of stock</p>}
                <hr style={{ margin: '1rem 0' }} />
                {product.stock > 0 &&
                  <div>
                    <p><span style={{ marginRight: '0.5rem' }}>Size:</span>
                      {sizes.map((items, index) => {
                        return <button className={size === items ? 'size size-active' : 'size'} key={index} onClick={() => setSize(items)}>{items}</button>
                      })}
                    </p>
                    <CartAmountToggle
                      quantity={quantity}
                      setDecrease={setDecrease}
                      setIncrease={setIncrease}
                    />
                    <button className='btn' onClick={() => addToCartHandler()}>Add To Cart</button>
                  </div>
                }
              </div>
            </div>
            {/* <div>
              {product.reviews && product.reviews[0] ? 
              <div>
                {product.reviews && product.reviews.map((review, index) => <ReviewCard review={review} key={index}/>)}
              </div> : " "}
            </div> */}
          </div>

        )
      }
    </div>
  )
}
