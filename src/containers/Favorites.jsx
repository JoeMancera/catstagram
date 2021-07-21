import React, { useState, useEffect } from 'react';
import Section from '../components/Sections';
import CardFavorite from '../components/CardFavorite';
import '../assets/styles/components/CardFavorite.css';

const API = process.env.REACT_APP_CATS_API_URL;
const API_KEY = process.env.REACT_APP_CATS_API_KEY;

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(`${API}/favourites?sub_id=${localStorage.getItem('catstagram_user')}`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setFavorites(data))
      .catch((err) => console.log('Error:', err));
  }, []);

  return (
    <>
      <Section key={0} title='Favorites'>
        <div className='cat-result'>
          { favorites.length > 0 ? favorites.map((favoriteItem) => <CardFavorite favorite={favoriteItem} key={favoriteItem.id} />) : <span>Nada para mostrar</span> }
        </div>
      </Section>
    </>
  );
};

export default Favorites;
