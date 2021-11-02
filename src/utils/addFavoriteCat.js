import axios from 'axios';

const addFavoriteCat = async (API, API_KEY, dataFavorite) => {
  const config = {
    headers: {
      'x-api-key': API_KEY,
    },
  };

  const data = await axios.post(API, dataFavorite, config);
  return data.data;
};

export default addFavoriteCat;
