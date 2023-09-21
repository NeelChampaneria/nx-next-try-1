import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
// import Error401 from './../../../libs/template/src/src/pages/401';
// import Error401 from '@template/src/src/pages/401';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to apps/admin!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
        {/* <Error401 /> */}
      </main>
    </>
  );
}

export default CustomApp;
