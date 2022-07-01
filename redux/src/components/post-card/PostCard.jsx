import React from 'react';
import './PostCard.scss';
import avatar from '../../assets/react.png';
import Comments from '../comments/Comments';

export const PostCard = (props) => {
  let randomNum = Math.random() * 1000;

  const {
    post: { title, body },
    hasImage,
    author,
    comments = []
  } = props;

  const _kittyURL = `https://cataas.com/cat/says/hello%20world!?${randomNum}`;

  return (
    <div className="my-post-card card">
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
};
