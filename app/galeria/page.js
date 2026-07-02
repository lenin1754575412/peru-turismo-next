import { destinos } from "../data/data";

export default function Galeria(){
  return(
    <main className="galleryPage">
      <section className="galleryHero">
        <span>Galeria turistica</span>
        <h1>Celendin y Cajamarca</h1>
        <p>Fotos, paisajes, plazas, historia y lugares para visitar.</p>
      </section>

      <section className="galleryMasonry">
        {destinos.map((d,i)=>(
          <article className="galleryItem" key={i}>
            <img src={d.img} alt={d.nombre}/>
            <div className="galleryInfo">
              <span>{d.zona}</span>
              <h3>{d.nombre}</h3>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
