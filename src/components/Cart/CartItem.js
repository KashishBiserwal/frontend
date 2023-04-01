import React from "react";
import FormatPrice from "../Filter/FormatPrice";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem } from "../../actions/cartAction";

const CartItem = ({ product, name, image, price, quantity }) => {
    const dispatch = useDispatch();

    function deleteItem(product){
        dispatch(removeItem(product))
    }

  return (
    <div className="cart-product">
      <div className="cart-image--name">
        <div className="img-name">
          <figure>
            <img src={`images/products/${image}`} alt={product} className='cart-item-img'/>
          </figure>
          <p>{name}</p>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p style={{textAlign: 'center'}}>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <div style={{ display: 'flex' ,justifyContent: 'center'}}>
      {quantity}
      </div>

      {/* Subtotal */}
      <div className="cart-hide">
        <p style={{textAlign: 'center'}}>
          <FormatPrice price={price * quantity} />
        </p>
      </div>

      <div style={{textAlign: 'center'}}>
        <FaTrash className="remove_icon" onClick={() => deleteItem(product)} />
      </div>
    </div>
  );
};

export default CartItem;