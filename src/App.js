import './App.css';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import Home from './components.js/Home';
import Hero from './components.js/Hero';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/heroes/:heroId">Hero</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes/:heroId" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
