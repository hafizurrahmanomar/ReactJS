/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';


function App() {
  
  return(
    <div className="App">
      <div>
    <Counter />
      </div>
    </div>
  );
}


function Counter() {
  
  const [count,setCount] = useState(0);

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
   <div>
    <div><h1>Count is = {count}</h1></div>
    <button onClick={increaseCount}> Increase(+)</button>
    <br/>
    <br/>
    <button onClick={decreaseCount}>Decrease(-)</button>
    <br/>
    <br/>
    <button onClick={resetCount}>Reset</button>
    </div>
  );
}

// Other Way

// function Counter() {
  
//   //const [count,setCount] = useState(0);
//   const [count,setCount] = useState(0);
//   const decreaseCount =()=> {
//     if(count===0){
//       alert('Count Can not less than zero');
//       return
//     }
//     setCount(count-1);
//   };

//   const resetCount =()=> setCount(0);

//   return (
//    <div>
//     <div><h1>Count is = {count}</h1></div>
//     <button onClick={()=>setCount(count+1)}> Increase(+)</button>
//     <br/>
//     <button onClick={()=> {
//     if(count===0){
//       alert('Count Can not less than zero');
//       return
//     }
//     setCount(count-1);
//   }}>Decrease(-)</button>
//     <br/>
//     <button onClick={()=> setCount(0)}>Reset</button>
//     </div>
//   );
// }

export default App;