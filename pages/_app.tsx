import "styles/index.css";

import { Layout } from "components";
import { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

const keywords = [
  "Anderson",
  "Anderson Osayerie",
  "Software Developer",
  "Technical Writer",
  "Web Developer",
  "React Developer",
  "Frontend Web Developer",
  "Backend Web Developer",
  "Fullstack Web Developer",
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
