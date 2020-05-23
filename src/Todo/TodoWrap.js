import React,{useContext} from "react";
import {withRouter } from 'react-router-dom';
import './css/TodoWrap.scss';
import {store,User} from '../store.js'

const TodoWrap = ({ children, history}) => {
    const globalState = useContext(store,User);
    const {dispatch} = globalState;

    const Logout = () => {
        
        dispatch({type:'LOGOUT'}) //LOGOUT  
        history.push('/')      
     
    }
    console.log(User)

    return (           
        <div className="TodoTemplate">            
            <div>
            <button type='button' onClick={Logout}>로그아웃</button>  
            </div>            
            <div className="app-title">{User.id}이의 Todo</div>
            <div className="content">{children}</div>            
        </div>
        
    );
};


export default withRouter (TodoWrap);
