# Pure & Impure Functions
## Pure
```Javascript
const pureFunc = (num, num2) => {
  return num + num2;
}
```

## Impure & Side Effects
```Javascript
let externalArg = [1, 2, 3];
// external variable is modified within scope of the impure function: side effect
const impureFunc = (arr) => {
  arr.push(4);
  return arr;
}
```

# React Hooks
## 3 ways to use `useEffect`:

  - Trigger useEffect at every change within component
    ```Javascript
    useEffect(() => {
      //  use component
    });
    ```
  - Trigger useEffect at component mount
  ```Javascript
    useEffect(() => {

    }, []) // thanks to the empty  dependency array
  ```

  - Trigger useEffect by listening to a specific variable inside component
  ```Javascript
    useEffect(() => {

    }, [variable])// variable is added to the dependency array
  ```

## Rules of Custom hooks
  - Starts with the word use
  - Should be called at the top level of your component
  - Should be imported and used within another React component
