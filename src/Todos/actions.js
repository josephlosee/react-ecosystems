export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TODO_COMPLETED = 'TODO_COMPLETED';

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

export const completeTodo = text => {
  return {
      type: TODO_COMPLETED,
      payload: { text }
  }
}
