import { useState, useEffect } from 'react'

import Head from 'next/head'
import HomeHero from '../components/HomeHero';
import Splash from '../components/Splash';
import StickyNav from '../components/StickyNav';
import Footer from '../global/Footer';

export default function Home() {

  const [splashEnd, setSplashEnd] = useState(false);

  // Window resize event to set screen size

  const [deviceHeight, setDeviceHeight] = useState(null);

  useEffect(() => {
    setDeviceHeight(`${window.innerHeight}px`)
  });

  return (
    <>
      <Head>
        <title>Jamie Moore - Frontend Developer</title>
        <meta name="description" content="UK Based frontend developer specialising in custom Wordpress themes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={splashEnd ? '' : 'splash'} style={{ "--device-height": deviceHeight }}>
        <Splash setSplashEnd={setSplashEnd}/>
        <HomeHero />
        <StickyNav />
        <Footer />
      </main>
    </>
  )
}
