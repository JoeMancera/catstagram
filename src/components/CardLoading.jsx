import React from 'react';
import '../assets/styles/components/CardLoading.css';

const CardLoading = ({ error }) => (
  <>
    <div className='card_Breed' key={0}>
      <div className='breed_image'>
        <p>{error ? 'Error load Cat API' : 'Loading bread...'}</p>
        <p>{error ? `Error: ${error}` : ''}</p>
      </div>
    </div>
  </>
);

export default CardLoading;
