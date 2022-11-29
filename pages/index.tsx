import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Home_Content from "../components/Home_Content";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Tselayagwe webapp</title>
        <meta name="description" content="Based on Nextjs 13 (2022)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Responsive navbar Sticky*/}
      <Navbar />

      {/* Hero */}
      <section >
        <Hero />
      </section>

      {/* Header */}
      <Header />


      {/* Home page Content */}
      <section>
      <Home_Content />
      </section>
    

      {/* Offererings */}

      {/* Team */}

      {/*Contact Us*/}

      {/* Footer */}
      <Footer />

      {/* Login */}

      {/* Signup */}
    </div>
  );
}
