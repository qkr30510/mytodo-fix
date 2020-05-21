import React from "react";
import './css/TodoWrap.scss';
import LogoutButton from '../LogoutButton';

const TodoWrap = ({ children}) => {
    
    const getId = localStorage.getItem('아이디');

    return (            
        <div className="TodoTemplate">            
            {/* <Link to ='/' onClick={onClick()}> 로그아웃</Link> */}
            <LogoutButton />
            <div className="app-title">"{getId}"이의 Todo</div>
            <div className="content">{children}</div>
            
        </div>
        
    );
};


export default TodoWrap;
