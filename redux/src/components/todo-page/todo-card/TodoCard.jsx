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
          <br />
          <b>{todo.user}</b>
        </div>
        <div className="todo-card-buttons">
          <div className="delete-btn" onClick={onRemoveTodo}>
            &#10006;
          </div>
          <div className="edit-btn" onClick={onEditTodo}>
            &#9998;
          </div>
        </div>
      </div>
     
      <div className="todo-card-body card m-1 p-1">
        <h6>Title: "{todo.title}"</h6>
        <p>{todo.body}</p>
        <hr />
        <i className='text-center'>{todo.doneStatus ? 'done' : 'not done'}</i>
      </div>
    </div>
  );
}
