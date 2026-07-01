import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar(){
  return(
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo}>Celendin Cajamarca</Link>
      <nav className={styles.menu}>
        <Link href="/">Inicio</Link>
        <Link href="/historia">Historia</Link>
        <Link href="/turismo">Turismo</Link>
        <Link href="/galeria">Galeria</Link>
        <Link href="/mapa">Mapa</Link>
        <Link href="/clima">Clima</Link>
        <Link href="/gastronomia">Gastronomia</Link>
        <Link href="/carnavales">Carnavales</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}
