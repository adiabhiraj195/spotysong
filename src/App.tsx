import React from 'react';
import LoginPage from './page/login';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './page/dashboard';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' Component={LoginPage} />
          <Route path='/dashboard' Component={Dashboard} />
        </Routes>
    </div>
  ); 
}

export default App;