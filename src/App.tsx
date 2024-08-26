import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';

function App() {

  return (
    <BrowserRouter basename='/test-router/'>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;