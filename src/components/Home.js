import React from 'react'
import { Link } from 'react-router-dom'
import RecommendedProducts from './RecommendedProducts'

export default function Home(props) {
  
  return (
      <div>
        <div className='banner'>
          <img src='images/banner.png' alt='banner' className='banner-image'/>
          <div className='banner-links'>
              <div className='banner-link-img'><Link to='/products' onClick={() => props.onButtonClick('marvel')}><img src='images/marvelbanner.jpg' alt='marvel banner'/></Link></div>
              <div className='banner-dc banner-link-img'><Link to='/products' onClick={() => props.onButtonClick('dc')}><img src='images/dcbanner.jpg' alt='dc banner'/></Link></div>
          </div>
        </div><br />
      <div className='sale'><h2>UPTO 40% OFF</h2></div>
      <div className='category-card-container'>
        <h2>Browse Categories</h2>
        <div className='four-container'>
            <Link to='/products' onClick={() => props.onButtonClick('women')}><div className='category-card'><img src='images/womens.jpg' alt='women'/><p>WOMEN</p></div></Link>
            <Link to='/products' onClick={() => props.onButtonClick('men')}><div className='category-card'><img src='images/mens.jpg' alt='men'/><p>MEN</p></div></Link>
            <Link to='/products' onClick={() => props.onButtonClick('kids')}><div className='category-card'><img src='images/kids.jpg' alt='kids'/><p>KIDS</p></div></Link>
            <Link to='/products' onClick={() => props.onButtonClick('figures')}><div className='category-card'><img src='images/figures.jpg' alt='figures'/><p>DOLLS</p></div></Link>
        </div>
    </div>
      <br />
      <div className='category-card-container'>
        <h2>Featured Heroes</h2>
        <div className='featured-heroes-container'>
            <div className='featured-hero-card'><Link to='/products' onClick={() => props.onButtonClick('batman')}><img src='images/nav-swiper/sb.jpeg'/><p>Batman</p></Link></div>
            <div className='featured-hero-card'><Link to='/products' onClick={() => props.onButtonClick('wonder woman')}><img src='images/nav-swiper/sww.jpeg'/><p>Wonder Woman</p></Link></div>
            <div className='featured-hero-card'><Link to='/products' onClick={() => props.onButtonClick('captain america')}><img src='images/nav-swiper/sca.jpg'/><p>Captain America</p></Link></div>
            <div className='featured-hero-card'><Link to='/products' onClick={() => props.onButtonClick('flash')}><img src='images/nav-swiper/sf.jpeg'/><p>Flash</p></Link></div>
            <div className='featured-hero-card'><Link to='/products' onClick={() => props.onButtonClick('ironman')}><img src='images/nav-swiper/sim.jpeg'/><p>Iron Man</p></Link></div>
            <div className='featured-hero-card'><Link to='/products' onClick={() => props.onButtonClick('punisher')}><img src='images/nav-swiper/sp.jpeg'/><p>Punisher</p></Link></div>
            <div className='featured-hero-card'><Link to='/products' onClick={() => props.onButtonClick('superman')}><img src='images/nav-swiper/ssm.jpeg'/><p>Superman</p></Link></div>
            <div className='featured-hero-card'><Link to='/products' onClick={() => props.onButtonClick('spiderman')}><img src='images/nav-swiper/sspiderman.jpeg'/><p>Spiderman</p></Link></div>
            <div className='featured-hero-card'><Link to='/products' onClick={() => props.onButtonClick('wonder woman')}><img src='images/nav-swiper/sww.jpeg'/><p>Wonder Woman</p></Link></div>
            <div className='featured-hero-card'><Link to='/products' onClick={() => props.onButtonClick('x men')}><img src='images/nav-swiper/sxm.webp'/><p>X Men</p></Link></div>
            <div className='featured-hero-card'><Link to='/products' onClick={() => props.onButtonClick('batman')}><img src='images/nav-swiper/sb.jpeg'/><p>Batman</p></Link></div>
            <div className='featured-hero-card'><Link to='/products' onClick={() => props.onButtonClick('black panther')}><img src='images/nav-swiper/sbp.jpg'/><p>Black Panther</p></Link></div>
        </div>
    </div>
      <br />
      <RecommendedProducts />
    </div>
  )
}
