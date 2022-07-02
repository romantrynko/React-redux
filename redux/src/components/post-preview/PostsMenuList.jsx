import React, { Component } from 'react';

const CN = 'my-posts-menu';

export default class PostsMenuList extends Component {
  onSelect = (id) => {
    const { onPostClick } = this.props;

    return () => {
      onPostClick && onPostClick(id);
    };
  };

  render() {
    const { posts = [] } = this.props;
    return (
      <ul className={CN}>
        {posts &&
          posts.map((post) => (
            <li
              onClick={this.onSelect(post.id)}
              key={post.id}
              className={`${CN}-option`}
            >
              {post.title}
            </li>
          ))}
        <div style={{height: '70px'}}></div>
      </ul>
    );
  }
}
