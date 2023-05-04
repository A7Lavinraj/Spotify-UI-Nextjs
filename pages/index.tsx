import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import Main from "@/components/main/Main";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Spotify Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
        <Main />
      </header>
    </div>
  );
};

export default Home;
