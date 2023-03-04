import MoneyState from 'Components/MoneyState';
import { useContext } from 'react';
import AppContext from 'Components/AppContext';



const Dashboard = () => {
    const { MoneyStateData } = useContext(AppContext);

    console.log(MoneyStateData)
    return (
        <section className='sm:m-10   '>
            <div className=' flex sm:justify-start justify-center  items-center  flex-wrap  mt-8 sm:mt-0 '>

                {MoneyStateData.map((e, i) => {
                    return (<MoneyState key={i} sendTitle={e.title} sendIcon={e.icon} sendMoney={e.money} />)
                })}

              
            </div>

            <section className='flex sm:flex-row items-center sm:items-start   flex-col sm:space-x-4 mt-4 w-full '>
                    <div className=' sm:pl-2 space-y-4  justify-center'>
                        <article className='sm:w-[38rem] w-full h-[20rem] bg-sidebar rounded-lg text-selectedColor  '>
                                chart  
                        </article>
                        <div className='flex justify-start sm:items-center sm:flex-row flex-col  sm:space-x-4  sm:space-y-0 space-y-4  '>
                            <article className='w-[19rem] h-40 bg-sidebar rounded-lg  '>
                            chart   lines
                            </article>
                            <article className='w-[18rem] h-40 bg-sidebar rounded-lg  '>
                            chart  
                            </article>

                        </div>
                    </div>
                    <div className='  bg-[#f0f] '>
                        <article className=' w-[22rem]  h-[10rem]' >

                        </article>
                    </div>
                </section>

        </section>
    );
}

export default Dashboard;
