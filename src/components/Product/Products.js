import React, { useState } from 'react'
import { getProduct } from '../../actions/productAction'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Layout/Loader';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination";


export default function Products() {
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const {keyword} = useParams();

    const setCurrentPageNo = (e) => {
      setCurrentPage(e);
    }

    const {loading, products, productCount, resultPerPage} = useSelector(state => state.products);
    useEffect(() => {
      dispatch(getProduct(keyword, currentPage));
    }, [dispatch, keyword, currentPage])
    
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
              <div>
                {/* {resultPerPage < count && ( */}
                  <div >
                    <Pagination 
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={productCount}
                      onChange={setCurrentPageNo}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="1st"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                    />
                </div>
                {/* )} */}
              </div>
          </div>
        )
      }
    </div>
  )
}
