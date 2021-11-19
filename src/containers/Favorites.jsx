import React, { useState, useEffect } from 'react';
import Section from '../components/Sections';
import CardFavorite from '../components/CardFavorite';
import CardLoading from '../components/CardLoading';
import { getFavoriteCats, deleteFavoriteCat } from '../utils/favoritesCat';
import '../assets/styles/components/CardFavorite.css';

const API = process.env.REACT_APP_CATS_API_URL;
const API_KEY = process.env.REACT_APP_CATS_API_KEY;

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getFavorites() {
      const response = await getFavoriteCats(`${API}/favourites?sub_id=`, API_KEY, localStorage.getItem('catstagram_user'));
      if (response.status === 200) {
        setFavorites(response.data);
      } else {
        setError(response.statusText);
      }
    }
    getFavorites();
  }, []);

  const handleClickRemoveFavorite = async (favoriteId) => {
    const response = await deleteFavoriteCat(`${API}/favourites/`, API_KEY, favoriteId);
    if (response.status === 200) {
      const newFavorites = favorites.filter((favorite) => favorite.id !== favoriteId);
      setFavorites(newFavorites);
    } else {
      setError(response.statusText);
    }
  };

  return (
    <>
      <Section key={0} title='Favorites'>
        <div className='cat-result'>
          { favorites.length >= 0 ? favorites.length === 0 ? <p>Nada para mostrar</p> : favorites.map((favoriteItem) => <CardFavorite favorite={favoriteItem} key={favoriteItem.id} onClick={handleClickRemoveFavorite} />) : <CardLoading error={error} source='favorites' /> }
        </div>
      </Section>
    </>
  );
};

export default Favorites;
