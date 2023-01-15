import React from 'react'
import Search from './Search'
import Cart from './Cart'
import Swipe from './Swipe'

export default function Header() {
  return (
    <div className='header'>
      <div className='header-content'>
        <div className='top'>
          <h1 className='logo'>Figurz</h1>
          <div className='top-right'>
            <Search />
            <Cart />
          </div>
        </div>
        <div className='mid'>
          <Swipe />
        </div>
        <div className='bottom'>
          <div>Dropdown buttons</div>
          <div>Login</div>
        </div>
      </div>
    </div>
  )
}
