import React from 'react'
import { logout } from '../actions/userAction';
import { useDispatch } from 'react-redux';

export default function Account() {
  const dispatch = useDispatch(); 

  const logoutUser = () => {
    dispatch(logout());
  }
  return (
    <div className='mt1'>
      <button onClick={logoutUser} className="btn logout-btn">Logout</button>
      <h1>Account</h1>
    </div>
  )
}
