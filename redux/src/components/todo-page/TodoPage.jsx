import React, { useState } from 'react';
import { Dropdown } from '../dropdown/Dropdown';
import UserService from '../../API/UserService';
import { useEffect } from 'react';
import { useFetching } from '../../hooks/useFetching';

export default function TodoPage() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [doneStatus, setDoneStatus] = useState(false);

  const onBodyChange = (e) => {
    const body = e.target.value;
    setBody(body);
  };

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

  const onUserSelect = (userName) => {
    return () => {
      setUser(userName);
    };
  };

  return (
    <form className="form-group m-auto w-50 d-flex flex-column p-2">
      <input
        className="form-control mb-2"
        type="text"
        onChange={onTitleChange}
      />
      <textarea
        className="form-control mb-2"
        value={body}
        onChange={onBodyChange}
      />

      <Dropdown options={users} selectedOption={user} onSelect={onUserSelect} />

      <button
        type="submit"
        className="btn btn-outline-success w-50 m-auto mt-2"
      >
        Submit
      </button>
    </form>
  );
}
