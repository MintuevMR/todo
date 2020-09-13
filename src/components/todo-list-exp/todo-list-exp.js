import React, { Component } from 'react';
import { render } from '@testing-library/react';

  export default class TodoListExp extends Component {
  constructor() {
      super();
      this.state = {
        toData: [
          { id: 1, first: 'Drink Coffee', last: 'Drink Coffee',  handle: 'Drink'},
          { id: 2, first: 'Drink Coffee', last: 'Drink Coffee',  handle: 'Drink'}
        ]
      }
    }

   render() {
        return (
        <div>
          {props.items.map((item, id) => (
            <Item key={id} item={item} />
          )}
        </div>
      );
    }