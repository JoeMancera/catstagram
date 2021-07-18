import React, { useState, useEffect } from 'react';
import Section from './Sections';
import CardVote from './CardVote';
import CardBreed from './CardBreed';
import '../assets/styles/App.css';

const API = process.env.REACT_APP_CATS_API_URL;
const API_KEY = process.env.REACT_APP_CATS_API_KEY;

const Home = () => {
  const [randomBreed, setRandomBreed] = useState('Aegean');

  useEffect(() => {
    fetch(`${API}/breeds`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRandomBreed(data[Math.floor(Math.random() * data.length)].id);
      })
      .catch((err) => console.log('Error:', err));
  }, []);

  return (
    <>
      <Section key={0} title='Cats of the day'>
        <CardVote />
      </Section>
      <Section key={1} title='Breed of the day'>
        <CardBreed breed={randomBreed} />
      </Section>
    </>
  );
};

export default Home;
