import React from 'react';

const Spiner = () => {
  return (
    <div className='spinner__container'>
      <div className='spinner'></div>
      <div className='spinner--txt'>
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default Spiner;
