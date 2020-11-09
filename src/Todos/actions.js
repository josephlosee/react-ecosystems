export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MARK_TODO_AS_COMPLETED = 'TODO_COMPLETED';
export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';

// Called "Action Creators" - factory function, use these instead of bare actions
export const createTodo = text => {
  return {
    type: CREATE_TODO,
    payload: { text }
  }
}

// Using text as the Unique ID, not great but works in a small app such as this:
export const removeTodo = text => {
  return {
    type: REMOVE_TODO,
    payload: { text }
  }
}

export const markTodoAsCompleted = text => {
  return {
      type: MARK_TODO_AS_COMPLETED,
      payload: { text }
  }
}

export const loadTodosInProgress = () => {
  type: LOAD_TODOS_IN_PROGRESS
}


export const loadTodosSuccess = todos => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos }
});

export const loadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});