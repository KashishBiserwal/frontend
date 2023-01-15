import React from 'react'
import { Link } from 'react-router-dom'

export default function QuickLinks() {
  return (
    <div style={{marginTop: '10px'}} className='quickLinks'>
        <p style={{color: '#01aade'}}>Quick Links</p>
        <div className='links'>
            <Link to='Marvel'>Marvel</Link>
            <Link to='dc'>Dc</Link>
            <Link to='Hero/ironman'>Iron Man</Link>
            <Link to='Hero/batman'>Batman</Link>
            <Link to='Hero/spiderman'>Spiderman</Link>
            <Link to='Hero/wonder woman'>Wonder Woman</Link>
            <Link to='Hero/captain america'>Captain America</Link>
            <Link to='Hero/superman'>Superman</Link>
            <Link to='Hero/punisher'>The Punisher</Link>
            <Link to='Hero/flash'>Flash</Link>
        </div>
    </div>
  )
}
