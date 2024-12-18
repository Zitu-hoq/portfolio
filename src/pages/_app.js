import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { DataProvider } from '../context/DataContext'
 
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})
 
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Zitu Hoque&apos;s Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      
      <main className={`${montserrat.variable} font-mont text-dark dark:text-light bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar/>
        <AnimatePresence mode="wait">
          <DataProvider>
            <Component key={router.asPath} {...pageProps} />
          </DataProvider>
        </AnimatePresence>
        <Footer/>
      </main>
    </>
  )
}
