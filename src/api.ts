const fetch = require("node-fetch");

export function fetchTodoApi(id: number) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response: any) => response.json())
    .then((json: any) => json);
}
