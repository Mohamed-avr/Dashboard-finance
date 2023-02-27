import '@/styles/globals.css'
import AppContext from 'Components/AppContext';
import { useState } from 'react';


export default function App({ Component, pageProps }) {
 
  const [ dashboard , setDashboard ] = useState(true);
  const [ transactions , setTransactions ] = useState(false);
  const [ walet , setWalet ] = useState(false);
  const [ analytic , setAnalytic ] = useState(false);
  const [ personal , setPersonal ] = useState(false);
  const [ message , setMessage ] = useState(false);
  const [ setting , setSetting ] = useState(false);




  return (
    <AppContext.Provider value={{dashboard,setDashboard , transactions , setTransactions, walet , setWalet , analytic ,setAnalytic , personal , setPersonal , message , setMessage , setting , setSetting}} >
      <Component {...pageProps} />

    </AppContext.Provider>
  )
}
