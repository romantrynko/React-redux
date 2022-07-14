import React, { useEffect, useState } from 'react';
import { PostCard } from '../post-card/PostCard';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts.action';

export const PostsList = () => {
  const dispatch = useDispatch();

  const { posts, isLoading } = useSelector((state) => state.postsReducer);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts());
      return;
    }
  }, [posts]);

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

// const mapStateToProps = (state) => {
//   const {
//     postsReducer: { posts, isLoading }
//   } = state;

//   return { posts, isLoading };
// };

// export default connect(mapStateToProps)(PostsList);
