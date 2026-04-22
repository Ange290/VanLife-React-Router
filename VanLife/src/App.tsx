
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Vans from '../src/pages/Vans';
import VanDetail from '../src/pages/VanDetail';
import Layout from './components/Layout';
import './server';
import './index.css';

function App() {
  return (
    <BrowserRouter>
     

      <Routes >
        <Route element ={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>

      <footer className="flex items-center justify-center bg-zinc-700 p-6 text-gray-300">
        <h1>&copy; 2022 #VANLIFE.</h1>
      </footer>
    </BrowserRouter>
  );
}

export default App
