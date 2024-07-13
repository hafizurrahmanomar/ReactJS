import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Counter />
        <MyUsers />
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count === 0) {
      alert('Count cannot be less than zero');
      return;
    }
    setCount(count - 1);
  };

  const resetCount = () => setCount(0);

  return (
    <div>
      <div><h1>Count is = {count}</h1></div>
      <button onClick={increaseCount}> Increase(+)</button>
      <br/><br/>
      <button onClick={decreaseCount}>Decrease(-)</button>
      <br/><br/>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

function MyUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(user => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  );
}

export default App;
