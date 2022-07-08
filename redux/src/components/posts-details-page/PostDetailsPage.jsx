import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { PostCard } from '../post-card/PostCard';

export default function PostDetailsPage({ posts, routePost }) {
  const params = useParams();
  const navigate = useNavigate();

  const { postId } = params;

  const post = posts.find((post) => post.id === postId);
  console.log(post);

  const toPostsList = () => {
    navigate('/posts');
  };

  const toHomePage = () => {
    navigate('/home');
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <PostCard post={post} />
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
    </div>
  );
}
