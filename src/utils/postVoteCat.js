import axios from 'axios';

const postVoteCat = async (API, API_KEY, dataVote) => {
  const config = {
    headers: {
      'x-api-key': API_KEY,
    },
  };

  const data = await axios.post(API, dataVote, config);
  return data.data;
};

export default postVoteCat;
