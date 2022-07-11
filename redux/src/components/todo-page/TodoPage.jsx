import React, { useState } from 'react';

export default function TodoPage() {
  const [users, setUsers] = useState('');
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [doneStatus, setDoneStatus] = useState(false);

  const onBodyChange = (e) => {
    const body = e.target.value;
    setBody(body);
  };

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
    <div>
      <form>
        <input type="text" onChange={this.onTitleChange} />
        <textarea value={body} onChange={this.onBodyChange} />
        <select
          value={user}
          onChange={this.onUserSelect}
          className="btn btn-outline-secondary dropdown-toggle m-2"
        >
          {users.map((item, index) => {
            const fullName = `${item.first_name} ${item.last_name}`;
            return (
              <option key={index} value={fullName}>
                {fullName}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}
