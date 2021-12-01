import React from 'react';
import { createTodo } from '../../store/actions';
import {useDispatch} from 'react-redux';
import {getTodosById} from '../../store/actions';
import { useSelector } from 'react-redux';

import style from './AddTodo.module.css';


export function AddTodo() {
  const [input, changeInput] = React.useState({
    content:'',
    status: false,
  })
  let {folder_id} = useSelector ((state)=> state);

  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(getTodosById(folder_id));
  },[]); 


 const handleInputChange= function (e){
   changeInput ({
     ...input,
     [e.target.name]:e.target.value
   })
 }

 function handleSubmitChange (e){
    e.preventDefault();
    dispatch(createTodo({content: input.content , status: input.status , id_folder:folder_id}));
    changeInput ({
      ...input,
      content:'',
      status: false,
    })
 }
  
  return (
    <div className={style.div}>
      <form onSubmit= {handleSubmitChange}>
        <input className={style.input} 
        placeholder="New Task" name="content" value={input.content} onChange={handleInputChange}></input>
        <button className={style.btn} type="submit">SUBMIT</button>
      </form>
    </div>
  )
}; 


export default AddTodo;