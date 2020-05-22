import React from "react";
import './css/TodoWrap.scss';
import { Link,Redirect } from "react-router-dom";

const TodoWrap = ({ children}) => {
    const getId = localStorage.getItem('아이디');
    const isLogin = (localStorage.getItem("isLogin")==='true');
    
    const handleClick=()=>{
    localStorage.setItem('isLogin',false); 
}

    return (           
        <div className="TodoTemplate">            
            {/* <Link to={{pathname:'/login', state:{isLogin : false}}}>로그아웃</Link>   
                      */}
                                {!isLogin &&<Redirect to="/login"/>}

            <div>
            <button type='button' onClick={handleClick}  >로그아웃</button>    
            </div>
            
                {/* <Link to="/"> */}
                    
                    {/* </Link> */}
            <div className="app-title">"{getId}"이의 Todo</div>
            <div className="content">{children}</div>            
        </div>
        
    );
};


export default TodoWrap;
