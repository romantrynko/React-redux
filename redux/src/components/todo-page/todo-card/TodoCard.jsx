import React from 'react';

export default function TodoCard({ todo, removeTodo }) {
  const onRemoveTodo = () => {
    removeTodo();
  };

  return (
    <div className="todo-card card p-1 m-1">
      <i>User:</i>
      <b>{todo.user}</b>
      <hr />
      <div className="todo-card-body card m-1 p-1">
        <h6>Title: {todo.title}</h6>
        <p>{todo.body}</p>
        <i>{todo.doneStatus ? 'done' : 'not done'}</i>
      </div>
      <button className="btn btn-danger m-2" onClick={onRemoveTodo}>
        Remove
      </button>
    </div>
  );
}
