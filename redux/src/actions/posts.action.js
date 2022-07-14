import axios from 'axios';

export const getPosts = () => {
  return (dispatch, getState) => {
    return axios
      .get(`https://gorest.co.in/public/v2/posts/`)
      .then((response) => {
          const data = [...response.data];
        dispatch({
          type: 'LOAD_POSTS',
          payload: data
        });
      })
      .catch((e) => {
        throw new Error(e)
      });
  };
};
