import React from 'react';
import '../assets/styles/components/Sections.css';

const Section = ({ children, title }) => (
  <section className='cat-section'>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
