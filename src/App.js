import React  from 'react';
import Header from 'Header';
import Routes from 'Routes';
import Sign from './Sign/Sign'
import Login from './Login/Login'
import Todo from './Todo/Todo';

const App = () => {

  return (
    <>
      <Routes/>
      <Login/> 
    </>
  )
}

export default App;
