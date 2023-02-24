// import { Inter } from '@next/font/google'
import Layout from 'Components/Layout'
import {  useEffect, useContext, use } from 'react';
import AppContext from 'Components/AppContext';

// const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const { sizeScreen, setSizeScreen } = useContext(AppContext)

// hamdling the size event 
  useEffect(() => {
    if (window.screen.width <= 600) {
      setSizeScreen(true)
    } else {
      setSizeScreen(false);
    }
  }, [sizeScreen]);


// index page     
  return (
    <>
      <Layout>
    
      </Layout>
    </>
  )
}
