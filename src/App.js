import './App.css';
import { BrowserRouter } from "react-router-dom";
import RoutesList from './RoutesList';


/** Render the vending machine. */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
