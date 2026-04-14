import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
     <BrowserRouter>
     <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  <Routes>
<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
    </Routes>   
  </BrowserRouter>
    
  )
}

function About(){
  return (
    <h1>About Page</h1>
  )
}
function Home(){
  return (
    <h1>Home Page</h1>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
 <App />
);