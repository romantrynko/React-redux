import React, { Component } from 'react';
import { PostCard } from '../post-card/PostCard';
import PostsMenuList from './PostsMenuList';

import './PostPreview.scss';

const CN = 'my-post-preview';

export default class PostPreview extends Component {
  //   constructor(props) {
  //     super(props);
  //     const { posts } = props;

  //     this.state = {
  //       selectedPost: posts[0]
  //     };
  //   }

  state = {
    selectedPost: this.props.posts ? this.props.posts[0] : null
  };

  render() {
    const { selectedPost } = this.state;
    const { posts } = this.props;

    return (
      <div>
        <div className={CN}>
          <div className={`${CN}-list`}>
            <PostsMenuList posts={posts} />
          </div>
          <div className={`${CN}-content`}>
            <PostCard post={selectedPost} />
          </div>
        </div>
      </div>
    );
  }
}
