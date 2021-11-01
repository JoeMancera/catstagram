import React from 'react';
import useGetCats from '../hooks/useGetCats';
import Section from '../components/Sections';
import CardVote from '../components/CardVote';
import CardBreed from '../components/CardBreed';

const API = process.env.REACT_APP_CATS_API_URL;
const API_KEY = process.env.REACT_APP_CATS_API_KEY;
const NUMBERS_OF_CATS = process.env.REACT_APP_CATS_DAY_NUM;

const Home = () => {
  const { catsOfTheDay, error } = useGetCats(`${API}/images/search?limit=${NUMBERS_OF_CATS}`, API_KEY, NUMBERS_OF_CATS);

  const handlerClickVoteButton = (catId, vote) => {
    const abortController = new AbortController();
    const dataVote = {
      'image_id': `${catId}`,
      'sub_id': `${localStorage.getItem('catstagram_user')}`,
      'value': vote,
    };
    fetch(`${API}/votes`, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify(dataVote),
    })
      .then((response) => response.json())
      .then((data) => (vote && data.message === 'SUCCESS' ? alert(`${data.message}: You like this cat`) : alert(`${data.message}: You dislike this cat`)))
      .catch((err) => {
        console.log(err);
        setError(err);
        abortController.abort();
      });
  };

  const handlerClickFavoriteButton = (catId) => {
    const abortController = new AbortController();
    const dataVote = {
      'image_id': `${catId}`,
      'sub_id': `${localStorage.getItem('catstagram_user')}`,
    };
    fetch(`${API}/favourites`, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify(dataVote),
    })
      .then((response) => response.json())
      .then((data) => (data.message === 'SUCCESS' ? alert(`${data.message}: You adore this cat`) : alert(`${data.message}: Mhh!`)))
      .catch((err) => {
        console.log(err);
        setError(err);
        abortController.abort();
      });
  };

  return (
    <>
      <Section key={0} title='Cats of the day'>
        <CardVote onClickVote={handlerClickVoteButton} onClickFavorite={handlerClickFavoriteButton} catsOfTheDay={catsOfTheDay} error={error} />
      </Section>
      <Section key={1} title='Breed of the day'>
        <CardBreed key={2} />
      </Section>
    </>
  );
};

export default Home;
