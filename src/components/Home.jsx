import React, { useState, useEffect } from 'react';
import BREEDLIST from '../utils/breedsList';
import Section from './Sections';
import CardVote from './CardVote';
import CardBreed from './CardBreed';
import '../assets/styles/App.css';

const Home = () => {

  const [randomBreed, setRandomBreed] = useState('');

  useEffect(() => {
    setRandomBreed(BREEDLIST[Math.floor(Math.random() * BREEDLIST.length)].id);
  }, []);

  return (
    <>
      <Section key={0} title='Cats of the day'>
        <CardVote />
      </Section>
      <Section key={1} title='Breed of the day'>
        <CardBreed key={2} breed={randomBreed} />
      </Section>
    </>
  );
};

export default Home;
