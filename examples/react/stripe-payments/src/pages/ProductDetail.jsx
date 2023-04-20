import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart/cartSlice';
import { showAlert } from '../store/alerts/alertsSlice';
import Spiner from '../components/Spiner';

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();
  const { title, category, description, image, price, id } = productDetail;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItemToCart({ title, price, id, image }));
    dispatch(
      showAlert({
        active: true,
        message: 'The product was added successfully',
        type: 'success',
      })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios(
          // eslint-disable-next-line no-undef
          `${process.env.REACT_APP_API_URL}/${productId}`
        );
        setProductDetail(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='productDetail'>
      {loading ? (
        <Spiner />
      ) : (
        <div className='cardDetail'>
          {' '}
          <div className='productDetail__data'>
            <div className='productDetail__data--img'>
              <img src={image} alt={title} />
            </div>
            <div className='productDetail__data--info'>
              <div className='info--title'>
                <h3>{title}</h3>
              </div>
              <div className='productDetail__data--price'>
                <p>
                  <b>Category:</b> {category}
                </p>
                <p>
                  <b>Price:</b> ${price}
                </p>
              </div>
              <div className='productdetail__data--button'>
                <button onClick={addToCart}>Add to cart</button>
              </div>
            </div>
          </div>
          <div className='productDetail__description'>
            <h4>Description:</h4>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
