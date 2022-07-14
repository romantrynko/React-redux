import React, { useEffect, useState } from 'react';
import { PostCard } from '../post-card/PostCard';
import { PostsMenuList } from './PostsMenuList';

import './PostPreview.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts.action';

const CN = 'my-post-preview';

export const PostPreview = () => {
  const dispatch = useDispatch();

  const { posts, isLoading } = useSelector((state) => state.postsReducer);

  useEffect(() => {
    if (!posts) {
      dispatch(getPosts());
      return;
    }
  }, [posts, dispatch]);

  const [selectedPost, setSelectedPost] = useState(posts ? posts[2].id : null);

  const onPostSelect = (postId) => {
    setSelectedPost(postId);
  };

  const post = posts.find((item) => item.id === selectedPost);

  if (!post) {
    return <div>No posts yet</div>;
  }
  return (
    <div>
      {isLoading ? (
        <div>Loading posts...</div>
      ) : (
        <div className={CN}>
          <div className={`${CN}-list`}>
            <PostsMenuList posts={posts} onPostClick={onPostSelect} />
          </div>
          <div className={`${CN}-content`}>
            <PostCard post={post} className={`${CN}-card`} />
          </div>
        </div>
      )}
    </div>
  );
};
