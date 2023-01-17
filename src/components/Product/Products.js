import React from 'react'
import { getProduct } from '../../actions/productAction'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Layout/Loader';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';


export default function Products() {
    const dispatch = useDispatch();
    const {keyword} = useParams();
    console.log(keyword);
    const {loading, products} = useSelector(state => state.products);
    useEffect(() => {
      dispatch(getProduct(keyword));
    }, [dispatch, keyword])
    
  return (
    <div>
        {
        loading? (
          <Loader />
        ) : (
          <div>
            <h1 className='heading'>Products</h1>
              <div className='products-container'>
                {products && products.map((product) => {
                  return <ProductCard product={product} key={product._id}/>
                })}
              </div>
          </div>
        )
      }
    </div>
  )
}
