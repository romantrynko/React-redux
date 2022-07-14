import React, { PureComponent, useCallback } from 'react';
import './PostCard.scss';
import avatar from '../../assets/react.png';
import Comments from '../comments/Comments';
import { useState } from 'react';
import { useEffect } from 'react';
import usePrevious from '../../hooks/usePrevious';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const PostCard = ({
  post,
  withCommentsLoading = false,
  hasImage = null,
  author = null,
  className = '',
  postDetails = false
}) => {
  const location = useLocation();
  const { pathname } = location;

  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(false);
  const [commentsLoaded, setCommentsLoaded] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [error, setError] = useState('');
  const [commentsSectionExpanded, setCommentsSectionExpanded] = useState(false);

  const getComments = useCallback(async (id) => {
    setIsCommentsLoading(true);
    let response = await axios.get(
      `https://gorest.co.in/public/v2/posts/${id}/comments`
    );

    if (response.ok) {
      let result = await response.json();

      if (Array.isArray(result)) {
        setIsCommentsLoading(true);
        setCommentsLoaded(true);
        setError('');
        setComments(result || []);
      }
    } else {
      setIsCommentsLoading(false);
      setCommentsLoaded(false);
      setError(response.status);
      setCommentsSectionExpanded(!commentsSectionExpanded);
    }
  }, []);

  useEffect(() => {
    if (post && withCommentsLoading) {
      const { id } = post;

      id && getComments(id);
    }
  }, []);

  useEffect(() => {
    if (withCommentsLoading) {
      getComments(post.id);
    }
  }, [
    withCommentsLoading,
    post.id,
    getComments
  ]);

  const onToggleComments = () => {
    setShowComments(!showComments);
  };

  const { title, body, id } = post;

  let randomNum = Math.random() * 1000;
  const _kittyURL = `https://cataas.com/cat/says/hello%20world!?${randomNum}`;

  return (
    <div className={`my-post-card card ${className}`}>
      {hasImage ? (
        <div className="my-post-card-img">
          <img src={_kittyURL} alt="cat" />
        </div>
      ) : (
        <div className="my-post-card-img">
          <img src={avatar} alt="default" />
        </div>
      )}

      <div className="card-body">
        <h4 className="card-title title">{title}</h4>
        <div className="card-text body">{body}</div>
      </div>
      {author && <blockquote className="blockquote-footer">{author}</blockquote>}

      {!!error && <div>{error}</div>}
      <br />

      {postDetails && (
        <Link
          className="btn btn-outline-dark w-50 m-auto mb-2"
          to={`${pathname}/${id}`}
        >
          Show details
        </Link>
      )}

      {withCommentsLoading && (
        <label
          className="btn btn-outline-secondary m-auto mb-2 w-50"
          onClick={onToggleComments}
        >
          {showComments ? 'Hide comments' : 'Show comments'}
        </label>
      )}

      {withCommentsLoading && showComments && (
        <label className="text-center">Comments:</label>
      )}

      {showComments &&
        // !isCommentsLoading &&
        // commentsLoaded &&
        !comments.length && (
          <div className="m-2">No comments for this post yet</div>
        )}
      {!comments.length && showComments && isCommentsLoading && !commentsLoaded && (
        <div>Loading comments...</div>
      )}

      {showComments &&
        isCommentsLoading &&
        commentsLoaded &&
        !!comments.length &&
        comments.map((comment) => (
          <Comments comment={comment} key={comment.id} />
        ))}
    </div>
  );
};
