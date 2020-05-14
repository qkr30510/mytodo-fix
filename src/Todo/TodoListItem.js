import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { TiPencil } from 'react-icons/ti';
import { AiFillAlert } from "react-icons/ai";
import cn from 'classnames';
import './css/TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle, onFix, onEmergency, checkbox }) => {
  const { id, text, checked, isModify } = todo;
   
  return (    
    <div className="TodoListItem">
      <div className="emergency"><AiFillAlert/></div>
      <input className="checkbox" type="checkbox"/>
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="fix" onClick={() => onFix(id,text,isModify)}>
        <TiPencil />
      </div>
      <div className="remove" onClick={() => onRemove(id)} >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
