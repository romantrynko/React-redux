import React from 'react';
import './PostCard.scss';
import avatar from '../../assets/react.png';

export const PostCard = (props) => {
  let randomNum = Math.random();
  const {
    post: { title, body },
    hasImage
  } = props;
  // const { hasImage } = props;
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

      <div class="card-body">
        <h4 class="card-title title">{title}</h4>
        <div class="card-text body">{body}</div>
      </div>
    </div>
  );
};
