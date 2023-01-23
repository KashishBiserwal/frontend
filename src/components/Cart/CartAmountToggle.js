import React from 'react'
import {FaMinus, FaPlus} from 'react-icons/fa'

export default function CartAmountToggle({amount, setDecrease, setIncrease}) {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <div className='cart-button'>
        <div className='amount-toggle'>
        <p style={{marginRight: '0.5rem'}}>Quantity:</p>
            <button onClick={() => setDecrease()} style={{marginRight: '0.5rem'}} className='size'>
                <FaMinus />
            </button>
            <div className='amount-style' style={{color: '#01aade'}}>{amount}</div>
            <button onClick={() => setIncrease()} style={{marginLeft: '0.5rem'}} className='size'>
                <FaPlus />
            </button>
        </div>
    </div>
    </div>
  )
}
