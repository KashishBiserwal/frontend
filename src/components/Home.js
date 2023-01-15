import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getProduct } from '../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Layout/Loader'
import ProductCard from '../components/Product/ProductCard'
import BrowseCategories from './BrowseCategories'
import RecommendedProducts from './RecommendedProducts'
import FeaturedHeroes from './FeaturedHeroes'

export default function Home() {
  const dispatch = useDispatch();
  const {loading, products} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch])


  return (
    <div>
      {
        loading? (
          <Loader />
        ) : (
          <div>
            <div className='banner'>
              <img src='images/banner.png' alt='banner' className='banner-image'/>
              <div className='banner-links'>
                  <div className='banner-link-img'><Link to='Marvel'><img src='images/marvelbanner.jpg' alt='marvel banner'/></Link></div>
                  <div className='banner-dc banner-link-img'><Link to='dc'><img src='images/dcbanner.jpg' alt='dc banner'/></Link></div>
              </div>
            </div><br />
            {/* <div className='products-container'>
            {products && products.map((product) => {
              return <ProductCard product={product} key={product._id}/>
            })}
          </div> */}
          <div className='sale'><h2>UPTO 40% OFF</h2></div>
          <BrowseCategories />
          <br />
          <FeaturedHeroes/>
          <br />
          <RecommendedProducts />
          </div>
        )
      }
    </div>
  )
}
