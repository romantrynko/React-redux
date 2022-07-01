import React from 'react';
import './Comments.scss';

export default function Comments({ comments }) {
  return (
    <div className="my-comment">
      {!!comments.length && <h5>Comments:</h5>}

      <ul>
        {comments.map((com, index) => {
          return (
            <li key={index}>
              <b>{com.name}</b>
              <br />
              <i>{com.email}</i>
              <hr />
              <i>{com.body}</i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
