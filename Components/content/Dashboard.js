import MoneyState from 'Components/MoneyState';
import { useContext } from 'react';
import AppContext from 'Components/AppContext';


 
const Dashboard = () => {
    const { MoneyStateData} = useContext(AppContext);

    console.log(MoneyStateData)
    return (
        <section className='sm:m-10 flex   '>
           <div className=' flex sm:justify-start justify-center  items-center  flex-wrap  mt-8 sm:mt-0 '>

            { MoneyStateData.map( (e) => {
                return (<MoneyState sendTitle={e.title} sendIcon={e.icon} sendMoney={e.money} />)
            }) }
              
           </div>
        </section>
    );
}

export default Dashboard;
