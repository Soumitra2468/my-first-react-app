import { useState } from 'react'


function App() {
  let [counter, setCounter] = useState(0);
  let increment = ()=>{
    counter = counter + 1;
    setCounter(counter);
    console.log(counter);
  }
  let decremen = ()=>{
    counter = counter - 1;
    setCounter(counter);
    console.log(counter);
  }
  let reset = ()=>{
    counter = 0;
    setCounter(counter);
    console.log(counter);
  }
  return (
    <>
        <h1>Hello Soumitra! You Are In React</h1>
        <h2>Counter value: {counter}</h2>
        <button onClick={increment}>Increment = {counter}</button>
        <button onClick={decremen}>Decrement = {counter}</button>
        <button onClick={reset}>Reset = {counter}</button>


    </>
  
  )
}

export default App
