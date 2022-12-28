export const ADD_TODO = 'ADD_TODO';
export const DELETE_ALL = 'DELETE_ALL';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';

export const addTodo = (dispatch, payload) => {
    dispatch({ type: ADD_TODO });
    dispatch({ type: ADD_TODO, payload });

}

export const deleteAll = (dispatch, payload) => {

    dispatch({ type: DELETE_ALL });
    dispatch({ type: DELETE_ALL, payload })
}

export const removeTodo = (dispatch, payload) => {

    dispatch({ type: REMOVE_TODO })
    dispatch({ type: REMOVE_TODO, payload })
}

export const handleEditSubmit = (dispatch, payload) => {

    dispatch({ type: UPDATE_TODO });
    dispatch({ type: UPDATE_TODO, payload })
}

export const handleCheckbox = (dispatch, payload) => {

    dispatch({ type: UPDATE_CHECKBOX });
    dispatch({ type: UPDATE_CHECKBOX, payload })
}