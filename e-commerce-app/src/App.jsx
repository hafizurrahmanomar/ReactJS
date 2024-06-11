
import { LeftPanel } from "./components/LeftPanel/LeftPanel";
import { RightPanel } from "./components/RightPanel/RightPanel";
// Good Practice
import "./App.css";



function App() {
  return (
    <div className="App">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
