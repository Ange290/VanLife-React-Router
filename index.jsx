import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import './server';
import './index.css';

function App() {
  return (
     <BrowserRouter>
     <header className="flex items-center justify-between p-6">
      <Link to="/" className='font-bold text-xl pl-4'>#VANLIFE</Link>
      <nav className="flex gap-4 text-gray-700 ">
  
    <Link to="/about">About</Link>
    <Link to="/vans">Vans</Link>
      </nav>
     </header> 
    
   
  <Routes>
<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/vans' element={<Vans />} />
    </Routes> 
    
 <footer className="flex items-center justify-center p-6 bg-zinc-700 text-gray-300">
      <h1>&copy; 2022 #VANLIFE.</h1>
     </footer>  
  </BrowserRouter>
    
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
 <App />
);