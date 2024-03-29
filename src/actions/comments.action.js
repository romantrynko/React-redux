import axios from 'axios';
import {
  IS_COMMENTS_LOADING,
  LOAD_COMMENTS,
  COMMENTS_LOADED,
  SHOW_COMMENTS,
  ERROR,
  COMMENTS_SECTION_EXPANDED,
  ON_TOGGLE_COMMENTS
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

export const setIsCommentsLoading = (isLoading) => {
  return {
    type: IS_COMMENTS_LOADING,
    payload:  isLoading 
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

export const onToggleComments = (data) => {
  return {
    type: ON_TOGGLE_COMMENTS,
    payload: data
  };
};
