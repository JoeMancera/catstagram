import React, { useState, useEffect } from 'react';
import CardLoading from './CardLoading';
import '../assets/styles/components/CardBreed.css';

const API = process.env.REACT_APP_CATS_API_URL;
const API_KEY = process.env.REACT_APP_CATS_API_KEY;

const imageSizeH = {
  width: 349,
  height: 250,
};

const imageSizeV = {
  width: 349,
  height: 390,
};

const CardBreed = () => {
  const [breedOfTheDay, setBreedOfTheDay] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`${API}/breeds`, {
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
      .then((data) => {
        setBreedOfTheDay(data[Math.floor(Math.random() * data.length)]);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        abortController.abort();
      });
  }, []);

  { if (breedOfTheDay.id) {
    return (
      <div className='card_Breed' key={breedOfTheDay.id}>
        <figure>
          <img className={breedOfTheDay.width > breedOfTheDay.height ? 'breed_image breed_image_horizontal' : 'breed_image breed_image_vertical'} src={breedOfTheDay.image.url} alt='Cat' srcSet='' style={breedOfTheDay.width > breedOfTheDay.height ? imageSizeH : imageSizeV} />
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
  } return (
    <CardLoading error={error} source='breed' />
  );
  }
};

export default CardBreed;
