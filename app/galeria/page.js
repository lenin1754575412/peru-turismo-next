import { destinos } from "../data/data";

export default function Galeria(){
  return(
    <main className="section">
      <h1>Galeria de Celendin y Cajamarca</h1>
      <div className="masonry">
        {destinos.map((d,i)=>(
          <div className="masonryItem" key={i}>
            <img src={d.img} alt={d.nombre}/>
            <h3>{d.nombre}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
