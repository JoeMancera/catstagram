import React, { useState } from 'react';
import Section from '../components/Sections';
import CardLoading from '../components/CardLoading';
import SearchForm from '../components/SearchForm';
import CardSearch from '../components/CardSearch';
import useSearchCats from '../hooks/useSearchCats';

const API = process.env.REACT_APP_CATS_API_URL;
const API_KEY = process.env.REACT_APP_CATS_API_KEY;

const Search = () => {

  const [category, setCategy] = useState('');
  const { cats, error } = useSearchCats();

  const handleChangeCategory = (event) => {
    setCategy(event.target.value);
  };

  const handlerClickSearchCategory = () => {
    const { cats, error } = useSearchCats(`${API}/images/search`, API_KEY, category);
    setCats(cats);
    setError(error);
  };

  return (
    <>
      <Section key={0} title='Search your Cat'>
        <SearchForm onChange={handleChangeCategory} onClick={handlerClickSearchCategory} />
        <div className='cat-result-search'>
          {cats.length > 0 ? cats.map((cat) => <CardSearch cat={cat} key={cat.id} />) : <CardLoading error={error} source='search' /> }
        </div>
      </Section>
    </>
  );
};

export default Search;
