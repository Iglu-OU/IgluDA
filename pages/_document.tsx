import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,700&display=swap"
        />
        {/* eslint-disable-next-line */}
        {/* @ts-ignore */} {/* eslint-disable-next-line */} {/* prettier-ignore */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,700&display=swap" media="print" onLoad="this.media='all'" />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,700&display=swap"
          />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
