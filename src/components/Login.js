import React, { useState } from "react";
import "../styles/Login.css";
import { auth, persistence, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import firebase from "firebase"

function Login() {
  const [state, dispatch] = useStateValue();
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then( function() {
        return auth.signInWithPopup(provider)
        }
      )
      .then((result) => {
        localStorage.setItem("user", JSON.stringify(result.user)) 
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .then( () => {
        history.push("/taskList")
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__title text-2xl">Hey, welcome to todo list !</div>
      <div className="login__logo">
        <img src="https://image.freepik.com/free-vector/vector-illustration-cosmonaut_1441-11.jpg" />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        onClick={signIn}
      >
        Sign in
      </button>
      <p> By signing you accept that this is a test version and some of your data might be visible to the developer</p>
    </div>
  );
}

export default Login;
