import React, { useState } from "react";
import "./styles/App.css";
import './tailwind.output.css';
import Title from "./components/Title";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { useEffect } from "react";
import db from "./firebase";
import firebase from "firebase";


function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos")
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot => (
        setTodos(snapshot.docs.map( doc => (
            {id: doc.id, data: doc.data()}
          )
        ))
    ))
  }, [])



  const addTodo = text => {
    db.collection("todos").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      done:false,
      todo:text
    })
  };

  const completeTodo = todoObj => {
    db.collection("todos").doc(todoObj.id).update({done:!todoObj.data.done})
  };

  const removeTodo = id => {
    db.collection("todos").doc(id).delete()
  };

  return (
    <div className="lg:container lg:mx-auto px-4">

    <div className="max-w-sm rounded overflow-hidden shadow-lg">

      <div>
      <Title/>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
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