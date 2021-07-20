import React from 'react';
import Section from './Sections';
import CardFavorite from './CardFavorite';
import '../assets/styles/components/CardFavorite.css';

const dummyFavorite = [
  {
    'created_at': '2021-07-20T13:49:53.000Z',
    'id': 2095839,
    'image': {
      'id': '9ccXTANkb',
      'url': 'https://cdn2.thecatapi.com/images/9ccXTANkb.jpg',
    },
    'image_id': '9ccXTANkb',
    'sub_id': 'cats5436-c47b-408c-bff9-eda8159d003e',
    'user_id': '4',
  },
  {
    'created_at': '2021-07-20T13:49:53.000Z',
    'id': 2095840,
    'image': {
      'id': '9ccXTANkb',
      'url': 'https://cdn2.thecatapi.com/images/9ccXTANkb.jpg',
    },
    'image_id': '9ccXTANkb',
    'sub_id': 'cats5436-c47b-408c-bff9-eda8159d003e',
    'user_id': '4',
  },
];

const Favorites = () => {

  return (
    <>
      <Section key={0} title='Favorites'>
        <div className='cat-result'>
          { dummyFavorite.length > 0 ? dummyFavorite.map((favoriteItem) => <CardFavorite favorite={favoriteItem} key={favoriteItem.id} />) : <span>Nada para mostrar</span> }
        </div>
      </Section>
    </>
  );
};

export default Favorites;
