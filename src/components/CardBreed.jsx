import React, { useState, useEffect } from 'react';
import '../assets/styles/components/CardBreed.css';

const API = process.env.REACT_APP_CATS_API_URL;
const API_KEY = process.env.REACT_APP_CATS_API_KEY;

const CardBreed = ({ breed = 'hima' }) => {
  const [breedOfTheDay, setBreedOfTheDay] = useState([]);

  console.log('the bread', breed);
  console.log('the bread info', breedOfTheDay);

  useEffect(() => {
    fetch(`${API}/images/search?breed_id=${breed}`, {
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
              <div className='breed_desciption-qualities'>
                <p>{cat.breeds[0].temperament}</p>
                <p>
                  <strong>Origin: </strong>
                  {cat.breeds[0].origin}
                </p>
                <p>
                  <strong>Weight: </strong>
                  {cat.breeds[0].weight.metric}
                  Kg
                </p>
                <p>
                  <strong>Life span: </strong>
                  {cat.breeds[0].life_span}
                  Years
                </p>
                <a className='btn btn-link' target='_blank' href={cat.breeds[0].wikipedia_url} rel='noreferrer'>Go to Wiki</a>
              </div>
            </div>
          </figure>
        </div>
      ))
    );
  } return null;
  }
};

export default CardBreed;
