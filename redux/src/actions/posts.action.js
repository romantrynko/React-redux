import axios from 'axios';
import {
  ERROR_LOADING_POSTS,
  LOAD_POSTS,
  START_POSTS_LOADING,
  STOP_POSTS_LOADING
} from '../action-types/posts.action-type';

export const getPosts = () => {
  return (dispatch, getState) => {
    dispatch(startLoadingPosts());

    return axios
      .get(`https://gorest.co.in/public/v2/posts/`)
      .then((response) => {
        const data = [...response.data];
        dispatch({
          type: LOAD_POSTS,
          payload: data
        });

        dispatch(stopLoadingPosts());
      })
      .catch((error) => {
        dispatch({
          type: ERROR_LOADING_POSTS,
          payload: error
        });
      });
  };
};

export const startLoadingPosts = () => {
  return {
    type: START_POSTS_LOADING
  };
};

export const stopLoadingPosts = () => {
  return {
    type: STOP_POSTS_LOADING
  };
};
