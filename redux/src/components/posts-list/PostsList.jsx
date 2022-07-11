import React, { Component, useEffect, useState } from 'react';
import { accessToken, usersList } from '../../constants';
import { PostCard } from '../post-card/PostCard';

export const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async (id) => {
    setIsLoading(true);

    let response = await fetch(`https://gorest.co.in/public/v2/posts/`);

    if (response.ok) {
      let result = await response.json();

      if (Array.isArray(result)) {
        setPosts(result || []);
        setIsLoading(false);
      }
    } else {
      setError(response.status);
    }
  };

  return (
    <div className="d-flex flex-wrap">
      {isLoading ? (
        <div>Loading posts...</div>
      ) : (
        posts.map((post) => {
          return (
            <PostCard
              post={post}
              key={post.id}
              postDetails
              withCommentsLoading
            />
          );
        })
      )}
    </div>
  );
};
