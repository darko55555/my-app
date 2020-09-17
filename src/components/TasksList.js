import React, { useState } from "react";
import firebase, { auth } from "firebase";
import db from "../firebase";
import { useEffect } from "react";
import { useStateValue } from "../StateProvider"

import Title from "./Title"
import Todo from "./Todo"
import TodoForm from "./TodoForm"
import UserHeader from "./UserHeader"

function TasksList(){

    const[{user}, dispatch] = useStateValue()
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      
    },[]);

    const addTodo = text => {
    db.collection("users")
    .doc(user.email)
    .collection("TestTodoList")
    .add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      done:false,
      todo:text
    })
  };

  const completeTodo = todoObj => {
    db.collection("users")
    .doc(user.email)
    .collection("TestTodoList")
    .doc(todoObj.id).update({done:!todoObj.data.done})
  };

  const removeTodo = id => {
    db.collection("users")
    .doc(user.email)
    .collection("TestTodoList")
    .doc(id).delete()
  };

return(
        <>
        <Title/>
        <UserHeader/>
        <TodoForm addTodo={addTodo} />


        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
    
      </>
    )
}

export default TasksList