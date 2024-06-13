
import './App.css';
import { Person } from './components/dynamic';

function App() {
  return(
    <div className="App">
      <Person name='Hafizur Rahman' age='36' salary='50000'></Person>
      <Person name='Hafiz' age='30' salary='7000'></Person>
      <Person name='Abdur Rahman' age='45' salary='75000'></Person>
    </div>
  );
}

export default App;
