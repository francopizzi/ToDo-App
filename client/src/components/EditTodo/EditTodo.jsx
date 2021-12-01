import React from 'react';
import {editTodo , changeContent} from '../../store/actions';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';

import style from './EditTodo.module.css';

function EditTodo() {
    let {todo_id , todo_content , edit_status} = useSelector ((state)=> state);
  
    const [input, changeInput] = React.useState({
      content:'',
    })
    
    const dispatch = useDispatch();

    const handleInputChange= function (e){
      changeInput ({
        ...input,
        [e.target.name]:e.target.value
      })
    }

    function handleSubmitChange (e){
      e.preventDefault();
      dispatch(changeContent(input.content, todo_id));
      changeInput ({
        ...input,
        content:''
      })
      dispatch(editTodo({id:0 , content:''})) 
   }

   function handlerCancel () {
    dispatch(editTodo({id:0 , content:''})) 
   }

  return (
    <div>
      { edit_status ?
        <div>
          <h1 className={style.title}>Editing Task "{todo_content}"</h1>
          <div className={style.div}> 
            <form onSubmit= {handleSubmitChange}>
              <input className={style.input} 
              placeholder="Edit Task" name="content" value={input.content}onChange={handleInputChange}></input>
                <button className={`${style.btn} ${style.save}`} type="submit">Save</button>
            </form>
            <button className={`${style.btn} ${style.cancel}`} 
              type="button" onClick={handlerCancel}>Cancel</button>
          </div>
        </div> 
        :<h1 className={style.title}>Editing Task </h1> 
      }
      

    </div>
  );
};

export default EditTodo;