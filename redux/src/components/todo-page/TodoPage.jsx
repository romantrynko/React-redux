import React, { useState } from 'react';
import { Dropdown } from '../dropdown/Dropdown';
import UserService from '../../API/UserService';
import { useEffect } from 'react';
import { useFetching } from '../../hooks/useFetching';
import uniqid from 'uniqid';
import { connect, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../../actions/todo.action';
import './TodoPage.scss';
import TodoCard from './todo-card/TodoCard';

function TodoPage({ todos }) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('Select user');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [doneStatus, setDoneStatus] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState('');

  const dispatch = useDispatch();

  const add = (todo) => dispatch(addTodo(todo));
  const remove = (todo) => dispatch(deleteTodo(todo));
  const update = (todo) => dispatch(updateTodo(todo));

  //   const { todos } = props;

  useEffect(() => {
    getUsers();
  }, []);

  const [getUsers] = useFetching(async () => {
    const response = await UserService.getAllUsers();
    const { data } = response;
    const userNames = data.map((user) => user.name);
    setUsers(userNames);
  });

  const onTitleChange = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const onBodyChange = (e) => {
    const body = e.target.value;
    setBody(body);
  };

  const onUserSelect = (name) => {
    setUser(name);
  };

  const onStatusChange = (e) => {
    setDoneStatus(e.target.checked);
  };

  const onAddTodo = () => {
    const newTodo = { id: uniqid(), user, title, body, doneStatus };

    add && add(newTodo);

    resetForm();
  };

  const resetForm = () => {
    setUser('');
    setTitle('');
    setBody('');
    setDoneStatus(false);
    setUser('Select user');
  };

  const onRemoveTodo = (todo) => {
    return () => {
      remove && remove(todo);
    };
  };

  const editTodo = (todo) => {
    const { id, user, title, body, doneStatus } = todo;
    return () => {
      setEditMode(true);
      setId(id);
      setUser(user);
      setTitle(title);
      setBody(body);
      setDoneStatus(doneStatus);
    };
  };

  const onUpdateTodo = () => {
    const editedTodo = { id, user, title, body, doneStatus };

    update && update(editedTodo);

    setEditMode(false);

    resetForm();
  };

  return (
    <div>
      <div className="todo-container form-group w-50 d-flex flex-column align-items-center">
        <input
          className="form-control mb-2"
          type="text"
          value={title}
          onChange={onTitleChange}
          placeholder='Enter "to do" name'
        />
        <textarea
          className="form-control mb-2"
          value={body}
          onChange={onBodyChange}
          placeholder='Enter "to do"'
        />

        <Dropdown
          options={users}
          selectedOption={user}
          onSelect={onUserSelect}
        />
        <label className="m-auto mt-2">
          Done
          <input
            className="m-2"
            type="checkbox"
            onChange={onStatusChange}
            checked={doneStatus}
          />
        </label>

        {!editMode ? (
          <button
            type="button"
            className="btn btn-outline-success w-25 m-auto mt-2"
            onClick={onAddTodo}
            disabled={user !== 'Select user' && title && body ? false : true}
          >
            Add todo
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-outline-info w-25 m-auto mt-2"
            onClick={onUpdateTodo}
            disabled={user !== 'Select user' && title && body ? false : true}
          >
            Update todo
          </button>
        )}
      </div>

      <div className="todo-cards">
        {todos.map((todo, index) => {
          return (
            <TodoCard
              todo={todo}
              key={index}
              removeTodo={onRemoveTodo(todo)}
              editTodo={editTodo(todo)}
            />
          );
        })}
      </div>
      <div style={{ height: '100px' }}></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const {
    todoReducer: { todos }
  } = state;
  return { todos };
};

export default connect(mapStateToProps)(TodoPage);
