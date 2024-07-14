import { CartProvider } from './contexts';

import { LeftPanel } from './components/leftPanel';
import { RightPanel } from './components/rightPanel';

function App() {
  return (
    <CartProvider>
      <div className="bg-gray-200 container mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-3/4">
          <LeftPanel />
        </div>
        <div className="lg:w-1/4 lg:ml-8">
          <RightPanel />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
