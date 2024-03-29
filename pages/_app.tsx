import Aos from 'aos';
import { AppProps } from 'next/app';
import React from 'react';

import 'aos/dist/aos.css';
import '../styles/main.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    Aos.init({ once: true });
  });

  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
};

export default App;
