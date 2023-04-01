import React from 'react'
import {useDispatch, useSelector } from 'react-redux';
import  FormatPrice from '../Filter/FormatPrice';
import CartItem from './CartItem';
import { clearCart } from '../../actions/cartAction';

export default function MyCart() {
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);

  const total_price = cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  const shipping_fee = 0.1 * total_price;
  
  const empty = () => {
    dispatch(clearCart()) 
  }

  if(cartItems[0] === undefined) {
    return (
      <div className="empty">
        <h2 style={{textAlign: 'center'}}>Your Cart Is Empty!</h2>
        <img src="images/empty-cart.svg" alt="cart"/>
      </div>
    )
  }
  return (
    <div className="cart-page">
        <div className="cart-headings">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <div className="cart-item">
          {cartItems?.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem}/>;
          })}
        </div>
        {/* clear cart */}
        <div className="clear">
          <button onClick={() => empty()} className="btn">Clear Cart</button>
        </div>
        {/* order total_amount */}
        <div>
          <div className="order-total">
            <div className="cost">
              <p style={{marginRight: '0.5rem'}}>Subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div className="cost">
              <p style={{marginRight: '0.5rem'}}>Shipping Fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div className="cost">
              <p style={{marginRight: '0.5rem'}}>Order Total:</p>
              <p style={{color: '#01aade'}}>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}
