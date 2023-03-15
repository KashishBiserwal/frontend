import React from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'

export default function Footer(props) {
  return (
    <footer id='footer'>
        <div className='footer-content'>
          <div>
            <div className='logo'>FIGURZ</div>
            <p>&copy; 2023 Kashish</p>
          </div>
          <div style={{marginTop: '10px'}} className='quickLinks'>
        <p style={{color: '#01aade'}}>Quick Links</p>
        <div className='links'>
            <Link to='products' onClick={() => props.onButtonClick('marvel')}>Marvel</Link>
            <Link to='products' onClick={() => props.onButtonClick('dc')}>Dc</Link>
            <Link to='products' onClick={() => props.onButtonClick('ironman')}>Iron Man</Link>
            <Link to='products' onClick={() => props.onButtonClick('batman')}>Batman</Link>
            <Link to='products' onClick={() => props.onButtonClick('spiderman')}>Spiderman</Link>
            <Link to='products' onClick={() => props.onButtonClick('wonder woman')}>Wonder Woman</Link>
            <Link to='products' onClick={() => props.onButtonClick('captain america')}>Captain America</Link>
            <Link to='products' onClick={() => props.onButtonClick('superman')}>Superman</Link>
            <Link to='products' onClick={() => props.onButtonClick('punisher')}>The Punisher</Link>
            <Link to='products' onClick={() => props.onButtonClick('flash')}>Flash</Link>
        </div>
    </div>
          <Form />
        </div>
    </footer>
  )
}
