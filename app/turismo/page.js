import { destinos } from "../data/data";

export default function Turismo(){
  return(
    <main className="section">
      <h1>Lugares turisticos de Celendin y Cajamarca</h1>
      <p className="center">Destinos naturales, historicos y culturales.</p>
      <div className="grid">
        {destinos.map((d,i)=>(
          <article className="card" key={i}>
            <img src={d.img} alt={d.nombre}/>
            <span>{d.zona}</span>
            <h3>{i+1}. {d.nombre}</h3>
            <p>Destino recomendado para turismo, fotografia, historia y cultura local.</p>
            <a target="_blank" href={`https://www.google.com/maps/search/${encodeURIComponent(d.nombre+" Cajamarca Peru")}`}>Ver ruta en Google Maps</a>
          </article>
        ))}
      </div>
    </main>
  );
}
