import React from 'react'
import Search from './Search'
import Cart from './Cart'
import Swipe from './Swipe'
import { Link } from 'react-router-dom'
import UserOptions from './UserOptions'
import { useSelector } from 'react-redux'

export default function Header() {
  const {isAuthenticated, user} = useSelector(state => state.user)
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
            <Link to="products"><button className='header-button'>Products</button></Link>
          </div>
          <div className='login-me'>
            <div style={{marginLeft: "15px"}}>
              <Link to="login"><button className='header-button'>Login</button></Link>
            </div>
            {isAuthenticated && <UserOptions user={user} />}
          </div>
        </div>
      </div>
    </div>
  )
}
