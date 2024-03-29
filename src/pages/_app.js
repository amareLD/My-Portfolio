import '@/styles/globals.css';
import { Head } from 'next/document';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  return (
   <> <Head>   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link rel="icon" href="/favicon.ico" /></Head>
   <main className={`${montserrat.variable}font-mont`}>
     <Component {...pageProps} />
   </main></>
  );
}
