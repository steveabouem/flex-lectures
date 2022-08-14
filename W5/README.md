# MODULE 2 - Week 5 Promises

## TOPICS
- [x] Reminder on callbacks and HOF
- [x] Why promises? Callback hell
- [x] Handle errors Callback VS promises
- [x] Writing Promises
- [x] Chaining multiple promises 
- [x] Promise methods(`.all()`, `.race()`)
- [x] Example use case

### Why promises? Callback hell
Callback hell is a common term use to describe a situation where asynchronous code is poorly handled with callbacks. This is especially noticeable when the code is meant to display errors at every step of the process. 

### Writing Promises
A [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) takes as arguments two callbacks (in case of success and in case of error). It is by default in one of three states:
- *Pending*: Initial state a the start of the execution
- *Fullfilled*: the execution went as planned. The result of the execution, or any update made through that execution can then be made  available to the promise's `then` block by using the `resolve` method. Any action depending on the fulfillment of the promise can then be taken within the `then` block
- *Rejected*: the execution failed. Any action to be taken in case of error can then be defined in the promise's `catch` block;

### Handle errors Callback VS promises
Callbacks being just plain regular functions, they don't have a built-in way to manage errors: it's up to the code owner to handle them, usually by manually throwing the error through a [try catch](https://www.w3schools.com/js/js_errors.asp) for instance.

On the other hand, the promise's `catch` method (most commonly called catch block) allows us to deal with errors more cleanly;
```
const examplePromise = new Promise((resolve, reject) => {
    //logic 
    (...)
    //return desired data upon fullfilment
    resolve(data);
    reject(error);
})
.then(data) => {
    // take following action
}
.catch(error => {
    //handle error
});
```
### Chaining multiple promises
Technically you could chain as many promises as necessary. Keep in mind data must be **returned** by a given `then` block in order to be accessible in the following one. That data can very much be a new promise.

Note that there is no need to have as many `catch` blocks as there are then `blocks`. Because the promise catches the error as it happens, any logic set up for that error will be the one available in the `catch` block, even if there is only one.
```
examplePromise
  .then((data) => { 
    // manipulate data
    return  update1;
   })
  .then((update1) => { 
    // manipulate update1
    return  update2;
   })
   (...)
  .catch((err) => {
    // hande any error occuring in ANY of the then blocks. keep in mind execution stops at the first error.
  });
  ```

### Other Promise methods
The other  [Promise methods]() (outside of the basic resolve, reject, then and catch)  can be very powerful when used in the proper context. 

- .all(): accepts an array of promises and resolves them in a single `then` block
- .race(): also accepts an array of promises. Returns a single promise that fulfills as soon as **any** of the promises fulfills, with the value of the fulfilled promise.
- .any():almost identical to .race(). The difference is that, in case all of the promises are rejected, then the returned promise is rejected as well.
- .allSettled(): just like .all(), it accepts an array of promises. The difference is that it returns a promise that fullfilsonly after all the given promises have fulfiled, or rejected.
- .finally(): schedules a callback function to be called when the promise is completely settled (resolved or rejected).

### Example use case
Write a program that does the following:
- fetches subscriber's data *one at the time* and get their location, using the `country` property.
- If the country is *not* Canada, throw the `error` message provided as a parameter.
- If subscriber is in Canada, set the property local to true, and display the `success` message provided as a parameter.
- Indicate that the process is finished for current user, regardless of any error.
- Move on to the next user and *repeat the process*

 The `subscriber` object has the following properties: DOB, first name, last name, country, local.