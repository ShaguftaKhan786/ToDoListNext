import React from 'react';

const TodoItem = ({ todo, onComplete, onDelete }) => {
  return (
    <div className='todo'>
      {/* <input type="checkbox" checked={todo.completed} onChange={onComplete} /> */}
      <span>{todo.text}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
