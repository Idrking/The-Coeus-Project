import Head from "next/head";
import Image from "next/image";
import Logo from "../components/logo";
import Menu from "../components/menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Coeus Project</title>
        <meta name="description" content="Questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Logo />
      <Menu />
    </>
  );
}
