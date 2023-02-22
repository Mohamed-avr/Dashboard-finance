import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from 'Components/Layout'
import { useState , useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


   const [resposnive , setResponsive] = useState(false);


  useEffect(() => {
    if(window.innerWidth > 600) {
      setResponsive(true) 
    } else {
      setResponsive(false)
    }
   console.log(resposnive)
  }, [setResponsive]);
     
  return (
    <>
     <Layout>
    
       </Layout>
    </>
  )
}
