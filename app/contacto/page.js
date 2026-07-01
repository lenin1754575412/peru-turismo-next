export default function Contacto(){
  return(
    <main className="section">
      <h1>Contactanos</h1>
      <form className="form">
        <input placeholder="Nombre"/>
        <input placeholder="Correo"/>
        <textarea placeholder="Mensaje"></textarea>
        <button>Enviar</button>
      </form>
    </main>
  );
}
