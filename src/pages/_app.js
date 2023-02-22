import '@/styles/globals.css'
import AppContext from 'Components/AppContext';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
 
  const [ sizeScreen , setSizeScreen ] = useState(false)
  return (
    <AppContext.Provider value={{sizeScreen,setSizeScreen}} >
      <Component {...pageProps} />

    </AppContext.Provider>
  )
}
