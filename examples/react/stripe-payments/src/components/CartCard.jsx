import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart/cartSlice';

const CartCard = ({ quantity, image, title, price, id }) => {
  const dispatch = useDispatch();

  const handleMinus = () => {
    dispatch(cartActions.removeItem(id));
  };
  const handlePlus = () => {
    dispatch(cartActions.addItemToCart({ id, image, title, price }));
  };

  return (
    <div className='cartCard'>
      <div className='cartCard__img'>
        <img src={image} alt={title} loading='lazy' />
      </div>
      <div className='cartCard__info'>
        <p className='cartCard__info--title'>{title}</p>
        <p className='cartCard__info--price'>Price: ${price}</p>
      </div>
      <div className='cartCard__icons'>
        <button onClick={handleMinus} className='cartCard__icons--button'>
          <FontAwesomeIcon icon={faMinusCircle} />
        </button>
        <span>{quantity}</span>
        <button onClick={handlePlus} className='cartCard__icons--button'>
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
