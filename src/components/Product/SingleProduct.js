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
            <div>
              {product.name}
            </div>
          )
        }
    </div>
  )
}
