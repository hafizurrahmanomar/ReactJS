import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);

  const increaseCount =()=> {
    setCount(count+1);
  };

  const decreaseCount =()=> {
    if(count===0){
      alert('Count Can not less than zero');
      return
    }
    setCount(count-1);
  };

  const resetCount =()=> setCount(0);

  return (
    <div className="App">
    <div><h1>Count is = {count}</h1></div>
    <button onClick={increaseCount}> + </button>
    <button onClick={decreaseCount}>-</button>
    <button onClick={resetCount}><h1>Reset</h1></button>
    </div>
  );
}

export default App;
