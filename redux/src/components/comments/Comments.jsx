import React from 'react';
import './Comments.scss';

export default function Comments({ comment }) {
  if (!comment) return null;

  const { name, email, body } = comment;

  return (
    <div className="my-comment">
      return (
      <div>
        <b>{name}</b>
        <br />
        <i>{email}</i>
        <hr />
        <i>{body}</i>
      </div>
      );
    </div>
  );
}
