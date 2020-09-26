import React, { useState } from "react";
import firebase from "firebase";
import db from "../firebase";
import { useEffect } from "react";
import { useStateValue } from "../StateProvider"

import Title from "./Title"
import Todo from "./Todo"
import TodoForm from "./TodoForm"
import UserHeader from "./UserHeader"

function TasksList(){

    // const[{user}, dispatch] = useStateValue()
    const user = JSON.parse(localStorage.getItem("user"))
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      db.collection("users")
      .doc(user.email)
      .collection("TestTodoList")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => (
          setTodos(snapshot.docs.map( doc => (
              {id: doc.id, data: doc.data()}
            )
          ))
      ))
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