import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  removeTodo as removeTodoAction,
  toggleCompleted as toggleCompletedAction,
} from '../redux/actions/todosActions';

class Todo extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleClick() {
    const { removeTodo, todo } = this.props;

    removeTodo(todo);
  }

  handleToggle() {
    const { toggleCompleted, todo } = this.props;

    toggleCompleted(todo);
  }

  render() {
    const { todo } = this.props;

    const todoStyle = todo.isCompleted ? { textDecoration: 'line-through' } : {};

    return (
      <div style={todoStyle}>
        {todo.text}
        <button type="button" onClick={this.handleToggle}>
          completar
        </button>
        <button type="button" onClick={this.handleClick}>
          remover
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todo) => dispatch(removeTodoAction(todo)),
  toggleCompleted: (todo) => dispatch(toggleCompletedAction(todo)),
});

export default connect(null, mapDispatchToProps)(Todo);
