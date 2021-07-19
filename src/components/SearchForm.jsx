import React from 'react';
import searchImg from '../assets/static/Search-button.png';
import CATEGORIES from '../catCategories';
import '../assets/styles/components/SearchForm.css';

const SearchForm = ({ onChange, onClick }) => {
  return (
    <form>
      <label htmlFor='category'>
        Category:
        <select onChange={onChange} name='category' id='category' className='form-control' placeholder='Category'>
          <option key={0} value=''>Category</option>
          {CATEGORIES.map((option) => <option key={option.id} value={option.id}>{option.name}</option>)}
        </select>
      </label>
      <button onClick={onClick} type='button' className='buttonSearch'>
        <figure>
          <img src={searchImg} alt='Search button' />
        </figure>
      </button>
    </form>
  );
};

export default SearchForm;
