/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import env from 'react-dotenv';
import Section from './Sections';
import CardVote from './CardVote';
import '../assets/styles/App.css';

const API = env.CATS_API_URL;
const API_KEY = env.CATS_API_KEY;

const Home = () => {
  const [cats, setCats] = useState({ results: [] });

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCats(data));
  }, []);

  return (
    <Section title='Cats of the day'>
      { cats.results.map((item) => <CardVote key={item.id} urlImage={item.image} />)}
    </Section>
  );
};

export default Home;
