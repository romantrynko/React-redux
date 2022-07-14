import axios from 'axios';
import {
  IS_COMMENTS_LOADING,
  LOAD_COMMENTS,
  COMMENTS_LOADED,
  SHOW_COMMENTS,
  ERROR,
  COMMENTS_SECTION_EXPANDED
} from '../action-types/comments.action-type copy';

export const getComments = (postId) => {
  return (dispatch, getState) => {
    return axios
      .get(`https://gorest.co.in/public/v2/posts/${postId}/comments`)
      .then((response) => {
        const data = [...response.data];

        if (Array.isArray(data)) {
          dispatch(setIsCommentsLoading(true));
          dispatch(setCommentsLoaded(true));
          dispatch({
            type: LOAD_COMMENTS,
            payload: data
          });
        } else {
          dispatch(setIsCommentsLoading(false));
          dispatch(setCommentsLoaded(false));
          dispatch(setError(response.status));
          //   dispatch(setCommentsSectionExpanded(!commentsSectionExpanded));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setIsCommentsLoading = (data) => {
  return {
    type: IS_COMMENTS_LOADING,
    payload: data
  };
};

export const setCommentsLoaded = (data) => {
  return {
    type: COMMENTS_LOADED,
    payload: data
  };
};

export const setShowComments = (data) => {
  return {
    type: SHOW_COMMENTS,
    payload: data
  };
};

export const setError = (data) => {
  return {
    type: ERROR,
    payload: data
  };
};

export const setCommentsSectionExpanded = (data) => {
  return {
    type: COMMENTS_SECTION_EXPANDED,
    payload: data
  };
};
