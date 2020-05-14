import React from 'react';
import TodoListItem from './TodoListItem';
import './css/TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle, onFix, onEmergency, btn, checkbox }) => {

  return (
    <div className="TodoList">
      {btn === false ? <div className="TodoListSub"></div> : <></>}
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onFix={onFix}    
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
