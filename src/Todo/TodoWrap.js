import React from "react";
import './css/TodoWrap.scss';

const TodoWrap = ({ children}) => {
    return (        
        <div className="TodoTemplate">
            <div className="app-title">My Todo</div>
            <div className="content">{children}</div>
        </div>
    );
};


export default TodoWrap;
