import Footer from "components/Layout/Footer/footer";
import Navbar from "components/Layout/Navbar/navbar";
import Testimonial from "components/Layout/Testimonial/Testimonial";
import Head from "next/head";
import Link from "next/link"
import Header from "../src/components/Layout/Header/Header"
export default function Home() {
  return (
    <div>
      <Head>
        <title>poc</title>
      </Head>
      <Navbar/>
      <Header letsgo={"lets go"} hello={"Hello Human"} button={"true"}/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
