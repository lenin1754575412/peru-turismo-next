export default function Mapa(){
  return(
    <main className="section">
      <h1>Mapa interactivo</h1>
      <p className="center">Mapa de Celendin y Cajamarca.</p>
      <iframe className="mapa" src="https://www.google.com/maps?q=Celendin,Cajamarca,Peru&output=embed"></iframe>
    </main>
  );
}
