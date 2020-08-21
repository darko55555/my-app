import React, { useState } from "react";
import "./styles/App.css";
import './tailwind.output.css';
import Title from "./components/Title";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    const currentTodoCompleted = newTodos[index].isCompleted
    newTodos[index].isCompleted = !currentTodoCompleted;
    
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="lg:container lg:mx-auto px-4">
    <div clasName="max-w-sm rounded overflow-hidden shadow-lg">
      <div>
      <Title/>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
    </div>
  );
}

export default App;