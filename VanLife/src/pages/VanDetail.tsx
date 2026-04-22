import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



export default function VanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState<Van | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.van)); 
  }, [id]);

  return (
    <div className="p-6">
      {van ? (
        <div>
          <img src={van.imageUrl} alt={van.name} className="w-full h-64 object-cover mb-4" />
          <i className={`text-sm font-semibold px-2 py-1 rounded ${van.type === 'simple' ? 'bg-orange-200 text-orange-800' : van.type === 'rugged' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'}`}>
            {van.type}
          </i>
          <h1 className="text-3xl font-bold mb-6">{van.name}</h1>
          <p className="text-lg text-gray-700 mb-4">${van.price.toFixed(2)}/day</p>
          <p className="text-gray-600">{van.description}</p>
          <button>Rent this van</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}