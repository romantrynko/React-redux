import React from 'react';
import './Comments.scss';

export default function Comments(props) {
  const { comment } = props;

  if (!comment) return null;

  const { name, email, body } = comment;

  return (
    <div className="my-comment">
      <b>{name}</b>
      <br />
      <i>{email}</i>
      <hr />
      <i>{body}</i>
    </div>
  );
}
