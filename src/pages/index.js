// import { Inter } from '@next/font/google'
import Layout from 'Components/Layout'
import {  useEffect, useContext, use } from 'react';
import AppContext from 'Components/AppContext';
import css from 'styled-jsx/css';

// const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  const { dashboard ,setDashboard , transactions , setTransactions , walet , setWalet , analytic , setAnalyitic , personal , setPersonal} = useContext(AppContext);
  // const { transactions ,setTransactions} = useContext(AppContext);
  // const {  walet , setWalet} = useContext(AppContext);
  // const { analyitic ,setAnalyitic} = useContext(AppContext); // personal
  // const { personal ,setPersonal} = useContext(AppContext);

// index page   

// const defaultContent  = () => {
//   if ( dashboard , transactions , walet , analyitic , personal == false) {
//     return(dashboard);
//   }  else {
//     return(dashboard);
//   }
// }


  return (
    <>
      <Layout>
        <main className='sm:pt-[6rem] pl-[48px] pt-[54px] sm:pl-[10rem] bg-body h-screen'> 

        {  dashboard ? <div className='  text-selectedColor m-[10rem]  text-3xl '>  dashboard content </div>:  ' '}
        {  transactions ? <div className='text-selectedColor m-[10rem]  text-3xl '>  Trans content </div>:  ' '}
        {  walet ? <div className='text-selectedColor m-[10rem]  text-3xl'> walet content </div>:  ' '}
        {  analytic ? <div className='text-selectedColor m-[10rem]  text-3xl '>  analyitic content </div>:  ' '}
        {  personal ? <div className='text-selectedColor m-[10rem]  text-3xl '>  personal content </div>:  ' '}
        
      
       
        </main>
      </Layout>
    </>
  )
}
