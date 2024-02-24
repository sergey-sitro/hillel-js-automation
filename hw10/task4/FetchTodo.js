/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
class FetchTodo {
  async getFirstTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
  }
}
