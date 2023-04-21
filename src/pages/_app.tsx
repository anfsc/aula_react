import Layout from "../../componentes/layout";

import "@/styles/globals.css";

import type { AppProps } from "next/app";

import { AlunosContext, AlunosProvider }from "@/context/AlunosContext";

export default function App({ Component, pageProps }: AppProps) {

  return (

    < AlunosProvider>

  <Layout>
    <Component {...pageProps} />
  </Layout>

  </AlunosProvider>
  
  );

}

