import React from 'react';

export default function TodoCard({ todo, removeTodo, editTodo }) {
  const onRemoveTodo = () => {
    removeTodo();
  };

  const onEditTodo = () => {
    editTodo();
  };

  return (
    <div className="todo-card card p-1 m-4">
      <div className="d-flex justify-content-between">
        <div className="p-1">
          <i>User:</i>
          <br />
          <b>{todo.user}</b>
        </div>
        <div className="todo-card-buttons">
          <button
            className="delete-btn btn btn-outline-danger m-2"
            onClick={onRemoveTodo}
          >
            &#10006;
          </button>
          <button
            className="edit-btn btn btn-outline-secondary m-2"
            onClick={onEditTodo}
          >
            &#9881;
          </button>
        </div>
      </div>
      <hr />
      <div className="todo-card-body card m-1 p-1">
        <h6>Title: {todo.title}</h6>
        <p>{todo.body}</p>
        <i>{todo.doneStatus ? 'done' : 'not done'}</i>
      </div>
    </div>
  );
}
