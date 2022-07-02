import React, { Component } from 'react';
import './PostCard.scss';
import avatar from '../../assets/react.png';
import Comments from '../comments/Comments';
import { PureComponent } from 'react';

export class PostCard extends PureComponent {
  state = {
    comments: [],
    isCommentsLoading: false,
    commentsLoaded: false,
    showComments: false,
    error: ''
  };

  componentDidMount() {
    const { post, withCommentsLoading } = this.props;

    if (post && withCommentsLoading) {
      const { id } = post;

      id && this.getComments(id);
    }
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (
      prevProps.post.id !== this.props.post.id &&
      this.props.withCommentsLoading
    ) {
      this.getComments(this.props.post.id);
    }
  }

  getComments = async (id) => {
    this.setState({
      isCommentsLoading: true,
      showComments: true
    });

    let response = await fetch(
      `https://gorest.co.in/public/v2/posts/${id}/comments`
    );
    if (response.ok) {
      let result = await response.json();

      if (Array.isArray(result)) {
        this.setState({
          isCommentsLoading: false,
          commentsLoaded: true,
          error: '',
          comments: result
        });
      }
    } else {
      this.setState({
        isCommentsLoading: false,
        commentsLoaded: false,
        error: response.status,
        commentsSectionExpanded: false
      });
    }
  };

  onToggleComments = () => {
    this.setState({ showComments: !this.state.showComments });
  };

  render() {
    const {
      post: { title, body },
      hasImage,
      author = '',
      className = ''
    } = this.props;

    const { comments, showComments, error, isCommentsLoading, commentsLoaded } =
      this.state;

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

        {/* <div>
          <Comments comments={comments} />
        </div> */}

        <label className="btn btn-link" onClick={this.onToggleComments}>
          {showComments ? 'Hide comments' : 'Show comments'}

          {!!error && <div>{error}</div>}
          <br />

          {showComments && <label>Comments:</label>}

          {showComments && isCommentsLoading && <div>Loading comments...</div>}

          {showComments &&
            !isCommentsLoading &&
            commentsLoaded &&
            !comments.length && <div>No comments for this post yet</div>}

          {showComments &&
            !isCommentsLoading &&
            commentsLoaded &&
            !!comments.length &&
            comments.map((comment) => (
              <Comments comment={comment} key={comment.id} />
            ))}
        </label>
      </div>
    );
  }
}
