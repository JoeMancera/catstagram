import React from 'react';
import '../assets/styles/components/CardVote.css';
import CardLoading from './CardLoading';
import likeButton from '../assets/static/like-button.png';
import dislikeButton from '../assets/static/dislike-button.png';
import favoriteButton from '../assets/static/Fav-button.png';

const CardVote = ({ onClickVote, onClickFavorite, catsOfTheDay, error }) => {

  { if (catsOfTheDay.length > 0) {
    return (
      catsOfTheDay.map((cat) => (
        <div className='card_vote' key={cat.id}>
          <figure>
            <img className={cat.width > cat.height ? 'cat_image cat_image_horizontal' : 'cat_image cat_image_vertical'} src={cat.url} alt='Cat' srcSet='' />
            <div className='card_vote_actions'>
              <button id='btn-like-cat' type='button' className='btn-card' onClick={() => onClickVote(cat.id, 1)}>
                <img src={likeButton} alt='Like button' />
              </button>
              <button id='btn-dislike-cat' type='button' className='btn-card' onClick={() => onClickVote(cat.id, 0)}>
                <img src={dislikeButton} alt='Diskile button' />
              </button>
              <button id='btn-favorite-cat' type='button' className='btn-card' onClick={() => onClickFavorite(cat.id)}>
                <img src={favoriteButton} alt='Favorite button' />
              </button>
            </div>
          </figure>
        </div>
      ))
    );
  } return (
    <CardLoading error={error} source='cats of the day' />
  );
  }
};

export default CardVote;
