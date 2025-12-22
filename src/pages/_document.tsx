import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Encuentra lo que necesitas a precios accesibles."
          />

          {/* SEO & Redes Sociales */}
          <meta property="og:title" content="Venta Online" />
          <meta
            property="og:description"
            content="Compra y vende artículos de segunda mano ."
          />
          <meta property="og:image" content="/images/file.svg" />
          <meta
            property="og:url"
            content="https://tienda-x--swart.vercel.app/"
          />
          <meta name="twitter:card" content="summary_large_image" />

          {/* Fuentes */}
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          />
          <link rel="icon" href="/file.svg" />
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
