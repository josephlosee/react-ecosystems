export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MARK_TODO_AS_COMPLETED = 'TODO_COMPLETED';

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
