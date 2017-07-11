import React, { PropTypes } from 'react';

// Import Components
import TodoListItem from './TodoListItem/TodoListItem';

function TodoList(props) {
  return (
    <ul  onDrop={drop} onDragOver={allowDrop}>
      {
        props.todos.map(todo => (
          <TodoListItem
            onDragStart={drag} 
            todo={todo}
            key={todo.cuid}
            onComplete={() => props.handleCompleteTodo(todo.cuid)}
            onEdit={(todo) =>  props.handleEditTodo(todo)}
          />
        ))
      }
    </ul>
  );
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleCompleteTodo: PropTypes.func.isRequired,
  handleEditTodo: PropTypes.func.isRequired
};

export default TodoList;
