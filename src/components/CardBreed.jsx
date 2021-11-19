import React from 'react';
import useGetBreed from '../hooks/useGetBreed';
import CardLoading from './CardLoading';
import '../assets/styles/components/CardBreed.css';

const API = process.env.REACT_APP_CATS_API_URL;
const API_KEY = process.env.REACT_APP_CATS_API_KEY;

const CardBreed = () => {
  const { breedOfTheDay, error } = useGetBreed(`${API}/breeds`, API_KEY);

  { if (breedOfTheDay.id) {
    return (
      <div className='card_Breed' key={breedOfTheDay.id}>
        <figure>
          <img className={breedOfTheDay.image.width > breedOfTheDay.image.height ? 'breed_image breed_image_horizontal chong' : 'breed_image breed_image_vertical ching'} src={breedOfTheDay.image.url} alt='Cat' srcSet='' />
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
