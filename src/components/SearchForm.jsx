import React from 'react';
import CATEGORIES from '../utils/catCategories';
import BREEDS from '../utils/breedsList';
import '../assets/styles/components/SearchForm.css';

const SearchForm = ({ onChange, onClick, isLoading }) => {
  return (
    <form>
      <div className='search-form-container'>
        <label htmlFor='category'>
          Category:
          <select onChange={onChange} name='category' id='category' className='form-control' placeholder='Category'>
            <option key={0} value=''>Category</option>
            {CATEGORIES.map((option) => <option key={option.id} value={option.id}>{option.name}</option>)}
          </select>
        </label>
        <label htmlFor='type_img'>
          Type:
          <select onChange={onChange} name='type_img' id='type_img' className='form-control' placeholder='Category'>
            <option key={0} value=''>type</option>
            <option key={1} value='gif'>Animated</option>
            <option key={2} value='jpg,png'>Static</option>
          </select>
        </label>
        <label htmlFor='breed'>
          Breed:
          <select onChange={onChange} name='breed' id='breed' className='form-control' placeholder='Category'>
            <option key={0} value=''>Breed</option>
            {BREEDS.map((option) => <option key={option.id} value={option.id}>{option.name}</option>)}
          </select>
        </label>
        <button onClick={onClick} type='button' className='btn btn-primary'>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
