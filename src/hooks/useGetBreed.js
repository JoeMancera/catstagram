import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetBreed = (API, API_KEY) => {
  const [breedOfTheDay, setBreedOfTheDay] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {

    const config = {
      headers: {
        'x-api-key': API_KEY,
      },
    };

    async function fetchData() {
      try {
        const result = await axios(API, config);
        setBreedOfTheDay(result.data[Math.floor(Math.random() * result.data.length)]);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }
    fetchData();
  }, [API, API_KEY]);

  return { breedOfTheDay, error };
};

export default useGetBreed;
