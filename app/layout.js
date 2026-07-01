import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Peru Turismo",
  description: "Pagina turistica de Peru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
