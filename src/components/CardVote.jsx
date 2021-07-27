import React, { useState, useEffect } from 'react';
import '../assets/styles/components/CardVote.css';
import CardLoading from './CardLoading';
import likeButton from '../assets/static/like-button.png';
import dislikeButton from '../assets/static/dislike-button.png';
import favoriteButton from '../assets/static/Fav-button.png';

const API = process.env.REACT_APP_CATS_API_URL;
const API_KEY = process.env.REACT_APP_CATS_API_KEY;
const NUMBERS_OF_CATS = process.env.REACT_APP_CATS_DAY_NUM;

const CardVote = () => {

  const [catsOfTheDay, setCatsOfTheDay] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`${API}/images/search?limit=${NUMBERS_OF_CATS}`, {
      method: 'GET',
      signal: abortController.signal,
      headers: {
        'x-api-key': API_KEY,
      },
    })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(new Error(`Response not ok with status ${response.status}`));
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => setCatsOfTheDay(data))
      .catch((err) => {
        console.log(err);
        setError(err);
        abortController.abort();
      });
  }, []);

  const handlerClickVoteButton = (catId, vote) => {
    const abortController = new AbortController();
    const dataVote = {
      'image_id': `${catId}`,
      'sub_id': `${localStorage.getItem('catstagram_user')}`,
      'value': vote,
    };
    fetch(`${API}/votes`, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify(dataVote),
    })
      .then((response) => response.json())
      .then((data) => (vote && data.message === 'SUCCESS' ? alert(`${data.message}: You like this cat`) : alert(`${data.message}: You dislike this cat`)))
      .catch((err) => {
        console.log(err);
        setError(err);
        abortController.abort();
      });
  };

  const handlerClickFavoriteButton = (catId) => {
    const abortController = new AbortController();
    const dataVote = {
      'image_id': `${catId}`,
      'sub_id': `${localStorage.getItem('catstagram_user')}`,
    };
    fetch(`${API}/favourites`, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify(dataVote),
    })
      .then((response) => response.json())
      .then((data) => (data.message === 'SUCCESS' ? alert(`${data.message}: You adore this cat`) : alert(`${data.message}: Mhh!`)))
      .catch((err) => {
        console.log(err);
        setError(err);
        abortController.abort();
      });
  };

  { if (catsOfTheDay.length > 0) {
    return (
      catsOfTheDay.map((cat) => (
        <div className='card_vote' key={cat.id}>
          <figure>
            <img className='cat_image' src={cat.url} alt='Cat' srcSet='' />
            <div className='card_vote_actions'>
              <button type='button' className='btn-card' onClick={() => handlerClickVoteButton(cat.id, 1)}>
                <img src={likeButton} alt='Like button' />
              </button>
              <button type='button' className='btn-card' onClick={() => handlerClickVoteButton(cat.id, 0)}>
                <img src={dislikeButton} alt='Diskile button' />
              </button>
              <button type='button' className='btn-card' onClick={() => handlerClickFavoriteButton(cat.id)}>
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
