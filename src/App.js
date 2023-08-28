import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from './VendingMachine';
import RoutesList from './RoutesList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
