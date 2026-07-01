export default function Historia() {
  return (
    <main className="historyPage">

      <section className="heroFoto">
        <img src="/images/celendin.jpg" alt="Celendin" />
        <div className="heroOverlay">
          <span>Celendin - Cajamarca</span>
          <h1>Historia de Celendin</h1>
          <p>Provincia andina con cultura, tradicion, paisajes e identidad unica.</p>
        </div>
      </section>

      <section className="historyWrap">
        <article className="historyCard">
          <span>01</span>
          <h3>Provincia de Celendin</h3>
          <p>Celendin es una de las trece provincias del departamento de Cajamarca. Limita al norte con Chota, al este con Amazonas, al sur con San Marcos y Cajamarca, y al oeste con Hualgayoc.</p>
        </article>

        <article className="historyCard">
          <span>02</span>
          <h3>Fundacion politica</h3>
          <p>La historia moderna de Celendin empieza el 19 de diciembre de 1802, impulsada por el obispo Baltazar Jaime Martinez de Compañon y Bujanda.</p>
        </article>

        <article className="historyCard">
          <span>03</span>
          <h3>Ciudad trazada a cordel</h3>
          <p>La ciudad fue planificada con calles rectas y manzanas regulares por el ingeniero Jose Comesana. Por eso se compara con un tablero de ajedrez.</p>
        </article>

        <article className="historyCard">
          <span>04</span>
          <h3>Distritos</h3>
          <p>Celendin, Chumuch, Cortegana, Huasmin, Jorge Chavez, Jose Galvez, La Libertad de Pallan, Miguel Iglesias, Oxamarca, Sorochuco, Sucre y Utco.</p>
        </article>
      </section>

      <section className="heroFoto">
        <img src="/images/cajamarca.jpg" alt="Cajamarca" />
        <div className="heroOverlay">
          <span>Cajamarca - Peru</span>
          <h1>Historia de Cajamarca</h1>
          <p>Desde sus origenes milenarios hasta la epoca incaica, conquista, independencia y actualidad.</p>
        </div>
      </section>

      <section className="historyTimeline">
        <article>
          <span>Origenes</span>
          <h3>Mas de 10 mil anos de historia</h3>
          <p>Cajamarca tiene vestigios en Tanon y Pacopampa. Recibio influencia de culturas como Cupisnique, Chavin y Wari.</p>
        </article>

        <article>
          <span>Periodo Inca</span>
          <h3>Centro del Tahuantinsuyo</h3>
          <p>Hacia 1450 fue anexada al Imperio Inca y se convirtio en centro administrativo y lugar de descanso de la realeza cuzqueña.</p>
        </article>

        <article>
          <span>1532</span>
          <h3>Conquista espanola</h3>
          <p>En Cajamarca ocurrio el encuentro entre Atahualpa y Francisco Pizarro. Tambien se dio el famoso episodio del Cuarto del Rescate.</p>
        </article>

        <article>
          <span>1821</span>
          <h3>Independencia</h3>
          <p>Cajamarca proclamo su independencia el 6 de enero de 1821. Luego obtuvo la categoria de departamento el 11 de febrero de 1855.</p>
        </article>

        <article>
          <span>Actualidad</span>
          <h3>Region historica y turistica</h3>
          <p>Hoy Cajamarca destaca por su turismo, arquitectura colonial, ganaderia, agricultura, mineria, artesania y carnavales.</p>
        </article>
      </section>

    </main>
  );
}
