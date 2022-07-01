import React, { Component } from 'react';

const CN = 'my-posts-menu';

export default class PostsMenuList extends Component {
  render() {
    const { posts = [] } = this.props;
    return (
      <ul className={CN}>
        {posts &&
          posts.map((post) => (
            <li key={post.id} className={`${CN}-option`}>
              {post.title}
            </li>
          ))}
      </ul>
    );
  }
}
