import React, {useState, useEffect} from 'react';


export default function Vans(){
   const [vans,setVans] = useState([]);
   useEffect (()=>{
    fetch("/api/vans")
    .then(res => res.json())
    .then(data =>setVans(data.vans))
   },[])

   const vanElements = vans.map(van => (
    <div key={van.id} className="p-4 border rounded-lg">
      <img src={van.imageUrl} alt={van.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{van.name}</h2>
      <p className="text-gray-700 mb-2">${van.price}/day</p>
      <p className="text-gray-500">{van.type}</p>
    </div>
   ))
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Explore our van options</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vanElements}
      </div>
    </div>
  )
}