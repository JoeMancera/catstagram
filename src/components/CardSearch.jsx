import React from 'react';
import '../assets/styles/components/CardSearch.css';

const CardSearch = ({ cat }) => {
  return (
    <div className='cat-search-item'>
      <figure>
        <img className='cat_search' src={cat.url} alt='Cat' />
      </figure>
    </div>
  );
};

export default CardSearch;
