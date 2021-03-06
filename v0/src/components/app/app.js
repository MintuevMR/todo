import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {

  constructor (){
    super();
    this.state = {
      todoData: [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: false, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 },
      ]
    };
  
    this.deleteItem = (id) => {
      this.setState (({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id===id);
        const before = todoData.slice(0, idx);
        const after = todoData.slice(idx + 1);
        const newArray = [...before, ...after];
        return {
          todoData: newArray
        };
    });
  };
  }

  
  render(){
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} more ={'MMR'} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} 
        onDeleted = {this.deleteItem}/>
      </div>
    );
  }
};
