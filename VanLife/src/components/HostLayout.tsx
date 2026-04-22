import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (

    <>
    <nav className="flex gap-4 p-6 text-gray-800">
      <Link to="/host" className="hover:underline hover:font-bold">Dashboard</Link>
      <Link to="/host/income" className="hover:underline hover:font-bold">Income</Link>
      <Link to="/host/reviews" className="hover:underline hover:font-bold">Reviews</Link>
    </nav>
    <Outlet />
    </>
  );
}