function fetchFirstTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json());
}

function fetchFirstUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json());
}

Promise.all([
  fetchFirstTodo(),
  fetchFirstUser(),
]).then((vals) => console.log(vals));

Promise.race([
  fetchFirstTodo(),
  fetchFirstUser(),
]).then((vals) => console.log(vals));
