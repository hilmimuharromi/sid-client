import React from 'react';
import 'antd/dist/antd.css';
import './App.css'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import MainPage from './pages'


function App() {
  return (
    <>
      <Router>
        <MainPage />
      </Router>
    </>
  )
}



export default App