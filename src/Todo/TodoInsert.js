import React, { useState, useCallback, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import './css/TodoInsert.scss';

const TodoInsert = ({ onInsert, initText, btn, ModifyClick, id }) => {
  const [value, setValue] = useState('');
  // console.log("btn상태",btn)
  //console.log(initText, id)
  //const [initText , setinitText] = useState('');

  useEffect(() => {
    setValue(initText);
  }, [initText]);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    if (!value) {
      alert('값을 입력해주세요');
      return false;
    }
    onInsert(value);
    setValue(''); // value 초기화
  }, [onInsert, value]);

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (e.key === 'Enter' && e.shiftKey) {
        return;
      }
      onClick();
      e.preventDefault();
    }
  };

  return (
    <form className="TodoInsert">
      <input
        className="write"
        onChange={onChange}
        value={value}
        placeholder="할 일을 입력하세요"
        onKeyPress={onKeyPress}
      ></input>
      {btn === false ? (
        <button
          type="button"
          onClick={() => ModifyClick(btn, value, onInsert, setValue, id)}
        >
          수정
        </button>
      ) : (
        <button type="button" onClick={onClick}>
          <MdAdd />
        </button>
      )}
    </form>
  );
};

export default TodoInsert;
