import React, { useRef, useCallback, useState, useEffect } from 'react';

import TodoWrap from './TodoWrap';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './css/Todo.scss';

const Todo = (props) => {

  // useEffect(() => {
  //   if (props.location.state === undefined) {
  //     props.history.push('/');
  //   }
  // });
  


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
  const total = todos.length;
  //console.log(total)
  const fixtodo = { ...todos };
  const [initText, setinitText] = useState([]);
  const [btn, Setbtn] = useState('true');
  const nextId = useRef(3);
  const [nowId, setNowId] = useState(null);

  //console.log(todos);

  // 등록하기
  const onInsert = useCallback(
    (text, id) => {
      //console.log('Insertid', id);
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
    Setbtn(isModify);
    setinitText([text]);
    setNowId(id);
    //fnInsert(id)
  }, []);

  // 수정하기 - 글 입력
  const fnInsert = (btn, value) => {
    //console.log("idss",id)
    setTodos(
      // todo=>console.log("todo:",todo.id, "id:",nowId),
      todos.map((todo) =>
        todo.id === nowId ? { ...todo, text: value } : todo,
      ),
    );
  };

  // 삭제하기

  const onRemove = useCallback(
    (id) => {
      const checkRemove = window.confirm('정말로 삭제하시겠습니까?');
      if (checkRemove) {
        setTodos(todos.filter((todo) => todo.id !== id));
      } else {
        return;
      }
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
  const ModifyClick = (btn, value, onInsert, setValue) => {
    console.log(btn);
    //Setbtn(!btn);
    if (!value) {
      alert('값을 입력해주세요');
      Setbtn(btn);
      return false;
    } else {
      Setbtn(!btn);
    }
    //todos.id === id ? fnInsert(id, initText, value, setValue) : onInsert(value, id);
    console.log('mo', value);
    fnInsert(btn, value);
    setinitText('');
  };

  let date = new Date();
  //console.log(date)
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const dd = date.getDay();

  const ddd = () => {
    if (dd === 0) {
      return 'Sunday';
    } else if (dd === 1) {
      return 'Monday';
    } else if (dd === 2) {
      return 'Tuesday';
    } else if (dd === 3) {
      return 'Wednesday';
    } else if (dd === 4) {
      return 'Thursday';
    } else if (dd === 5) {
      return 'Friday';
    } else {
      return 'Saturday';
    }
  };

  return (
    <TodoWrap>
      <div className="ToTalWrap">
        <div className="ToTal" id="Total">
          <div className="date">
            {y}/{m}/{d}
            <p>{ddd()}</p>
          </div>
          <p>
            총 개수: <span>{total}</span>개
          </p>
        </div>
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
