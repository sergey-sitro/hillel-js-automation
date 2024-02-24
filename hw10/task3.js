async function fetchFirstTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return response.json();
}

async function fetchFirstUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  return response.json();
}

Promise.all([
  fetchFirstTodo(),
  fetchFirstUser(),
]).then((vals) => console.log(vals));

Promise.race([
  fetchFirstTodo(),
  fetchFirstUser(),
]).then((vals) => console.log(vals));
