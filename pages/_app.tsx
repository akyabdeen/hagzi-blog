import BlogLayout from "@/components/composite/BlogLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  let Layout = null;

  Layout = BlogLayout;

  return (
    <>
      <Head>
        <title>Blog: Hagzi</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  );
}
