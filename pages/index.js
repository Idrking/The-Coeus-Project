import Head from "next/head";
import Image from "next/image";
import Nav from "../components/nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Coeus Project</title>
        <meta name="description" content="Questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
    </>
  );
}
