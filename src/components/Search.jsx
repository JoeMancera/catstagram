import React, { useState } from 'react';
import Section from './Sections';
import SearchForm from './SearchForm';
import CardSearch from './CardSearch';

const dummycats = [
  {
    'breeds': [],
    'height': 1228,
    'id': '1uf',
    'url': 'https://cdn2.thecatapi.com/images/1uf.jpg',
    'width': 1818,
  },
  {
    'breeds': [],
    'categories': [
      {
        'id': 14,
        'name': 'sinks',
      },
    ],
    'height': 375,
    'id': '8or',
    'url': 'https://cdn2.thecatapi.com/images/8or.jpg',
    'width': 500,
  },
  {
    'breeds': [],
    'height': 1296,
    'id': '9rf',
    'url': 'https://cdn2.thecatapi.com/images/9rf.jpg',
    'width': 968,
  },
  {
    'breeds': [],
    'height': 615,
    'id': 'c94',
    'url': 'https://cdn2.thecatapi.com/images/c94.jpg',
    'width': 900,
  },
  {
    'breeds': [],
    'height': 640,
    'id': 'dsg',
    'url': 'https://cdn2.thecatapi.com/images/dsg.jpg',
    'width': 346,
  },
  {
    'breeds': [],
    'categories': [
      {
        'id': 15,
        'name': 'clothes',
      },
    ],
    'height': 720,
    'id': 'MTc5OTM1NA',
    'url': 'https://cdn2.thecatapi.com/images/MTc5OTM1NA.jpg',
    'width': 960,
  },
  {
    'breeds': [],
    'height': 700,
    'id': 'ZndLxltcN',
    'url': 'https://cdn2.thecatapi.com/images/ZndLxltcN.jpg',
    'width': 1000,
  },
  {
    'breeds': [],
    'height': 2544,
    'id': 'xIICfnlNm',
    'url': 'https://cdn2.thecatapi.com/images/xIICfnlNm.jpg',
    'width': 1696,
  },
  {
    'breeds': [],
    'height': 1280,
    'id': 'oQeMa7ft-',
    'url': 'https://cdn2.thecatapi.com/images/oQeMa7ft-.jpg',
    'width': 852,
  },
  {
    'breed_ids': null,
    'breeds': [],
    'created_at': '2020-04-22T10:33:34.000Z',
    'height': 307,
    'id': 'Ll3zhmFV8',
    'original_filename': 'Cat1.png',
    'sub_id': null,
    'url': 'https://cdn2.thecatapi.com/images/Ll3zhmFV8.png',
    'width': 289,
  },
  {
    'breed_ids': null,
    'breeds': [],
    'created_at': '2020-07-24T08:18:54.000Z',
    'height': 951,
    'id': 'JUvbOgsui',
    'original_filename': 'cat1.jpg',
    'sub_id': 'thao1234',
    'url': 'https://cdn2.thecatapi.com/images/JUvbOgsui.jpg',
    'width': 1265,
  },
  {
    'breed_ids': null,
    'breeds': [],
    'created_at': '2021-04-24T22:30:42.000Z',
    'height': 4000,
    'id': '5_spUk8pb',
    'original_filename': 'tina-kuper-d0pAGt-IWOY-unsplash.jpeg',
    'sub_id': null,
    'url': 'https://cdn2.thecatapi.com/images/5_spUk8pb.jpg',
    'width': 6000,
  },
];

const API = process.env.REACT_APP_CATS_API_URL;
const API_KEY = process.env.REACT_APP_CATS_API_KEY;

const Search = () => {

  const [category, setCategy] = useState('');
  const [cats, setCats] = useState(dummycats);

  const handleChangeCategory = (event) => {
    setCategy(event.target.value);
  };

  const handlerClickSearchCategory = () => {
    fetch(`${API}/images/search?limit=12&category_ids=${category}`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((err) => console.log('Error:', err));
  };

  return (
    <>
      <Section key={0} title='Search your Cat'>
        <SearchForm onChange={handleChangeCategory} onClick={handlerClickSearchCategory} />
        <div className='cat-result-search'>
          {cats.length > 0 ? cats.map((cat) => <CardSearch cat={cat} key={cat.id} />) : null }
        </div>
      </Section>
    </>
  );
};

export default Search;
