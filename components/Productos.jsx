import { productos } from "../db/productos";

export default function Productos() {
  return (
    <section className="productos-container">
        {productos.map((producto) => (
            <div className="tarjeta" key={producto.id}>
                <div className="producto-img">
                    <img src={producto.imagenUrl} alt="" />
                </div>
                <h2>{producto.nombre}</h2>
                <p>Precio: ${producto.precio}</p>
            </div>
        ))}
    </section>
  )
}
