// import {  useState } from "react";
import useCounter from "./hooks/useCounter";
import Bookstore from './components/Bookstore';

const App = () => {
  const time = useCounter();


  // use useCouter custom hook to replace useEffect below
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTime((prev) => prev + 1);
  //   }, 1000);
  // },);

  // // Trigger useEffect at every change within component
  // useEffect(() => {
  //   //  use component
  //   console.log('React to every component change');
  // });

  // // Trigger useEffect at component mount 
  // useEffect(() => {
  //   console.log('Component mount');
  // }, [])

  // // Trigger useEffect by listening to a specific variable inside component
  // useEffect(() => {
  //   console.log('State property updated', time);
  // }, [time])



  return (
    <div className="App">
      <p>You have spent {time} seconds on this page</p>
      <Bookstore />
    </div>
  );
}

export default App;
