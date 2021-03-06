import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
<<<<<<< HEAD
import TodoListExp from '../todo-list-exp';
=======
>>>>>>> d73b68015f93721ec2b17b6b1e399652d7d0dd43

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    // generate id ?
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
    });

  };

onToggleImportant = (id) => {
  console.log('Toggle important ' , id);
}; 

onToggleDone = (id) => {
  console.log('Toggle done ' , id);
}; 


  render() {
    return (
      <div className="todo-app">
<<<<<<< HEAD
=======

>>>>>>> d73b68015f93721ec2b17b6b1e399652d7d0dd43
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={ this.deleteItem }
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          />

        <ItemAddForm onItemAdded={this.addItem}/>

          <div className = "container mt-5">
          <TodoListExp />
          </div>
      </div>
    );
  }
};
