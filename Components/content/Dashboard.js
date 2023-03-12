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

            <section className='flex sm:flex-row items-center  justify-center sm:items-start   flex-col sm:space-x-4 mt-4 w-full '>
                <div className=' sm:pl-2 flex flex-wrap space-y-4  pl-0 justify-center '>

                    <article className='sm:w-[38rem] w-[19rem] h-[20rem] bg-sidebar rounded-lg '>
                        <div className='flex justify-between items-center text-lightColor px-5 py-3 '>
                            <div className='capitalize text-[#fff]  sm:text-xl text-xs'> overview </div>
                            <div className='flex space-x-4 items-center  '> 
                                <div className='text-sm sm:flex items-center hidden'> <div className='w-[10px] h-[10px] rounded-full bg-selectedColor mr-1'> </div> incume </div>
                                <div className='text-sm sm:flex items-center hidden '> <div className='w-[10px] h-[10px] rounded-full bg-[#FFC01E]  mr-1'> </div> expenses </div>
                                <select className=' bg-transparent hover:border-selectedColor hover:shadow-selectedColor/40   rounded-lg py-2 px-1 bg-[#fff]/0 border outline-none text-sm cursor-pointer text-lightColor'>
                                    <option className='bg-[#fff]/0 text-selectedColor ' value={'monthly'}>monthly</option> 
                                    <option value={'monthly'}>weekly </option>
                                    <option value={'monthly'}>daily </option>
                                </select>
                            </div>
                        </div>
                    </article>


                    <div className='flex justify-start sm:items-center sm:flex-row flex-col  sm:space-x-2  sm:space-y-0 space-y-4  '>
                        <article className='w-[19rem] h-40 bg-sidebar rounded-lg  '>
                            chart   lines
                        </article>
                        <article className='w-[19rem] h-40 bg-sidebar rounded-lg  '>
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
