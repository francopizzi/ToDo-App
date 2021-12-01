import React from 'react';

import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import {getTodosById} from '../../store/actions';

import Todo from '../Todo/Todo';


function Todos() {
  let {folder_id, todos, todosById} = useSelector ((state)=> state);
  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(getTodosById(folder_id));
  },[todos , folder_id]); 

  return (
    <div>
       {
         todosById&&
         <div>
           {
             todosById.map ((todo)=> <Todo key= {todo.id} content={todo.content} status={todo.status} id={todo.id} />)
           }
         </div>
       }
    </div>
  );
};

export default Todos;