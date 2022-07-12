import React, { useState } from 'react';
import { Dropdown } from '../dropdown/Dropdown';
import UserService from '../../API/UserService';
import { useEffect } from 'react';
import { useFetching } from '../../hooks/useFetching';
import uniqid from 'uniqid';
import { connect, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../../actions/todo.action';

function TodoPage() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('Select user');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [doneStatus, setDoneStatus] = useState(false);

  const dispatch = useDispatch();
  const add = (todo) => dispatch(addTodo(todo));
  const remove = (todoId) => dispatch(deleteTodo(todoId));
  const edit = () => dispatch(editTodo());

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
    console.log(name);
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

  const onRemoveTodo = (todoId) => {
    remove(todoId);
  };

  return (
    <div className="form-group m-auto w-75 d-flex flex-column p-2">
      <input
        className="form-control mb-2"
        type="text"
        onChange={onTitleChange}
        placeholder='Enter "to do" name'
      />
      <textarea
        className="form-control mb-2"
        value={body}
        onChange={onBodyChange}
        placeholder='Enter "to do"'
      />

      <Dropdown options={users} selectedOption={user} onSelect={onUserSelect} />
      <label className="m-auto">
        Done
        <input
          className="m-2"
          type="checkbox"
          onChange={onStatusChange}
          checked={doneStatus}
        />
      </label>

      <button
        type="button"
        className="btn btn-outline-success w-50 m-auto mt-2"
        onClick={onAddTodo}
      >
        Add
      </button>
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