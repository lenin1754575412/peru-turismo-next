import { destinos } from "../data/data";

export default function Turismo(){
  const celendin = destinos.filter(d => d.zona === "Celendin");
  const cajamarca = destinos.filter(d => d.zona === "Cajamarca");

  const Card = ({d}) => (
    <article className="tourCard">
      <img src={d.img} alt={d.nombre}/>
      <div className="tourBody">
        <span>{d.zona}</span>
        <h3>{d.nombre}</h3>
        <p>Destino recomendado para turismo, fotografia, historia, cultura y naturaleza.</p>
        <a target="_blank" href={`https://www.google.com/maps/search/${encodeURIComponent(d.nombre+" Cajamarca Peru")}`}>Ver ruta</a>
      </div>
    </article>
  );

  return(
    <main className="tourPage">
      <section className="tourHero">
        <div>
          <span>Turismo</span>
          <h1>Celendin y Cajamarca</h1>
          <p>Descubre destinos naturales, historicos y culturales.</p>
        </div>
      </section>

      <section className="tourSection">
        <h2>Destinos de Celendin</h2>
        <div className="tourGrid">
          {celendin.map((d,i)=><Card d={d} key={i}/>)}
        </div>
      </section>

      <section className="tourSection darkTour">
        <h2>Destinos de Cajamarca</h2>
        <div className="tourGrid">
          {cajamarca.map((d,i)=><Card d={d} key={i}/>)}
        </div>
      </section>
    </main>
  );
}
