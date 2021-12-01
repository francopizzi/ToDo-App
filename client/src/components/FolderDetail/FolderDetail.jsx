import React from 'react';
import { useSelector } from 'react-redux';
import AddTodo from '../AddTodo/AddTodo';
import Todos from '../Todos/Todos';

import style from './FolderDetail.module.css';



function FolderDetail() {
  
  let {folder_id , folder_name} = useSelector ((state)=> state);

  return (
    <div>
      {
        folder_id && folder_id ? <div>
        <h3 className={style.title}>Folder {folder_name}</h3>
        <AddTodo />
        <Todos />
        </div>
        :
        <h3 className={style.title}>Folder</h3>
      }
    </div>
  );
};

export default FolderDetail;