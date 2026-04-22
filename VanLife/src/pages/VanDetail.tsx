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
    <></>

  );
}