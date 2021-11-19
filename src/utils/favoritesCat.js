import axios from 'axios';

const getFavoriteCats = async (API, API_KEY, user) => {
  const config = {
    headers: {
      'x-api-key': API_KEY,
    },
  };

  const response = await axios.get(`${API}${user}`, config);
  return response;
};

const deleteFavoriteCat = async (API, API_KEY, catId) => {
  const config = {
    headers: {
      'x-api-key': API_KEY,
    },
  };

  const response = await axios.delete(`${API}${catId}`, config);
  return response;
};

const addFavoriteCat = async (API, API_KEY, dataFavorite) => {
  const config = {
    headers: {
      'x-api-key': API_KEY,
    },
  };

  const response = await axios.post(API, dataFavorite, config);
  return response;
};

export { getFavoriteCats, deleteFavoriteCat, addFavoriteCat };
