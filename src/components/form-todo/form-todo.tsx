import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'form-todo',
  styleUrl: 'form-todo.css',
  shadow: true,
})
export class FormTodo {
  @State() task: string = '';

  @Event() addTask: EventEmitter;

  handleSubmit = (ev: Event) => {
    ev.preventDefault();
    if (this.task.trim()) {
      this.addTask.emit(this.task);
      this.task = '';
    }
  };

  handleInput = (ev: Event) => {
    const field = ev.target as HTMLInputElement;
    this.task = field.value;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onInput={this.handleInput} value={this.task}></input>
        <button>Add</button>
      </form>
    );
  }
}
