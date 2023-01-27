import React, { useState } from 'react'
import { getProduct } from '../../actions/productAction'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Layout/Loader';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination";
import FormatPrice from "../Filter/FormatPrice"

const categories = [
  "TShirts",
  "Hoodies",
  "Caps",
  "Footwear",
  "Socks",
  "marvel",
  "dc"
]

export default function Products() {
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 5000])
    const [category, setCategory] = useState("marvel")
    const priceHandler = (event, newPrice) => {
      setPrice(newPrice);
    };
    const dispatch = useDispatch();
    const {keyword} = useParams();

    const setCurrentPageNo = (e) => {
      setCurrentPage(e);
    }

    const {loading, products, productCount, resultPerPage} = useSelector(state => state.products);
    useEffect(() => {
      dispatch(getProduct(keyword, currentPage, category));
      console.log(category);
    }, [dispatch, keyword, currentPage, category])
    
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
              {/* <div className='price-range'>
                  <p className='filter-heading'>Price</p>
                  <p style={{marginLeft: '5px'}}>
                      <FormatPrice price={price} />
                  </p>
                  <input style={{marginLeft: '5px'}} type='range' name='price'  min={0} max={5000} value={price} onChange={priceHandler} />
              </div> */}
              <div>
                <div>
                  <p>Categories</p>
                  <ul className='categoryBox'>
                  {categories.map((category) => (
                    <li className='category-link' key={category} onClick={() => setCategory(category.toLowerCase())}>{category}</li>
                  )
                  )}
                  </ul>
                  
                </div>
              </div>
              <div>
                {resultPerPage < productCount && (
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
                )}
              </div>
          </div>
        )
      }
    </div>
  )
}
