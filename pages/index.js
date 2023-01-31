import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Intro from "../components/Intro";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";
import Overons from "../components/Overons";
import Nieuws from "../components/Nieuws";
import Reviews from "../components/Reviews";
import Openingstijden from "../components/Openingstijden";
import Locatie from "../components/Locatie";
import Contact from "../components/Contact";
import HomeMap from "../components/Map";

export default function Home() {
  return (
   <div className={` flex flex-col items-center `}>
<Head>
    <title>Fems Hair & Beauty Salon</title>

    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/femsico.ico"/>
</Head>
       <Intro/>
      <Overons/>
       {/*<Nieuws/>*/}
       <Reviews/>
       <Openingstijden/>
       <div className={`w-full`}>
           <HomeMap/>
       </div>

       <Contact/>


   </div>
  )
}
Home.getLayout = function getLayout(page){
    return(
        <Layout>
            {page}
        </Layout>
    )
}
