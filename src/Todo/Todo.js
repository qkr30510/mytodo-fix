import React, { useRef, useCallback, useState } from 'react';
import TodoWrap from './TodoWrap';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './css/Todo.scss';

const Todo = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: `할 일 1`,
      checked: false,
      isModify: false,
    },
    {
      id: 2,
      text: `할 일 2`,
      checked: false,
      isModify: false,
    },
  ]);
  const total = todos.length
  console.log(total)
  const fixtodo = { ...todos };
  const [initText, setinitText] = useState([]);
  const [btn, Setbtn] = useState('true');
  const nextId = useRef(3);

  // 등록하기
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
        isModify: false,
      };

      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  // 수정하기

  //수정하기 버튼 클릭
  const onFix = useCallback((id, text, isModify) => {
    setinitText([text,id]);
    //console.log(id);    
    Setbtn(isModify);
  }, []);

  // 수정하기 - 글입력
  const fnInsert = (initText, value, setValue) => {
    const fixtodo = todos;
    const Index = initText[1];
    fixtodo[Index - 1] = {
      ...fixtodo[Index - 1],
      text: value,
    };
    //console.log("id", initText)
    setValue('');
  };

  // 삭제하기    

  const onRemove = useCallback(    
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  // 토글하기
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  // 벨류 체크 및 버튼 변경
  const ModifyClick = (btn, value, onInsert, setValue, id) => {
    //Setbtn(!btn);
    if (!value) {
      alert('값을 입력해주세요');
      Setbtn(btn);
      return false;
    } else {
      Setbtn(!btn);
    }
    todos.id === id ? fnInsert(initText, value, setValue) : onInsert(value, id);
  };



  return (
    <TodoWrap>
      <div className="ToTal">
        <p>총 개수: <span>{total}</span>개</p>      
      </div>
      <TodoList
        todos={todos}
        fixtodo={fixtodo}
        onRemove={onRemove}
        onToggle={onToggle}
        onFix={onFix}
        btn={btn}
      />
      <TodoInsert
        onInsert={onInsert}
        initText={initText}
        btn={btn}
        ModifyClick={ModifyClick}
      />
    </TodoWrap>
  );
};

export default Todo;
