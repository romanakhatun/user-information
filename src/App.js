import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Users from './components/users/Users';
import Form from './components/form/Form';

function App() {
  return (
    <div>
      <Header></Header>
      <Users />
      <Form />
    </div>
  );
}

export default App;
