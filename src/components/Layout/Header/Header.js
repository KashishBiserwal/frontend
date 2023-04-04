import React, { useState } from 'react'
import Search from './Search'
import { BiCartAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import UserOptions from './UserOptions'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Header(props) {
  const {isAuthenticated, user} = useSelector(state => state.user)
  const {cartItems} = useSelector(state => state.cart);
  const total_items = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <div className='header'>
      <div className='header-content'>
        <div className='top'>
          <Link to="/" style={{textDecoration: "none"}}><h1 className='logo'>figurz</h1></Link>
          <div className='top-right'>
            <Search />
            <div className='header-cart'><Link to={'MyCart'}><BiCartAlt className='cart-icon'/></Link>
              {total_items > 0 && <div className='cart-items-total'>{total_items}</div>}
            </div>   
          </div>
        </div>
        <div className='mid'>
        <Swiper
          spaceBetween={20}
          slidesPerView={11}
          breakpoints={{
            1200: {
              width: 1150,
              slidesPerView: 11,
            },
            768: {
              width: 768,
              slidesPerView: 7,
            },
            600: {
              width: 600,
              slidesPerView: 6,
            },
            400: {
              width: 400,
              slidesPerView: 5,
            },
            200: {
              width: 200,
              slidesPerView: 4
            },
            100: {
              width: 100,
              slidesPerView: 2
            }
          }}
        >
          <SwiperSlide><Link to={'products'} onClick={() => props.onButtonClick('superman')}><div className='box'><img src='images/nav-swiper/ssm.jpeg' alt="nothing" /></div></Link></SwiperSlide>
          <SwiperSlide><Link to={'products'} onClick={() => props.onButtonClick('flash')}><div className='box'><img src='images/nav-swiper/sf.jpeg' alt="nothing" /></div></Link></SwiperSlide>
          <SwiperSlide><Link to={'products'} onClick={() => props.onButtonClick('ironman')}><div className='box'><img src='images/nav-swiper/sim.jpeg' alt="nothing" /></div></Link></SwiperSlide>
          <SwiperSlide><Link to={'products'} onClick={() => props.onButtonClick('spiderman')}><div className='box'><img src='images/nav-swiper/sspiderman.jpeg'alt="nothing" /></div></Link></SwiperSlide>
          <SwiperSlide><Link to={'products'} onClick={() => props.onButtonClick('wonder woman')}><div className='box'><img src='images/nav-swiper/sww.jpeg' alt="nothing" /></div></Link></SwiperSlide>
          <SwiperSlide><Link to={'products'} onClick={() => props.onButtonClick('punisher')}><div className='box'><img src='images/nav-swiper/sp.jpeg' alt="nothing" /></div></Link></SwiperSlide>
          <SwiperSlide><Link to={'products'} onClick={() => props.onButtonClick('batman')}><div className='box'><img src='images/nav-swiper/sb.jpeg' alt="nothing" /></div></Link></SwiperSlide>
          <SwiperSlide><Link to={'products'} onClick={() => props.onButtonClick('captain america')}><div className='box'><img src='images/nav-swiper/sca.jpg' alt="nothing" /></div></Link></SwiperSlide>
          <SwiperSlide><Link to={'products'} onClick={() => props.onButtonClick('black panther')}><div className='box'><img src='images/nav-swiper/sbp.jpg' alt="nothing" /></div></Link></SwiperSlide>
          <SwiperSlide><Link to={'products'} onClick={() => props.onButtonClick('superman')}><div className='box'><img src='images/nav-swiper/ssm.jpeg' alt="nothing" /></div></Link></SwiperSlide>
          <SwiperSlide><Link to={'products'} onClick={() => props.onButtonClick('flash')}><div className='box'><img src='images/nav-swiper/sf.jpeg' alt="nothing" /></div></Link></SwiperSlide>
          <SwiperSlide><Link to={'products'} onClick={() => props.onButtonClick('ironman')}><div className='box'><img src='images/nav-swiper/sim.jpeg' alt="nothing" /></div></Link></SwiperSlide>
          <SwiperSlide><Link to={'products'} onClick={() => props.onButtonClick('spiderman')}><div className='box'><img src='images/nav-swiper/sspiderman.jpeg' alt="nothing" /></div></Link></SwiperSlide>
        </Swiper>
        </div>
        <div className='bottom'>
          <div>
            <Link to={'products'}><button className='header-button'>Products</button></Link>
          </div>
          <div className='login-me'>
            <div style={{marginLeft: "15px"}}>
              {!isAuthenticated && <Link to="login"><button className='header-button'><p>Sign In  |  Join</p></button></Link>}
            </div>
            {isAuthenticated && <UserOptions user={user} />}
          </div>
        </div>
      </div>
    </div>
  )
}
