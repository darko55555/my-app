import React, { useState } from "react";
import "./styles/App.css";
import "./styles/Todo.css";
import './tailwind.output.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Title from "./components/Title";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { useEffect } from "react";
import db from "./firebase";
import firebase from "firebase";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider"
import TasksList from "./components/TasksList";

import { actionTypes } from "./reducer"

function App() {
  
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(authUser => {
      console.log("The user >>>", authUser)

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])


  return (
    <Router>
      <div className="app">
      <Switch>
      <Route exact path="/" render={() => (
             <Redirect to="/login"/>
        )}/>
         <Route exact path="/my-app" render={() => (
             <Redirect to="/login"/>
        )}/>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/taskList">
          <TasksList/>
        </Route>
      </Switch>
      </div>
    </Router>
  )
}

export default App;