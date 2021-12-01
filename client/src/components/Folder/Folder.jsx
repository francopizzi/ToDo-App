import React from 'react';

import {deleteFolder , changeFolderId} from '../../store/actions';
import { useDispatch} from 'react-redux';
import style from './Folder.module.css';



function Folder({name, id}) {

    const dispatch = useDispatch();
    function handleItems (e) {
        dispatch(changeFolderId(e.target.value , e.target.name));
    }
    
    function handleRemove (e) {
        dispatch(deleteFolder(e.target.value));
        dispatch(changeFolderId(0,''));
    }

    return (
        <div className={style.div}>
            <h1 className={style.title}>{name}</h1>
            <button 
                className={style.btn} 
                name={name} 
                value={id} 
                onClick={handleItems}>View items</button>
            <button className={style.btn} value={id} name="remove" onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default Folder;