import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Turismo Celendin y Cajamarca",
  description: "Pagina turistica de Celendin y Cajamarca",
};

export default function RootLayout({children}){
  return(
    <html lang="es">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
