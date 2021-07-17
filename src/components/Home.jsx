/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import env from 'react-dotenv';
import Section from './Sections';
import CardVote from './CardVote';
import '../assets/styles/App.css';

const API = env.CATS_API_URL;
const API_KEY = env.CATS_API_KEY;
const NUMBERS_OF_CATS = env.CATS_DAY_NUM;

const Home = () => {
  const [catsOfTheDay, setCatsOfTheDay] = useState({ results: [] });

  useEffect(() => {
    fetch(`${API}/images/search?limit=${NUMBERS_OF_CATS}`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setCatsOfTheDay(data))
      .catch((err) => console.log('Error:', err));
  }, []);

  return (
    <Section title='Cats of the day'>
      {catsOfTheDay.length > 0 ? catsOfTheDay.map((cat) => <CardVote key={cat.id} cat={cat} />) : null }
    </Section>
  );
};

export default Home;
