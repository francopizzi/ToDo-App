import React, { useState } from 'react';

import {changeStatus , editTodo} from '../../store/actions';
import { useDispatch} from 'react-redux';

import style from './Todo.module.css';

function Todo({content , status, id}) {
 
    const [edit , changeEdit] = useState({
      status: false,
      id: 0,
    });  
    
    const [check , changeCheck] = React.useState(true)

    const dispatch = useDispatch();

    function handlerStatus (e) {
      changeCheck(!check)
      dispatch(changeStatus(check , e.target.name))
    }
    
    function handlerEdit (e) {
        changeEdit({status: !edit.status , id: e.target.value});
        dispatch(editTodo (id , content));
    }

   

  return (
    <div className={style.div}>
      <input checked={check} className={style.check} type="checkbox" name={id} onChange={handlerStatus}/>
      <h1 className={style.title}>{content}</h1>
      <button className={style.btn} name="edit" value={id} onClick={handlerEdit}>Edit</button>
    </div>
  );
};

export default Todo;