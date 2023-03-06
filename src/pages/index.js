// import { Inter } from '@next/font/google'
import Layout from 'Components/Layout'
import {  useEffect, useContext, use } from 'react';
import AppContext from 'Components/AppContext';
import css from 'styled-jsx/css';
import Dashboard from 'Components/content/Dashboard';
import Transactions from 'Components/content/Transactions';
import Walet from 'Components/content/Walet';
import Analytics from 'Components/content/Analytics';
import Personal from 'Components/content/Personal';
import Message from 'Components/content/Message';
import Setting from 'Components/content/Setting';

// const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  const { dashboard ,setDashboard , transactions , setTransactions , walet , setWalet , analytic , setAnalytic , personal , setPersonal , message , setMessage , setting , setSetting} = useContext(AppContext);
  const defaultContent = dashboard == false & transactions == false & walet ==false  &  analytic == false & personal == false & message == false &  setting == false ; 

  return (
    <>
      <Layout>
        <main className='sm:pt-[3rem] pt-[54px] pl-[48px]  sm:pl-[10rem] bg-body  pb-10 '> 

        {  dashboard ? <Dashboard/> :  ' '}
        {  transactions ? <Transactions/> :  ' '}
        {  walet ? <Walet/> :  ' '}
        {  analytic ? <Analytics/> :  ' '}
        {  personal ? <Personal/>:  ' '}
        {  message ? <Message/> :  ' '}
        {  setting ?<Setting/>:  ' '}
        
        {  defaultContent ?  setDashboard(true) : ''}
       
        </main>
      </Layout>
    </>
  )
}
