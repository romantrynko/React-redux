import React, { Component, useState } from 'react';
import { PostCard } from '../post-card/PostCard';
import PostsMenuList from './PostsMenuList';

import './PostPreview.scss';

const CN = 'my-post-preview';

export default function PostPreview({ posts }) {
  const [selectedPost, setSelectedPost] = useState(posts ? posts[0].id : null);

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
          <PostCard post={post} className={`${CN}-card`} withCommentsLoading />
        </div>
      </div>
    </div>
  );
}
