
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Vans from '../src/pages/Vans';
import VanDetail from '../src/pages/VanDetail';
import './server';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <header className="flex items-center justify-between p-6">
        <Link to="/" className="pl-4 text-xl font-bold">
          #VANLIFE
        </Link>
        <nav className="flex gap-4 text-gray-700">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>

      <footer className="flex items-center justify-center bg-zinc-700 p-6 text-gray-300">
        <h1>&copy; 2022 #VANLIFE.</h1>
      </footer>
    </BrowserRouter>
  );
}

export default App
