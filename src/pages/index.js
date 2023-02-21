import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from 'Components/Layout'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


   const [resposnive , setResponsive] = useState(false);
  return (
    <>
     <Layout>
    
       </Layout>
    </>
  )
}
