import { platos } from "../data/data";

export default function Gastronomia(){
  return(
    <main className="section">
      <h1>Gastronomia de Celendin y Cajamarca</h1>
      <div className="grid">
        {platos.map((p,i)=>(
          <article className="card" key={i}>
            <img src={p.img} alt={p.nombre}/>
            <h3>{p.nombre}</h3>
            <p>Plato tipico con sabor cajamarquino, preparado con ingredientes tradicionales.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
