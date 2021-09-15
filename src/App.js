import React from 'react';
import 'antd/dist/antd.css';
import './App.css'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import MainPage from './pages'
import {store, persistor} from './stores'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router>
        <MainPage />
      </Router>
      </PersistGate>

    </Provider>
  )
}



export default App