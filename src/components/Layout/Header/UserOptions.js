import React from 'react'
import { Link } from 'react-router-dom'

export default function UserOptions(props) {
  return (
    <div>
        <Link to="/account"><button className='header-button'>{props.user.name[0].toUpperCase()}</button></Link>
    </div>
  )
}
