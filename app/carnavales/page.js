import { fiestas } from "../data/data";

export default function Carnavales(){
  return(
    <main className="section">
      <h1>Carnavales y fiestas patronales</h1>
      <div className="grid">
        {fiestas.map((f,i)=>(
          <article className="card" key={i}>
            <img src={f.img} alt={f.nombre}/>
            <h3>{f.nombre}</h3>
            <p>Celebracion llena de musica, danza, color, tradicion y alegria popular.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
