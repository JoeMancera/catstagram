import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetCats = (API, API_KEY) => {
  const [catsOfTheDay, setCatsOfTheDay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const config = {
    headers: {
      'x-api-key': API_KEY,
    },
  };

  useEffect(async () => {
    try {
      const result = await axios(API, config);
      setCatsOfTheDay(result.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  return { catsOfTheDay, loading, error };
};

export default useGetCats;
