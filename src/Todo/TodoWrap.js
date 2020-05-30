import React from 'react';
import { withRouter } from 'react-router-dom';
import './css/TodoWrap.scss';

const TodoWrap = ({ children, history, location }) => {
  const Logout = () => {
    history.push('/');
  };
  //    console.log(location)

  return (
    <div className="TodoWrap">
      <div className="TodoTemplate">
        <div>
          <button type="button" onClick={Logout}>
            로그아웃
          </button>
        </div>
        <div className="app-title">
          <p>Todo</p>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default withRouter(TodoWrap);
