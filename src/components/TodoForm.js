import React, { useState } from "react"


function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter an item and press Enter or Add button"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div className="py-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}> Add </button>
        </div>
      </form>
    );
  }

  export default TodoForm