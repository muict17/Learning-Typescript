const axios = require("axios");
// let storeDataFromRequest;
// const requestData = axios
//   .get("https://jsonplaceholder.typicode.com/todos/1")
//   .then(response => {
//     console.log("Promise", response.data);
//     storeDataFromRequest = response.data;
//   });
// console.log("Sequencial", requestData);
//
// console.log(storeDataFromRequest);

// axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response => {
//   console.log("first Request", response.data);
//   axios.get("https://jsonplaceholder.typicode.com/todos/2").then(todo => {
//     console.log("second Request", todo.data);
//   });
// });

axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response => {
  console.log("Todo 1", response.data);
});
axios.get("https://jsonplaceholder.typicode.com/todos/2").then(response => {
  console.log("Todo 2", response.data);
});
