import React from 'react';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { setCount,removeProduct } from '../store/actions/cartActions';
const NavCartItem = ({ name, id, count, price }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeProduct(
      { 
        id: id
      }
    ))
  }

  return (
    <tr>
      <td>
        <div className="cart-product">
          
          <div className="cart-product__content">
            <h3>{name}</h3>
          </div>
        </div>
      </td>
      <td>
        <div className="quantity-button">
          <span>{ count } x </span>
        </div>
      </td>
      <td><NumberFormat value={ price } displayType={'text'} thousandSeparator={true} suffix={' Ar'} /> </td>
      <td className="cart-item-cancel"><button className="p-3 bg-dark" onClick={() => removeFromCart()}>x</button></td>
    </tr>
  )
};
export default NavCartItem