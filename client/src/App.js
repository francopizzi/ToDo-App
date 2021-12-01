import { Route } from 'react-router-dom';
import React from 'react';

import AddFolder  from './components/AddFolder/AddFolder';
import Folders from './components/Folders/Folders';
import FolderDetail from './components/FolderDetail/FolderDetail';
import EditTodo from './components/EditTodo/EditTodo';

import style from './App.module.css';

function App() {
  
  return (
    <div className={style.grid}>
        <div className={style.item1}>
          <h3 className={style.title}>Folders</h3>
          <Route
          path= "/"
          component={AddFolder}
          />
          <Route
          path= "/"
          component={Folders}
          />
        </div>
        <div className={style.item2}>
          <Route 
          path= "/"
          component={FolderDetail}
          />
        </div>
        <div className={style.item3}>
          <Route
          path='/'
          component={EditTodo}
          />
        </div>
    </div>
  );
}

export default App;
