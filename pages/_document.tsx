import { Html, Head, Main, NextScript } from "next/document";
import { NextSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function Document() {
  return (
    
    
    <Html lang="en">
      <NextSeo
        title={SEO.title}
        description={SEO.description}
        openGraph={{
          images: [
            {
              url: SEO.openGraph.coverImage,
            },
          ],
        }}
        canonical={SEO.url}
      />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
