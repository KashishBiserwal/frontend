import React from 'react'
import { Link } from 'react-router-dom'

export default function UserOptions() {
  return (
    <div>
        <Link to="/account"><button className='header-button'>Me</button></Link>
    </div>
  )
}
