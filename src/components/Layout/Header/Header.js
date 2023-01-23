import React from 'react'
import Search from './Search'
import Cart from './Cart'
import Swipe from './Swipe'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <div className='header-content'>
        <div className='top'>
          <Link to="/" style={{textDecoration: "none"}}><h1 className='logo'>Figurz</h1></Link>
          <div className='top-right'>
            <Search />
            <Cart />
          </div>
        </div>
        <div className='mid'>
          <Swipe />
        </div>
        <div className='bottom'>
          <div>
            <Link to="products"><button className='header-button products-button'>Products</button></Link>
          </div>
          <div>
            <Link to="login"><button className='header-button login-button'>Login</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
