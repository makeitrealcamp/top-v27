import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../store/products/productsSlice';
import ProductCard from './ProductCard';
import Spiner from './Spiner';

const ListOfProductCards = () => {
  const productsList = useSelector(state => state.products.items);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // eslint-disable-next-line no-undef
        const response = await axios(process.env.REACT_APP_API_URL);
        dispatch(addProducts(response.data));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='listOfProducts'>
      {loading ? (
        <Spiner />
      ) : (
        productsList.map(({ title, price, id, image }) => (
          <ProductCard
            key={id}
            title={title}
            price={price}
            id={id}
            image={image}
          />
        ))
      )}
    </div>
  );
};

export default ListOfProductCards;
