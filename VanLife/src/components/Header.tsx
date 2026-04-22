import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Header() {
    return (

 <header className="flex items-center justify-between p-6">
        <Link to="/" className="pl-4 text-xl font-bold">
          #VANLIFE
        </Link>
        <nav className="flex gap-4 text-gray-700">
            <Link to="/host">Host</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
    )
}