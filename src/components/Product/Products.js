import React, { useRef, useState } from 'react'
import { getProduct } from '../../actions/productAction'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Layout/Loader';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination";
import { GoThreeBars } from "react-icons/go";

export default function Products({ category, setCategory, onButtonClick }) {
  const [show, setShow] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 2000]);
  const priceRef = useRef(null);

  const priceHandler = (event, newPrice) => {
    const newPriceValues = priceRef.current.value.split(",");
    setPrice(newPriceValues.map(parseFloat));
  };
  const dispatch = useDispatch();
  const { keyword } = useParams();

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  }

  const { loading, products, productCount, resultPerPage } = useSelector(state => state.products);
  useEffect(() => {
    dispatch(getProduct(keyword, currentPage, category));
  }, [dispatch, keyword, currentPage, category])

  function toggleShow() {
    setShow(prev => !prev)
  }
  function clearFilters() {
    onButtonClick("");
    setPrice([0, 5000]);
  }

  return (
    <div>
      {
        loading ? (
          <Loader />
        ) : (
          <div>
            <h1 className='heading'>Products</h1>
            <div className='show-hide' onClick={() => toggleShow()}> <GoThreeBars />{show ? "Hide Filters" : "Show Filters"}</div>
            <div className={show ? 'filterbox-products' : 'filterbox-products filter-section-hidden'}>
              <div className='fb-con'>
                <div className={show ? "filterbox" : "hide"} >
                  <p className='cat-head'>Categories</p>
                  <ul className='categoryBox'>
                    <li className='category-link' onClick={() => onButtonClick("")}>All</li>
                    <li className='category-link' onClick={() => onButtonClick("tshirts")}>T Shirts</li>
                    <li className='category-link' onClick={() => onButtonClick("hoodies")}>Hoodies</li>
                    <li className='category-link' onClick={() => onButtonClick("caps")}>Caps</li>
                    <li className='category-link' onClick={() => onButtonClick("footwear")}>Footwear</li>
                    <li className='category-link' onClick={() => onButtonClick("socks")}>Socks</li>
                    <li className='category-link' onClick={() => onButtonClick("marvel")}>Marvel</li>
                    <li className='category-link' onClick={() => onButtonClick("dc")}>DC</li>
                  </ul>
                  <div className='price-range'>
                    <p className='cat-head'>Price</p>
                    <p>{price}</p>
                    <input
                      style={{ marginLeft: '5px' }}
                      type='range'
                      name='price'
                      min={0}
                      max={2000}
                      value={price}
                      ref={priceRef}
                      onChange={priceHandler}
                    />
                  </div>
                  <div><button className='clear-filters cat-head' onClick={() => clearFilters()}>Clear Filters</button></div>

                </div>
              </div>
              <div className='products-container'>
                {products && products.map((product) => {
                  return <ProductCard product={product} key={product._id} />
                })}
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
