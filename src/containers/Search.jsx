import React, { useState } from 'react';
import axios from 'axios';
import Section from '../components/Sections';
import CardLoading from '../components/CardLoading';
import SearchForm from '../components/SearchForm';
import CardSearch from '../components/CardSearch';
import dummycats from '../utils/dummyCats';

const API = process.env.REACT_APP_CATS_API_URL;
const API_KEY = process.env.REACT_APP_CATS_API_KEY;

const Search = () => {

  const [category, setCategy] = useState('');
  const [cats, setCats] = useState(dummycats);
  const [error, setError] = useState('');

  const handleChangeCategory = (event) => {
    setCategy(event.target.value);
  };

  const handlerClickSearchCategory = async () => {
    const config = {
      headers: {
        'x-api-key': API_KEY,
      },
    };

    try {
      const result = await axios.get(`${API}/images/search?limit=12&category=${category}`, config);
      console.log(result);
      setCats(result.data);

    } catch (error) {
      setError(error);
    }
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
