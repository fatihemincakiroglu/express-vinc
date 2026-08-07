import "@/app/globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatButtons from "./FloatButtons";

export default function LayoutShell({ lang, children }) {
  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,600;0,700;0,800;1,700&family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar lang={lang} />
        <main>{children}</main>
        <FloatButtons lang={lang} />
        <Footer lang={lang} />
      </body>
    </html>
  );
}
