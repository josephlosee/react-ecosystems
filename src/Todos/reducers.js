import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED } from './actions';
// Reducers are named after the store resources they act upon - called after all state changes?

export const todos = (state=[], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const {text} = payload;
      const newTodo = {
        text,
        isComplete: false
      };
      return state.concat(newTodo); // Creates a new array
    }
    case REMOVE_TODO: {
      const {text} = payload;
      return state.filter(todo => todo.text !== text); //Returns new array of all items that don't match the payload's text TODO: Add UUIDs and manage that way
    }
    case MARK_TODO_AS_COMPLETED: {
      const {text} = payload;
      return state.map(todo => {
        if (todo.text === text){
          return {...todo, isComplete: true};
        }
        return todo;
      })
    }
    default:
      return state;
  }
}