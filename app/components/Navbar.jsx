"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return(
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo}>Celendin Cajamarca</Link>

      <button className={styles.hamburger} onClick={() => setOpen(!open)}>
        ☰
      </button>

      <nav className={`${styles.menu} ${open ? styles.active : ""}`}>
        <Link onClick={() => setOpen(false)} href="/">Inicio</Link>
        <Link onClick={() => setOpen(false)} href="/historia">Historia</Link>
        <Link onClick={() => setOpen(false)} href="/turismo">Turismo</Link>
        <Link onClick={() => setOpen(false)} href="/galeria">Galeria</Link>
        <Link onClick={() => setOpen(false)} href="/mapa">Mapa</Link>
        <Link onClick={() => setOpen(false)} href="/clima">Clima</Link>
        <Link onClick={() => setOpen(false)} href="/gastronomia">Gastronomia</Link>
        <Link onClick={() => setOpen(false)} href="/carnavales">Carnavales</Link>
        <Link onClick={() => setOpen(false)} href="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}
