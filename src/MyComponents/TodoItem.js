import React from 'react';

export const TodoItem = ({ todo, onDelete }) => {

  // Defensive check: Only render if todo is valid and has a title
  if (!todo || !todo.title) {
    return null;
  }

  return (
    <>
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger my-3" onClick={() => { onDelete(todo) }}>Delete</button>
    </div>
    
     <hr />
     </>
  )
}

export default TodoItem;

