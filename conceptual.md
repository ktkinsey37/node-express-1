### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

Promises(.then/.catch) and async/await

- What is a Promise?

A promise is an object created so that JS can continue running synchronous code but still allow an object for async code to work with

- What are the differences between an async function and a regular function?

An async function will begin to run, but will then allow other functions to run while it itself is handled on a separate stack.

- What is the difference between Node.js and Express.js?

Node is an environment for running js outside of the browser, Express is a framework built on Node

- What is the error-first callback pattern?

Providing error handling first in a callback function such that every error is automatically accounted for

- What is middleware?

Middleware runs in between certain routes it's applied to in express. It generally uses the next function.

- What does the `next` function do?

The next function allows middleware to be run and essentially processes the "next" thing for a route to do.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

The requests are all being made and waited on before the next line is fired. They are trying to return those names, so that if any other function tries to use the return value, it will receive undefined

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
