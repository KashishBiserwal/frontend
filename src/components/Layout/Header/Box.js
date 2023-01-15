import React from 'react'
import { Link } from 'react-router-dom'

export default function Box(props) {
  return (
    <Link to={`/${props.link}`}><div className='box'><img src={props.img} alt="nothing" /></div></Link>
  )
}