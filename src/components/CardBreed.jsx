/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import env from 'react-dotenv';
import '../assets/styles/components/CardBreed.css';

const API = env.CATS_API_URL;
const API_KEY = env.CATS_API_KEY;

const CardBreed = () => {

  const [breedOfTheDay, setBreedOfTheDay] = useState([]);

  useEffect(() => {
    fetch(`${API}/images/search?breed_id=abys`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setBreedOfTheDay(data))
      .catch((err) => console.log('Error:', err));
  }, []);

  { if (breedOfTheDay.length > 0) {
    return (
      breedOfTheDay.map((cat) => (
        <div className='card_Breed' key={cat.id}>
          <figure>
            <img className='breed_image' src={cat.url} alt='Cat' srcSet='' />
            <div className='breed_description'>
              <h3>{cat.breeds[0].name}</h3>
              <p>{cat.breeds[0].description}</p>
              <hr />
              <p>{cat.breeds[0].temperament}</p>
              <p>{cat.breeds[0].origin}</p>
              <p>{cat.breeds[0].weight.metric}</p>
              <p>{cat.breeds[0].life_span}</p>
            </div>
          </figure>
        </div>
      ))
    );
  } return null;
  }
};

export default CardBreed;
