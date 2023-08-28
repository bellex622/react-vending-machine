import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import RoutesList from './RoutesList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
