import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo}>Peru Turismo</Link>

      <nav className={styles.menu}>
        <Link href="/">Inicio</Link>
        <Link href="/historia">Historia</Link>
        <Link href="/turismo">Turismo</Link>
        <Link href="/gastronomia">Gastronomia</Link>
        <Link href="/contacto">Contactanos</Link>
      </nav>
    </header>
  );
}
