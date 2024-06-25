
import './App.css';
import { Person } from './components/dynamic';
import { Products } from './components/Products/Products';


function App() {
  
  return(
    <div className="App">
      <div>
      <Person name='Hafizur Rahman' age='36' salary='50000'></Person>
      <Person name='Hafiz' age='30' salary='7000'></Person>
      <Person name='Abdur Rahman' age='5' salary='75000'></Person>
      </div>
      <Products></Products>
    </div>
  );
}

export default App;
