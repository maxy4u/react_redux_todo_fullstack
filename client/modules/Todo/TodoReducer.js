import { ADD_TODO, ADD_TODOS, COMPLETE_TODO, CLEAR_COMPLETED_TODO, EDIT_TODO } from './TodoActions';

// Initial State
const initialState = { data: [] };

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
    debugger;
      return {
        data: [...state.data, action.todo],
      };

    case ADD_TODOS :
      return {
        data: action.todos,
      };
    case EDIT_TODO :
    debugger;
      return {
        data: state.data.map(todo => {
          return todo.cuid === action.todo.cuid ? Object.assign({}, todo, { text: action.todo.text }) : todo;
        }),
      };
    case COMPLETE_TODO:
    debugger;
      return {
        data: state.data.map(todo => {
          return todo.cuid === action.cuid ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
        }),
      };

    case CLEAR_COMPLETED_TODO:
      return {
        data: state.data.filter(todo => todo.completed === false),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all todos
export const getTodos = state => state.todos.data;

// Export Reducer
export default TodoReducer;
