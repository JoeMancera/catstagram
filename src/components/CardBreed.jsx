import React, { useState, useEffect } from 'react';
import '../assets/styles/components/CardBreed.css';

const API = process.env.REACT_APP_CATS_API_URL;
const API_KEY = process.env.REACT_APP_CATS_API_KEY;

const CardBreed = ({ breed }) => {
  const [breedOfTheDay, setBreedOfTheDay] = useState([]);

  useEffect(() => {
    fetch(`${API}/breeds`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBreedOfTheDay(data[Math.floor(Math.random() * data.length)]);
      })
      .catch((err) => console.log('Error:', err));
  }, []);

  { if (breedOfTheDay.id) {
    return (
      <div className='card_Breed' key={breedOfTheDay.id}>
        <figure>
          <img className='breed_image' src={breedOfTheDay.image.url} alt='Cat' srcSet='' />
          <div className='breed_description'>
            <h3>{breedOfTheDay.name}</h3>
            <p>{breedOfTheDay.description}</p>
            <hr />
            <div className='breed_desciption-qualities'>
              <p>{breedOfTheDay.temperament}</p>
              <p>
                <strong>Origin: </strong>
                {breedOfTheDay.origin}
              </p>
              <p>
                <strong>Weight: </strong>
                {breedOfTheDay.weight.metric}
                Kg
              </p>
              <p>
                <strong>Life span: </strong>
                {breedOfTheDay.life_span}
                Years
              </p>
              <a className='btn btn-link' target='_blank' href={breedOfTheDay.wikipedia_url} rel='noreferrer'>Go to Wiki</a>
            </div>
          </div>
        </figure>
      </div>
    );
  } return null;
  }
};

export default CardBreed;
