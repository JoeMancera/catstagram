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
    fetch(`${API}/images/search?limit=2`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((err) => console.log('Error:', err));
  }, []);

  return (
    <Section title='Cats of the day'>
      {cats.length > 0 ? cats.map((cat) => <CardVote key={cat.id} cat={cat} />) : null }
    </Section>
  );
};

export default Home;
