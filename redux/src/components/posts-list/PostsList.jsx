import React, { useEffect, useState } from 'react';
import { PostCard } from '../post-card/PostCard';
import { connect, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts.action';

const PostsList = ({ posts }) => {
  const dispatch = useDispatch();
  // const loadPosts = () => dispatch(getPosts());

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    dispatch(getPosts());
  }, []);

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

const mapStateToProps = (state) => {
  const {
    postsReducer: { posts }
  } = state;
  return { posts };
};

export default connect(mapStateToProps)(PostsList);
