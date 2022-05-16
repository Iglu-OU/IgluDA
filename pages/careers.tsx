import Head from 'next/head';
import React from 'react';

import Separator from '../components/_images/Separator.svg';
import { CardList } from '../components/CardList/CardList';
import { Footer } from '../components/footer/Footer';
import { Navigation } from '../components/navigation/Navigation';
import Offers from '../components/offers/Offers';

export function getStaticProps() {
  return { props: { theme: 'dark' } };
}

const NewIndex: React.FC = () => {
  const headerLinks = [
    { link: 'https://da.iglu.ee/#process', name: 'Process' },
    { link: 'https://da.iglu.ee/#journey', name: 'Journey' },
    { link: 'https://da.iglu.ee/#team', name: 'Team' },
    { link: '/careers', name: 'Careers' },
  ];

  React.useEffect(() => {
    let didScroll = false;

    document.addEventListener('scroll', () => {
      didScroll = true;
    });

    const scrollCheck = setInterval(() => {
      if (didScroll) {
        calculateNav();
        didScroll = false;
      }
    }, 50);

    const jumbotron = document.getElementById('jumbotron');
    const transitionContainerJumbotron = document.getElementById('transform-header__jumbotron');
    const transitionContainerWorkflow = document.getElementById('process');
    const transitionStartPoint = Math.max(0, window.innerHeight * 0.25);
    const windowHeight = isNaN(window.innerHeight) ? window.outerHeight : window.innerHeight;
    const iOSChromeDetected = /CriOS/.test(navigator.userAgent);

    if (jumbotron && iOSChromeDetected) {
      jumbotron.style.height = `${windowHeight}px`;
    }

    const calculateNav = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollY < transitionStartPoint) {
        transitionContainerJumbotron?.classList.remove('transform-header__jumbotron--alt');
        transitionContainerWorkflow?.classList.remove('transform-header__workflow--alt');
      } else {
        transitionContainerJumbotron?.classList.add('transform-header__jumbotron--alt');
        transitionContainerWorkflow?.classList.add('transform-header__workflow--alt');
      }
    };

    return () => {
      clearInterval(scrollCheck);
    };
  });

  React.useEffect(() => {
    animateInvisible();
  }, []);

  const animateInvisible = () => {
    const invisible = document.querySelector('.invisible');
    const initialDuration = 3000;
    const continuousDuration = 5000;
    const fadeAmount = 0.2;
    const initialAnimation: { opacity: number[]; easing: string } = {
      opacity: [0.1, 0.8],
      easing: 'ease-in-out',
    };
    const continuousAnimation: { opacity: number[]; easing: string } = {
      opacity: [0.8, fadeAmount, 0.8],
      easing: 'ease-in-out',
    };
    invisible?.animate(initialAnimation, {
      duration: initialDuration,
      fill: 'forwards',
    });
    setTimeout(() => {
      for (let i = 0; i < 6; i++) {
        continuousAnimation.opacity = [0.8, fadeAmount + (i + 1) * 0.1, 0.8];
        invisible?.animate(continuousAnimation, {
          delay: continuousDuration * i,
          duration: continuousDuration,
        });
      }
    }, initialDuration);
  };

  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-133742543-1" />
        {/* prettier-ignore */}
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'UA-133742543-1');` }} />
        {/* prettier-ignore */}
        <script dangerouslySetInnerHTML={{ __html: `(function(h, o, t, j, a, r) { h.hj = h.hj || function() { (h.hj.q = h.hj.q || []).push(arguments); }; h._hjSettings = { hjid: 1173879, hjsv: 6 }; a = o.getElementsByTagName('head')[0]; r = o.createElement('script'); r.async = 1; r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv; a.appendChild(r); })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');`, }} />
        {/* prettier-ignore */}
        <meta name="description" content="Iglu Digital Agency is the part of Iglu that handles design, UX and front-end development." />
        <meta name="theme-color" content="#1396d4" />
        <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://da.iglu.ee" />
        <meta property="og:site_name" content="Iglu DA" />
        <meta property="og:title" content="Iglu Digital Agency" />
        {/* prettier-ignore */}
        <meta property="og:description" content="Iglu Digital Agency is the part of Iglu that handles design, UX and front-end development." />
        <meta property="og:image" content="https://da.iglu.ee/iglu.png" />
        <title>Iglu Digital Agency</title>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
        <link rel="manifest" href="manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* prettier-ignore */}
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,700&display=swap" />
        {/* eslint-disable-next-line */}
        {/* @ts-ignore */} {/* eslint-disable-next-line */} {/* prettier-ignore */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,700&display=swap" media="print" onLoad="this.media='all'" />
        <noscript>
          {/* prettier-ignore */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,700&display=swap" />
        </noscript>
      </Head>
      <Navigation headerLinks={headerLinks} />
      <main>
        <section className="banner">
          <h1 className="mt-0" data-aos="zoom-in">
            <strong>Tule ehita meiega koos</strong>
          </h1>
          <Separator />
          <p>
            Iglul on oma lugu. Lugu, mida kirjutavad meie inimesed. Kontoris ja spordiväljakul, metsas ja saunas, koos
            tahvli ees joonistades ja kooki küpsetades. Ühiselt.
          </p>

          <p>
            Meie klientideks on telekomid, pangad, idufirmad. Me valime need kliendid, kellel on tahe teha head asja.
            Need kliendid, kelle lahendustest saame kaasa rääkida, kasutada kaasaegset tehnoloogiat ja kirjutada puhast
            koodi. Ainult nii saame jätkada lugu tarkvrarast, mis päriselt töötab.{' '}
          </p>
        </section>

        <CardList />
        <Offers />
      </main>
      <Footer showInternalLinks={false} showExternalLinksName={false} />
    </>
  );
};

export default NewIndex;