// import { Inter } from '@next/font/google'
import Layout from 'Components/Layout'
import {  useEffect, useContext, use } from 'react';
import AppContext from 'Components/AppContext';
import css from 'styled-jsx/css';

// const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  const { dashboard ,setDashboard , transactions , setTransactions , walet , setWalet , analytic , setAnalytic , personal , setPersonal , message , setMessage , setting , setSetting} = useContext(AppContext);
  const defaultContent = dashboard == false & transactions == false & walet ==false  &  analytic == false & personal == false & message == false &  setting == false ; 

  return (
    <>
      <Layout>
        <main className='sm:pt-[6rem] pl-[48px] pt-[54px] sm:pl-[10rem] bg-body h-screen'> 

        {  dashboard ? <div className='  text-selectedColor m-[10rem]  text-3xl '>  dashboard content </div>:  ' '}
        {  transactions ? <div className='text-selectedColor m-[10rem]  text-3xl '>  Trans content </div>:  ' '}
        {  walet ? <div className='text-selectedColor m-[10rem]  text-3xl'> walet content </div>:  ' '}
        {  analytic ? <div className='text-selectedColor m-[10rem]  text-3xl '>  analyitic content </div>:  ' '}
        {  personal ? <div className='text-selectedColor m-[10rem]  text-3xl '>  personal content </div>:  ' '}
        {  message ? <div className='text-selectedColor m-[10rem]  text-3xl '>  message content </div>:  ' '}
        {  setting ? <div className='text-selectedColor m-[10rem]  text-3xl '>  setting content </div>:  ' '}
        
        {  defaultContent ?  setDashboard(true) : ''}
       
        </main>
      </Layout>
    </>
  )
}
