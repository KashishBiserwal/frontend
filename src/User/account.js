import React from 'react'
import { logout } from '../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const dispatch = useDispatch(); 
  const navigate = useNavigate()
  const {user} = useSelector(state => state.user)

  const logoutUser = () => {
    navigate('/')
    dispatch(logout());
  }
  return (
    <div className='mt1'>
      <button onClick={logoutUser} className="btn logout-btn">Logout</button>
      <h1>Hi, {user.name}</h1>
    </div>
  )
}