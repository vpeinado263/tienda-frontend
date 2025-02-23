import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Compra y vende artículos de segunda mano desde la comodidad de tu hogar. Encuentra lo que necesitas a precios accesibles." />
  
        {/* SEO & Redes Sociales */}
        <meta property="og:title" content="Venta de Garaje Online" />
        <meta property="og:description" content="Compra y vende artículos de segunda mano desde la comodidad de tu hogar." />
        <meta property="og:image" content="/images/preview.jpg" />
        <meta property="og:url" content="https://tu-sitio.com" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Fuentes y favicon */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
