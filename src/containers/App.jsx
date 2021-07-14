import React from 'react';
import Header from '../components/Header';
import Section from '../components/Sections';
import CardVote from '../components/CardVote';
import '../assets/styles/App.css';

const App = () => (
  <div>
    <Header />
    <main>
      <Section title='Cats of the day'>
        <CardVote />
      </Section>
    </main>
  </div>
);

export default App;
