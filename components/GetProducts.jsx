import { useEffect, useState } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3000/api/products';

export default function GetProducts() {

  const [productos, setProductos] = useState(null);

  useEffect(() => {
    axios.get(URL)
      .then((response) => setProductos(response.data))
  }, [])
  
  if(!productos) return null;

  return (
    <section>
      {productos.map((producto) => (
        <div key={producto._id}>
          <img src={producto.image} alt="" />
          <h2>{producto.name}</h2>
          <p>{producto.description}</p>
          <p>${producto.price}</p>
        </div>
      ))}
    </section>
  )
}
