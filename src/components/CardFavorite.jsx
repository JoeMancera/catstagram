import React from 'react';
import removeFavoriteButton from '../assets/static/remove-button.png';

const CardFavorite = ({ favorite }) => {
  return (
    <div className='card_favorite'>
      <figure>
        <img className='cat_favorite_image' src={favorite.image.url} alt='Cat' srcSet='' />
        <div className='card_favorite_actions'>
          <button type='button' className='btn-card'>
            <img src={removeFavoriteButton} alt='Remove favorite button' />
          </button>
        </div>
      </figure>
    </div>
  );
};

export default CardFavorite;
