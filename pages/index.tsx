import {
  Blog,
  CitationOverlay,
  Contact,
  Experience,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
} from "components";
import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";

const IndexPage = () => {
  const [citation, setCitation] = useState(true);
  const [main, setMain] = useState(false);

  useEffect(() => {
    const ids = [
      setTimeout(() => setCitation(false), 4800),
      setTimeout(() => setMain(true), 5700),
    ];

    return () => ids.forEach((id) => clearTimeout(id));
  }, [setCitation]);

  return (
    <>
      <Head>
        <title>Anderson Osayerie</title>
      </Head>
      <CitationOverlay citation={citation} />
      <motion.main
        variants={{
          initial: {
            opacity: 0,
            display: "none",
          },
          visible: {
            opacity: 1,
            display: "block",
          },
        }}
        initial="initial"
        animate={main ? "visible" : "initial"}
        transition={{
          duration: 1.0,
        }}
      >
        <Header />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </motion.main>
    </>
  );
};

export default IndexPage;
