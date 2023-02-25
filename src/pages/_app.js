import '@/styles/globals.css'
import AppContext from 'Components/AppContext';
import { useState } from 'react';


export default function App({ Component, pageProps }) {
 
  const [ dashboard , setDashboard ] = useState(true);
  const [ transactions , setTransactions ] = useState(false);
  const [ walet , setWalet ] = useState(false);
  const [ analyitic , setAnalytic ] = useState(false);
  const [ personal , setPersonal ] = useState(false);




  return (
    <AppContext.Provider value={{dashboard,setDashboard , transactions , setTransactions, walet , setWalet , analyitic ,setAnalytic , personal , setPersonal }} >
      <Component {...pageProps} />

    </AppContext.Provider>
  )
}
