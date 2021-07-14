import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Section from '../components/Sections';
import CardVote from '../components/CardVote';
import '../assets/styles/App.css';

const App = () => {
  const [cats, setCats] = useState({ results: [] });

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCats(data));
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Section title='Cats of the day'>
          { cats.results.map((item) => <CardVote urlImage={item.image} />)}
        </Section>
      </main>
    </div>
  );
};

export default App;
