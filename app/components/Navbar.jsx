"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return(
    <header className={styles.navbar}>
      <Link href="/" className={styles.logoBox}>
        <img src="/images/logo.png" alt="Logo" />
        <span>Celendin Cajamarca</span>
      </Link>

      <button className={styles.hamburger} onClick={() => setOpen(!open)}>☰</button>

      <nav className={`${styles.menu} ${open ? styles.active : ""}`}>
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
