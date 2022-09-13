import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'list-todo',
  styleUrl: 'list-todo.css',
  shadow: true,
})
export class ListTodo {
@Prop() list: string[]
  render() {
    return (
      <ul>
        {this.list.map(task => (
          <li>{task}</li>
        ))}
      </ul>
    );
  }
}
