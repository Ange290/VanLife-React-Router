import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
type Van = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
};

type VansResponse = {
  vans: Van[];
};

export default function Vans() {
  const [vans, setVans] = useState<Van[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data: VansResponse) => setVans(data.vans));
  }, []);
  const filterType = searchParams.get("filter");
  const displayedVans = filterType
    ? vans.filter((van) => van.type === filterType)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="p-4 border rounded-lg">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt={van.name} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-xl font-bold mb-2">{van.name}</h2>
        <p className="text-gray-700 mb-2">${van.price}/day</p>
        <p className="text-gray-500">{van.type}</p>
      </Link>
    </div>
  ));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Explore our van options</h1>

      <div className="mb-6">
        <button
          onClick={() => setSearchParams({ filter: "simple" })}
          className="px-4 py-2 bg-orange-200 text-orange-800 rounded mr-2"
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ filter: "rugged" })}
          className="px-4 py-2 bg-green-200 text-green-800 rounded mr-2"
        >
          Rugged
        </button>
        <button
          onClick={() => setSearchParams({ filter: "luxury" })}
          className="px-4 py-2 bg-blue-200 text-blue-800 rounded mr-2"
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({})}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded"
        >
          Clear filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{vanElements}</div>
    </div>
  );
}