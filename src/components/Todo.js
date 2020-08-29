import React from "react"

function Todo({ todo, completeTodo, removeTodo }) {
    return (
      <div
        className="todo border-2"
        style={{ textDecoration: todo.data.done ? "line-through" : "" }}>
        <label className=".text-xl .break-words">{todo.data.todo}</label>
  
        <div className="md:flex-shrink-0">
          <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => completeTodo(todo)}> {todo.data.done ? "Uncomplete" : "Complete"}</button>
          <button 
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => removeTodo(todo.id)}>x</button>
        </div>
      </div>
    );
  }

  export default Todo