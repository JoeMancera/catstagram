import React, { useState } from 'react';
import axios from 'axios';
import Section from '../components/Sections';
import CardLoading from '../components/CardLoading';
import SearchForm from '../components/SearchForm';
import CardSearch from '../components/CardSearch';
import dummycats from '../utils/dummyCats';
import searchImg from '../assets/static/Search-button.png';

const API = process.env.REACT_APP_CATS_API_URL;
const API_KEY = process.env.REACT_APP_CATS_API_KEY;

const Search = () => {

  const [category, setCategory] = useState('');
  const [cats, setCats] = useState(dummycats);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handlerClickSearchCategory = async () => {
    setIsLoading(true);
    const config = {
      headers: {
        'x-api-key': API_KEY,
      },
    };

    let url = `${API}/images/search?limit=12&category=${category}`;

    const typeImg = document.getElementById('type_img').value;
    const breed = document.getElementById('breed').value;

    url += typeImg ? `&mime_types=${typeImg}` : '';
    url += breed ? `&breed_id=${breed}` : '';

    try {
      const result = await axios.get(url, config);
      console.log(result);
      setCats(result.data);
      setIsFormVisible(!isFormVisible);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Section key={0} title='Search your Cat'>
        <button type='button' className='buttonSearch' onClick={handleToggleForm}>
          <figure>
            <img src={searchImg} alt='Search button' />
          </figure>
        </button>
        {isFormVisible && <SearchForm isLoading={isLoading} onChange={handleChangeCategory} onClick={handlerClickSearchCategory} />}
        <div className='cat-result-search'>
          {cats.length > 0 ? cats.map((cat) => <CardSearch cat={cat} key={cat.id} />) : <CardLoading error={error} source='search' /> }
        </div>
      </Section>
    </>
  );
};

export default Search;
