import TODO_ACTIONS from '../actions/todosActions';

const INITIAL_STATE = {
  todoList: [],
};

const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return { ...state, todoList: [...state.todoList, action.todo] };
    case TODO_ACTIONS.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.todo.id),
      };
    case TODO_ACTIONS.TOGGLE_COMPLETED:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.todo.id) {
            return { ...todo, isCompleted: !todo.isCompleted };
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
};

export default todosReducer;
