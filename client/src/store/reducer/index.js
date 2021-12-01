import {
        CREATE_TODO , CHANGE_STATUS , CHANGE_CONTENT , GET_TODOS,
        CREATE_FOLDER , GET_FOLDERS , GET_TODOS_BY_ID, DELETE_FOLDER,
        CHANGE_FOLDER_ID, EDIT_TODO
        }  from '../actions';

const initialState = {
    todos: [],
    folders:[],
    todosById:[],
    statusDelete: false,
    folder_id: 0,
    folder_name: '',
    todo_id: 0, 
    todo_content: '', 
    edit_status: false
}
const reducer = (state=initialState , action) => {
    switch (action.type){
       case CREATE_TODO:
            return {...state, todos: [...state.todos , action.payload]};
        case CHANGE_STATUS:
            return {...state}
        case CHANGE_CONTENT: 
            return {...state , todos: action.payload};
        case GET_TODOS:
            return {...state , todos: action.payload};
        case CREATE_FOLDER:
            return {...state , folders: [...state.folders , action.payload]};
        case GET_FOLDERS:
            return {...state , folders: action.payload};
        case GET_TODOS_BY_ID:
            return {...state , todosById: action.payload};
        case DELETE_FOLDER:
            return {...state, statusDelete: !state.statusDelete} 
        case CHANGE_FOLDER_ID:
            return {...state, folder_id: action.payload.id , folder_name: action.payload.name}
        case EDIT_TODO:
            return {...state , todo_id: action.payload.id, 
                todo_content: action.payload.content, 
                edit_status: !state.edit_status}
        default: return state;
    }
}


export default reducer; 