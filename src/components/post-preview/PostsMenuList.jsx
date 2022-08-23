import React from 'react';

const CN = 'my-posts-menu';

export const PostsMenuList = ({ posts, onPostClick }) => {
  const onSelect = (id) => {
    return () => {
      onPostClick && onPostClick(id);
    };
  };

  return (
    <ul className={CN}>
      {posts &&
        posts.map((post) => (
          <li
            onClick={onSelect(post.id)}
            key={post.id}
            className={`${CN}-option`}
          >
            {post.title}
          </li>
        ))}
      <div style={{ height: '70px' }}></div>
    </ul>
  );
};
