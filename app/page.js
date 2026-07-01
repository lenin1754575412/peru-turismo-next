import Link from "next/link";
import { destinos, platos } from "./data/data";

export default function Home(){
  return(
    <main>
      <section className="hero">
        <div className="overlay"></div>
        <div className="heroContent">
          <h1>Turismo en Celendin y Cajamarca</h1>
          <p>Historia, paisajes, carnavales, gastronomia, mapas y destinos turisticos.</p>
          <div className="buttons">
            <Link href="/turismo">Explorar destinos</Link>
            <Link href="/mapa">Ver mapa</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Destinos destacados</h2>
        <div className="grid">
          {destinos.slice(0,8).map((d,i)=>(
            <article className="card" key={i}>
              <img src={d.img} alt={d.nombre}/>
              <span>{d.zona}</span>
              <h3>{d.nombre}</h3>
              <p>Destino recomendado para conocer cultura, naturaleza e historia.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Gastronomia tipica</h2>
        <div className="grid">
          {platos.slice(0,8).map((p,i)=>(
            <article className="card" key={i}>
              <img src={p.img} alt={p.nombre}/>
              <h3>{p.nombre}</h3>
              <p>Plato tradicional de Celendin y Cajamarca.</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <h2>Celendin y Cajamarca</h2>
        <p>Pagina turistica lista para Vercel.</p>
      </footer>
    </main>
  );
}
