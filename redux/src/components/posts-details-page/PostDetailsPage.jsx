import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { PostCard } from '../post-card/PostCard';
import { useEffect } from 'react';

export default function PostDetailsPage({ posts, routePost }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [post, setPost] = useState([]);

  useEffect(() => {
    loadPost();
  }, []);

  const params = useParams();
  const navigate = useNavigate();

  const { postId } = params;

  const loadPost = async () => {
    setIsLoading(true);

    let response = await fetch(
      `https://gorest.co.in/public-api/posts/${postId}`
    );
    if (response.ok) {
      const result = await response.json();
      const { data } = result;

      if (typeof post === 'object') {
        setIsLoading(false);
        setError('');
        setPost(data);
      }
    } else {
      setIsLoading(false);
      setError(response.status);
    }
  };

  const toPostsList = () => {
    navigate('/posts');
  };

  const toHomePage = () => {
    navigate('/home');
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div>Post Details Page</div>

      {isLoading && post ? (
        <div>Loading post...</div>
      ) : (
        <PostCard post={post} withCommentsLoading />
      )}

      <button
        className="btn btn-outline-dark m-2"
        type="button"
        onClick={toPostsList}
      >
        Posts List
      </button>
      <button
        className="btn btn-outline-dark m-2"
        type="button"
        onClick={toHomePage}
      >
        Homepage
      </button>
      <div style={{height: '100px'}}></div>
    </div>
  );
}
