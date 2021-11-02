import { useEffect, useState } from 'react';
import axios from 'axios';
import dummycats from '../utils/dummyCats';

const useSearchCats = (API, API_KEY, queryObject) => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const config = {
    headers: {
      'x-api-key': API_KEY,
    },
  };

  useEffect(async () => {
    if (API && API_KEY) {
      setLoading(true);
      try {
        const result = await axios.get(`${API}?limit=12&category=${queryObject}`, config);
        setCats(result.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    } else {
      setCats(dummycats);
    }
  }, []);

  return { cats, loading, error };
};

export default useSearchCats;
