const axios = require("axios");
// plain point
// axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response => {
//   console.log("first Request", response.data);
//   axios.get("https://jsonplaceholder.typicode.com/todos/2").then(todo => {
//     console.log("second Request", todo.data);
//   });
// });

const sendAllRequest = async () => {
  const firstRequest = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  const secondRequest = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/2"
  );
  return { first: firstRequest.data, second: secondRequest.data };
  // console.log(firstRequest.data);
  // console.log(secondRequest.data);
};
sendAllRequest().then(information => {
  console.log(information);
});
