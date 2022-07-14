import React, { useEffect, useState } from 'react';
import { PostCard } from '../post-card/PostCard';
import PostsMenuList from './PostsMenuList';

import './PostPreview.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts.action';

const CN = 'my-post-preview';

export default function PostPreview() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts());
    }
  }, [posts]);

  const [selectedPost, setSelectedPost] = useState(posts ? posts[2].id : null);

  function onPostSelect(postId) {
    setSelectedPost(postId);
  }
  const post = posts.find((item) => item.id === selectedPost);

  return (
    <div>
      <div className={CN}>
        <div className={`${CN}-list`}>
          <PostsMenuList posts={posts} onPostClick={onPostSelect} />
        </div>
        <div className={`${CN}-content`}>
          <PostCard post={post} className={`${CN}-card`} />
        </div>
      </div>
    </div>
  );
}
