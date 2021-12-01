import React from 'react';
import { createFolder } from '../../store/actions';
import {useDispatch} from 'react-redux';

import style from './AddFolder.module.css';


export function AddFolder() {
  const [input, changeInput] = React.useState({
    name:'',
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
    dispatch(createFolder(input));
    changeInput({
        name:'',
      })
 }
  
  return (
    <div className={style.div}>
      <form onSubmit= {handleSubmitChange}>
        <input 
          className={style.input} 
          placeholder="New folder" 
          name="name" 
          value={input.name} 
          onChange={handleInputChange}
        ></input>
        <button className={style.btn} type="submit">Add</button>
      </form>
    </div>
  )
}; 


export default AddFolder;