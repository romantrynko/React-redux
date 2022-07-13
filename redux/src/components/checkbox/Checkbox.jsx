import React from 'react';

export default function Checkbox({ onStatusChange, doneStatus }) {
  return (
    <label className="check-done-label m-auto mt-2">
      Done
      <input
        className="check-done m-2"
        type="checkbox"
        onChange={onStatusChange}
        checked={doneStatus}
      />
    </label>
  );
}
