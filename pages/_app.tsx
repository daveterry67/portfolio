import "styles/index.css";

import { Layout } from "components";
import { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

const keywords = [
  "David",
  "David Dappa",
  "Software Developer",
  "Web Developer",
  "React Developer",
  "Frontend Web Developer",
  "Frontend Mobile Developer",
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="shortcut icon" href="/favicon.webp" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
