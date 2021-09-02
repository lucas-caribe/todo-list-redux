import React from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
