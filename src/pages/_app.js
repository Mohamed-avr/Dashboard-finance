import '@/styles/globals.css'
import AppContext from 'Components/AppContext';
import { useState } from 'react';


export default function App({ Component, pageProps }) {

  const [dashboard, setDashboard] = useState(true);
  const [transactions, setTransactions] = useState(false);
  const [walet, setWalet] = useState(false);
  const [analytic, setAnalytic] = useState(false);
  const [personal, setPersonal] = useState(false);
  const [message, setMessage] = useState(false);
  const [setting, setSetting] = useState(false);


  const textShow = "John \"Smith\"";
  console.log("John  smith ")

  const MoneyStateData = [
    {
      'title': 'balance',
      'icon': '/Icon/Balance.svg',
      'money': 44.88,
    },
    {
      'title': 'income',
      'icon': '/Icon/incume.svg',
      'money': 21.32,
    },
    {
      'title': 'expenses',
      'icon': '/Icon/expenses.svg',
      'money': 23.21,
    },
    {
      'title': 'savings',
      'icon': '/Icon/saving.svg',
      'money': 63.21,
    },
  ]

  const payment = [
    {
      'title': 'Account',
      'id': 1,
      'progress': {
        'goalNumber': '$10,000',
        'progressNumber': '$3,421',

      },
      'icon': '/iconsPayment/Account.svg',

    },
    {
      'title': 'Software',
      'id': 2,
      'progress': {
        'goalNumber': '$250',
        'progressNumber': '$241',

      },
      'icon': '/iconsPayment/Software.svg',
    },
    {
      'title': 'Rent house',
      'id': 3,
      'progress': {
        'goalNumber': '$52,000',
        'progressNumber': '$1,541',

      },
      'icon': '/iconsPayment/RentHouse.svg',
    },
    {
      'title': 'Food',
      'id': 4,
      'progress': {
        'goalNumber': '$1000',
        'progressNumber': '$141',
      },
      'icon': '/iconsPayment/Food.svg',
    },
  ]

  const avatars = [
    {
      "name": "Matheus Ferrero",
      "typeTransaction": "received" ,
      "id": 1,
      "value": "+$54.08",
      "avatar": "/photo1.png"
    }
    ,  {
      "name": "Floyd Miles",
      " typeTransaction": "send",
      "id": 2,
      "value": "-$39.65",
      "avatar": "/photo2.png"
    }
    ,  {
      "name": "Jerome Bell",
      " typeTransaction": "send" ,
      "id": 3,
      "value": "-$29.78",
      "avatar": "/photo3.png"
    }
    ,  {
      "name": "Ralph Edwards",
      " typeTransaction": "send" ,
      "id": 4,
      "value": "-$46.61",
      "avatar":"/photo4.png"
    }
  ]

  return (
    <AppContext.Provider value={
      {
        MoneyStateData , avatars
        , dashboard, setDashboard
        , transactions, setTransactions
        , walet, setWalet
        , analytic, setAnalytic
        , personal, setPersonal
        , message, setMessage
        , setting, setSetting
        , payment
      }} >
      <Component {...pageProps} />

    </AppContext.Provider>
  )
}
