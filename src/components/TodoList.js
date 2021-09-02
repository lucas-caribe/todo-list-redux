import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

class TodoList extends Component {
  render() {
    const { todoList } = this.props;

    return (
      <div>
        {todoList.map((todo) => (
          <Todo key={ todo.id } todo={todo} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todos.todoList,
});

export default connect(mapStateToProps)(TodoList);
