import React from 'react';
import TodoItem from "../MyComponents/TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>

      {props.todos.length === 0 ? (
        <p className="text-center">No Todos to show</p>
      ) : (
        props.todos.map((todo) => {
          return (
            <div key={todo.sno}>
              <TodoItem todo={todo} onDelete={props.onDelete} />
             
            </div>
          )
        })
      )}
    </div>
  )
}

export default Todos;

