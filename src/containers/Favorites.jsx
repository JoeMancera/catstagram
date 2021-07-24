import React, { useState, useEffect } from 'react';
import Section from '../components/Sections';
import CardFavorite from '../components/CardFavorite';
import CardLoading from '../components/CardLoading';
import '../assets/styles/components/CardFavorite.css';

const API = process.env.REACT_APP_CATS_API_URL;
const API_KEY = process.env.REACT_APP_CATS_API_KEY;

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`${API}/favourites?sub_id=${localStorage.getItem('catstagram_user')}`, {
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
      .then((data) => setFavorites(data))
      .catch((err) => {
        console.log(err);
        setError(err);
        abortController.abort();
      });
  }, []);

  return (
    <>
      <Section key={0} title='Favorites'>
        <div className='cat-result'>
          { favorites.length > 0 ? favorites.map((favoriteItem) => <CardFavorite favorite={favoriteItem} key={favoriteItem.id} />) : <CardLoading error={error} source='favorites' /> }
        </div>
      </Section>
    </>
  );
};

export default Favorites;
