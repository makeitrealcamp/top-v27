import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Cart = () => {
  const amount = useSelector(state => state.cart.total);

  return (
    <div className='cart'>
      <div className='cart__icon'>
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
      <div className='cart__info'>
        <p>{amount}</p>
        <p>{amount === 0 ? 'Empty' : 'items'}</p>
      </div>
    </div>
  );
};

export default Cart;
