import React from 'react';
// import Header from 'Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from 'Login/Login';
import Sign from 'Sign/Sign';
import Todo from 'Todo/Todo';
import NotFound from 'NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/sign" component={Sign}></Route>
          <Route path="/todo" component={Todo}></Route>
          <Route path="/notfound" component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
