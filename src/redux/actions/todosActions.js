const TODO_ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
};

// addTodo
// removeTodo
// toggleCompleted
// editTodo

// action creators
export const addTodo = (todo) => ({ type: TODO_ACTIONS.ADD_TODO, todo });

export const removeTodo = (todo) => ({ type: TODO_ACTIONS.REMOVE_TODO, todo });

export const toggleCompleted = (todo) => ({ type: TODO_ACTIONS.TOGGLE_COMPLETED, todo });

export default TODO_ACTIONS;
