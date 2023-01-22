import React from 'react'
import { Link } from 'react-router-dom'
import BrowseCategories from './BrowseCategories'
import RecommendedProducts from './RecommendedProducts'
import FeaturedHeroes from './FeaturedHeroes'

export default function Home() {
  return (
      <div>
        <div className='banner'>
          <img src='images/banner.png' alt='banner' className='banner-image'/>
          <div className='banner-links'>
              <div className='banner-link-img'><Link to='Marvel'><img src='images/marvelbanner.jpg' alt='marvel banner'/></Link></div>
              <div className='banner-dc banner-link-img'><Link to='dc'><img src='images/dcbanner.jpg' alt='dc banner'/></Link></div>
          </div>
        </div><br />
      <div className='sale'><h2>UPTO 40% OFF</h2></div>
      <BrowseCategories />
      <br />
      <FeaturedHeroes/>
      <br />
      <RecommendedProducts />
    </div>
  )
}
