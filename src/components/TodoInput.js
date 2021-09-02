import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addTodo as addTodoAction } from '../redux/actions/todosActions';

class TodoInput extends Component {
  constructor() {
    super();

    this.state = {
      todo: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick(event) {
    event.preventDefault();

    const { todo } = this.state;
    const { addTodo } = this.props;

    addTodo({ id: uuidv4(), text: todo, isCompleted: false });

    this.setState({
      todo: '',
    });
  }

  render() {
    const { todo } = this.state;

    return (
      <form>
        <input
          type="text"
          id="todo"
          name="todo"
          value={todo}
          onChange={this.handleChange}
        />

        <button type="submit" onClick={this.handleClick}>
          adicionar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodoAction(todo)),
});

export default connect(null, mapDispatchToProps)(TodoInput);
