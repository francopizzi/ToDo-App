import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import {getFolders} from '../../store/actions';
import Folder from '../Folder/Folder';



function Folders() {
  let {folders , statusDelete} = useSelector ((state)=> state);
  
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getFolders());
  },[statusDelete]); 

  return (
    <div>
       {
         folders? folders.map ((folder)=> <Folder key= {folder.id} name={folder.name} id={folder.id} />)
         :
         <p>Loading...</p>
       }
    </div>
  );
};

export default Folders;