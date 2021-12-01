export const CREATE_TODO = "CREATE_TODO";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const CHANGE_CONTENT = "CHANGE_CONTENT";
export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_BY_ID = "GET_TODOS_BY_ID";

export const CREATE_FOLDER = "CREATE_FOLDER";
export const GET_FOLDERS = "GET_FOLDERS";
export const DELETE_FOLDER = "DELETE_FOLDER";
export const CHANGE_FOLDER_ID = "CHANGE_FOLDER_ID";
export const EDIT_TODO = "EDIT_TODO";

// folder
export function editTodo ( id , content) {
        return function (dispatch){
                dispatch({ type: EDIT_TODO, payload: { id, content}}); 
        }
}


export function changeFolderId (id , name) {
        return function (dispatch){
                dispatch({ type: CHANGE_FOLDER_ID, payload: {id , name}}); 
        }
}

export function deleteFolder (id) {
        return function (dispatch){
                fetch("http://localhost:3001/folders", {
                        method: 'DELETE',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({id})
                })
                .then((response) => response.json())
                .then((data) => {
                dispatch({ type: DELETE_FOLDER, payload: data });
                }) 
        }
}


export function createFolder (folder){
        
        return function (dispatch){
                fetch("http://localhost:3001/folders", {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(folder)
                })
                .then((response) => response.json())
                .then((data) => {
                dispatch({ type: CREATE_FOLDER, payload: data });
                }) 
        }
}

export  function getFolders () {
        return  function (dispatch){
                fetch("http://localhost:3001/folders")
                .then((response) => response.json())
                .then((data) => {
                dispatch({ type: GET_FOLDERS, payload: data});
                }) 
        }
}


// todos
export  function getTodosById (id) {
        return  function (dispatch){
                fetch("http://localhost:3001/todos/"+id)
                .then((response) => response.json())
                .then((data) => {
                dispatch({ type: GET_TODOS_BY_ID, payload: data});
                }) 
        }
}



export  function getTodos () {
        return  function (dispatch){
                fetch("http://localhost:3001/todos")
                .then((response) => response.json())
                .then((data) => {
                dispatch({ type: GET_TODOS, payload: data});
                }) 
        }
}

export function createTodo (todo){
        
        return function (dispatch){
                fetch("http://localhost:3001/todos", {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(todo)
                })
                .then((response) => response.json())
                .then((data) => {
                dispatch({ type: CREATE_TODO, payload: data });
                }) 
        }
}

export function changeStatus (status , id){
        
        return function (dispatch){
                fetch(`http://localhost:3001/todos`, {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({status,id:parseInt(id)})
                })
                .then((response) => response.json())
                .then((data) => {
                dispatch({ type: CHANGE_STATUS, payload: data });
                })
        }
}


export function changeContent (content , id){
        
        return function (dispatch){
                fetch(`http://localhost:3001/todos`, {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({content,id: parseInt(id)})
                })
                .then((response) => response.json())
                .then((data) => {
                dispatch({ type: CHANGE_CONTENT, payload: data });
                })
        }
}



