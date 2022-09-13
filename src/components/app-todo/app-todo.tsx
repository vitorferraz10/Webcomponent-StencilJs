import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class AppTodo {
  @State() taskList: string[] = [];

  handleAdd = (ev: CustomEvent) => {
    this.taskList = [...this.taskList, ev.detail];
  };

  render() {
    return (
      <Host>
        <form-todo onAddTask={this.handleAdd}></form-todo>
        <list-todo list={this.taskList}></list-todo>
      </Host>
    );
  }
}
