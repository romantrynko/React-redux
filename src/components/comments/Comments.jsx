import React from 'react';
import './Comments.scss';

export default function Comments({ comment }) {
  if (!comment) return null;

  const { name, email, body } = comment;

  return (
    <div className="my-comment m-2">
      <div>
        <b>Name: {name}</b>
        <br />
        <i>Email: {email}</i>
        <hr />
        <i>{body}</i>
      </div>
    </div>
  );
}
