import React from 'react';
import Section from './Sections';
import CardVote from './CardVote';
import CardBreed from './CardBreed';
import '../assets/styles/App.css';

const Home = () => {
  return (
    <>
      <Section key={0} title='Cats of the day'>
        <CardVote />
      </Section>
      <Section key={1} title='Breed of the day'>
        <CardBreed />
      </Section>
    </>
  );
};

export default Home;
