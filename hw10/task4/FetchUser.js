/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
class FetchUser {
  async getFirstUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return response.json();
  }
}
