import React from 'react';
import '../assets/styles/components/CardVote.css'
import likeButton from '../assets/static/like-button.png';
import dislikeButton from '../assets/static/dislike-button.png';
import favoriteButton from '../assets/static/Fav-button.png';
import catImage from '../assets/static/cat_1.jpg';

const CardVote = () => (
  <div className='card_vote'>
    <figure>
      <img className='cat_image' src={catImage} alt='Cat' srcSet='' />
      <div className='card_vote_actions'>
        <button type='button' className='btn-card'>
          <img src={likeButton} alt='Like button' />
        </button>
        <button type='button' className='btn-card'>
          <img src={dislikeButton} alt='Like button' />
        </button>
        <button type='button' className='btn-card'>
          <img src={favoriteButton} alt='Like button' />
        </button>
      </div>
    </figure>
  </div>
);

export default CardVote;
