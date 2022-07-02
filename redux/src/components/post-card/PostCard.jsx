import React, { Component } from 'react';
import './PostCard.scss';
import avatar from '../../assets/react.png';
import Comments from '../comments/Comments';
import { PureComponent } from 'react';

export class PostCard extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   const { post: currentPost } = this.props;
  //   const { post: nextPost } = nextProps;

  //   return currentPost !== nextPost;
  // }
  state = {
    comments: []
  };

  componentDidMount() {
    const { post } = this.props;

    if (post) {
      const { id } = post;

      this.getComments(id);
    }
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.post.id !== this.props.post.id) {
      this.getComments(this.props.post.id);
    }
  }

  getComments = async (id) => {
    let response = await fetch(
      `https://gorest.co.in/public/v2/posts/${id}/comments`
    );
    if (response.ok) {
      let result = await response.json();
      this.setState({ comments: result });
    } else {
      console.log(response.status);
    }
  };

  render() {
    const {
      post: { title, body },
      hasImage,
      author = '',
      className = ''
    } = this.props;

    const { comments } = this.state;

    console.log('render');

    let randomNum = Math.random() * 1000;
    const _kittyURL = `https://cataas.com/cat/says/hello%20world!?${randomNum}`;

    return (
      <div className={`my-post-card card ${className}`}>
        {hasImage ? (
          <div className="my-post-card-img">
            <img src={_kittyURL} alt="cat" />
          </div>
        ) : (
          <div className="my-post-card-img">
            <img src={avatar} alt="default" />
          </div>
        )}

        <div className="card-body">
          <h4 className="card-title title">{title}</h4>
          <div className="card-text body">{body}</div>
        </div>
        <blockquote className="blockquote-footer">{author}</blockquote>

        <div>
          <Comments comments={comments} />
        </div>
      </div>
    );
  }
}
