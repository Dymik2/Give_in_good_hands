import React from 'react';
import {
  HashRouter, Route, Routes
} from 'react-router-dom';
import './scss/main.scss';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return <HashRouter>
    <Routes >
      <Route exact path='/' element={<Home />} />
      <Route exact path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  </HashRouter>;
}

export default App;
