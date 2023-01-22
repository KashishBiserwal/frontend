import React, {useEffect} from 'react'
import { getProduct } from '../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Layout/Loader'
import ProductCard from './Product/ProductCard';

export default function RecommendedProducts() {
  const dispatch = useDispatch();
  const {loading, products} = useSelector(state => state.products);
  const rp1 = products[Math.floor(Math.random() * 2 + 2)];
  const rp2 = products[Math.floor(Math.random() * 2 + 4)];
  const rp3 = products[Math.floor(Math.random() * 2 + 6)];
  const rp4 = products[Math.floor(Math.random() * 2 + 8)];

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch])
  return (
    <div className='category-card-container'>
        <h2>Recommended Products</h2>
        {
          loading ? (
            <Loader />
          ) : (
            <div className='four-container'>
              <div>{rp1 && <ProductCard product={rp1}/>}</div>
              <div>{rp2 && <ProductCard product={rp2}/>}</div>
              <div>{rp3 && <ProductCard product={rp3}/>}</div>
              <div>{rp4 && <ProductCard product={rp4}/>}</div>
              
          </div>
          )
        }
    </div>
  )
}
