export default function Clima(){
  return(
    <main className="section">
      <h1>Clima en tiempo real</h1>
      <p className="center">Consulta el clima aproximado de Celendin y Cajamarca.</p>
      <iframe className="mapa" src="https://embed.windy.com/embed2.html?lat=-6.865&lon=-78.146&detailLat=-6.865&detailLon=-78.146&width=650&height=450&zoom=8&level=surface&overlay=wind&product=ecmwf"></iframe>
    </main>
  );
}
