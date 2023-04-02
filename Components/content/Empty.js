
import AppContext from 'Components/AppContext';
import { useRouter } from 'next/router'
import { useContext } from 'react';



export default function Empty(props) {

    const { dashboard, setDashboard, setTransactions, setWalet, setAnalytic, setPersonal, setMessage, setSetting } = useContext(AppContext);
 

    const handelButton = () => {
        { dashboard ? setDashboard(false) : setDashboard(true) }

        // change other states 
        setTransactions(false);
        setWalet(false);
        setAnalytic(false);
        setPersonal(false);
        setMessage(false);
        setSetting(false);
    }

    return (
        <div className='h-screen bg-body-secound flex justify-center items-center -mt-16 '>
          <div className='flex flex-col items-center sm:px-0 px-10 text-center'>
          <h2 className=' text-3xl capitalize text-[#fff] '> {props.sendPageName} is empty </h2>
            <p className='text-[#fff]/75 text-base mt-2 font-normal '> this page is empty right now , it's just a test for that there is no content here</p>
            <button className=' cursor-pointer  text-selectedColor hover:text-selectedColor/80 mt-3 ' onClick={handelButton} >
                Back to Dashboard
            </button>
          </div>
        </div>
    )
}

