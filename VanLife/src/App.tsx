
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
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
        <Route path="/host" element={<Dashboard />} />
        <Route path="/host/income" element={<Income />} />
        <Route path="/host/reviews" element={<Reviews />} />
        </Route>
      </Routes>

      <footer className="flex items-center justify-center bg-zinc-700 p-6 text-gray-300">
        <h1>&copy; 2022 #VANLIFE.</h1>
      </footer>
    </BrowserRouter>
  );
}

export default App
