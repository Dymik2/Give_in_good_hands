import React from 'react';
import {
  HashRouter, Route, Routes, useNavigate
} from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
import './scss/main.scss';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import LoggedOut from "./components/LoggedOut";
import FormGiveStuff from "./components/FormGiveStuff";
import { useSelector } from 'react-redux';



function App() {

  const { app } = useSelector(state => state);
  const { log } = useSelector(state => state);
  const history = useNavigate()

  const register = async (credentialns) => {
    console.log(credentialns)
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        credentialns.email,
        credentialns.password
      );
      console.log(user)
      if (user) {
        await signOut(auth);
        history("/login")
      }
      //console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  const login = async () => {
    try {
      const userLog = await signInWithEmailAndPassword(
        auth,
        log[0].email,
        log[0].password
      );
      //console.log(userLog);
    } catch (error) {
      console.log(error.message);
    }
  };

  return <>
    <Routes >
      <Route exact path='/' element={<Home />} />
      <Route exact path='/login' element={<Login loginUser={login} />} />
      <Route path='/register' element={<Register registerUser={register} />} />
      <Route path='/loggedout' element={<LoggedOut />} />
      <Route path='/formgivestuff' element={<FormGiveStuff />} />
    </Routes>
  </>;
}

export default App;
