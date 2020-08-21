import React from "react"

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        <label class=".text-xl .break-words">{todo.text}</label>
  
        <div class="md:flex-shrink-0">
          <button
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => completeTodo(index)}> {todo.isCompleted ? "Uncomplete" : "Complete"}</button>
          <button 
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    );
  }

  export default Todo