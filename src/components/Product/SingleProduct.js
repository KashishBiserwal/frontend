import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../../actions/productAction'
import Loader from '../Layout/Loader';

export default function SingleProduct() {
    const dispatch = useDispatch();
    const {loading, product} = useSelector(state => state.productDetails);
    const {id} = useParams();
    console.log(id);
    useEffect(() => {
        dispatch(getProductDetails(id));
      }, [dispatch, id])

  return (
    <div>
        {
          loading? (
            <Loader />
          ) : (
            <div className='single-product-container'>
              <div className='images'>
                
              </div>
              <div className='details'>
                <h2 style={{textTransform: 'uppercase'}}>{product.name}</h2><br />
                <h2><span style={{color: '#01aade'}}>&#8377;{product.price}</span></h2><br />
                {product.stock <= 0 && <p className='red'>Out of stock</p>}
              </div>
            </div>
          )
        }
    </div>
  )
}
