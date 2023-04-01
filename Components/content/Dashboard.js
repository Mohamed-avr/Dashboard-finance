import MoneyState from 'Components/MoneyState';
import { useContext } from 'react';
import AppContext from 'Components/AppContext';
import Payment from './Payment';
import ChartElement from 'public/chartElement';
import Chart from 'Components/Chart';
import Image from 'next/image';
import MoneyTransaction from 'Components/MoneyTransaction';
import Coloumns from 'Components/Coloumns';



const Dashboard = () => {

    // import data 
    const { MoneyStateData , payment , avatars } = useContext(AppContext);
    // const { payment } = useContext(AppContext);


    return (
        <section className='sm:m-10  sm:w-[1400px]  '>

            <div className=' flex sm:justify-start justify-center  items-center  flex-wrap  mt-8 sm:mt-0 '>
                {MoneyStateData.map((e, i) => {
                    return (<MoneyState key={i} sendTitle={e.title} sendIcon={e.icon} sendMoney={e.money} />)
                })}
            </div>

            <section className='flex sm:flex-row items-center  sm:ml-[120px]  justify-center  sm:items-start flex-col sm:space-x-4 sm:space-y-0 space-y-4  mt-4 sm:w-2/4 w-full '>
                <div className=' sm:pl-2 flex flex-wrap space-y-4  pl-0 sm:justify-start justify-center '>
                    {/* Chart Graph */}
                    <article className=' sm:w-[38rem] w-[19rem] sm:h-[20rem] h-[22rem] bg-sidebar rounded-lg  flex flex-col'>
                        <div className='flex justify-between items-center text-lightColor px-5 py-3 '>
                            <div className='capitalize text-[#fff]  sm:text-xl '> overview </div>

                            <div className='flex space-x-4 items-center  '>
                                <div className='text-xs sm:flex items-center hidden'> <div className='w-[10px] h-[10px] rounded-full bg-selectedColor mr-1'> </div> incume </div>
                                <div className='text-xs sm:flex items-center hidden '> <div className='w-[10px] h-[10px] rounded-full bg-[#FFC01E]  mr-1'> </div> expenses </div>
                                <select className=' bg-transparent hover:border-selectedColor hover:shadow-selectedColor/40   rounded-lg py-2 px-1 bg-[#fff]/0 border outline-none text-sm cursor-pointer text-lightColor'>
                                    <option className='bg-[#fff]/0 text-selectedColor ' value={'monthly'}>monthly</option>
                                    <option value={'monthly'}>weekly </option>
                                    <option value={'monthly'}>daily </option>
                                </select>
                            </div>
                        </div>
                        <div className=' z-0  h-[30rem] '>
                            <Chart />
                        </div>
                        <div className='flex space-x-4 items-center text-lightColor  mt-7 my-10 ml-32 sm:hidden '>
                            <div className='text-xs flex items-center '> <div className='w-[10px] h-[10px] rounded-full bg-selectedColor mr-1'> </div> incume </div>
                            <div className='text-xs flex items-center '> <div className='w-[10px] h-[10px] rounded-full bg-[#FFC01E]  mr-1'> </div> expenses </div>
                        </div>
                    </article>


                    <div className='flex justify-start sm:items-start sm:flex-row flex-col  sm:space-x-2  sm:space-y-0 space-y-4  '>

                        {/* Chart coloumns */}
                        <article className='w-[19rem] pb-4 bg-sidebar rounded-lg  text-selectedColor  flex-col flex '>
                        <div className=' justify-between items-center text-lightColor px-5 py-3  flex   '>
                            <div className='capitalize text-[#fff]  sm:text-xl '> activity </div>

                            <div className='flex space-x-4  items-center   '>
                                <div className='text-xs sm:flex items-center hidden '> <div className='w-[10px] h-[10px] rounded-full bg-selectedColor mr-1'> </div> incume </div>
                                <div className='text-xs sm:flex items-center hidden '> <div className='w-[10px] h-[10px] rounded-full bg-[#FFC01E]  mr-1'> </div> expenses </div>
                            </div>
                        </div>

                        <div className=' z-0   overflow-hidden '>
                        <Coloumns />
                        </div>

                        </article>


                        {/* Chart lines */}
                        <article className='w-[19rem] h-auto bg-sidebar rounded-lg py-4 pb-5 '>
                            <h2 className='ml-4 font-medium text-white text-[#fff] '> Payment </h2>
                            {payment.map(e => {
                                return (<Payment key={e.id} sendIcon={e.icon} sendTitle={e.title} sendProgress={e.progress} />)
                            })}
                        </article>

                    </div>
                </div>
                <div className='w-[19rem] h-auto flex flex-col space-y-3 '>
                    <div className=' flex flex-col justify-center items-center pb-4 bg-navbar w-[19rem]  rounded-lg  '>
                        <div className='flex justify-between w-full px-3 my-3'>
                            <div className='capitalize text-[#fff]  sm:text-xl '> credit card </div>
                            <button className=' bg-body-secound px-2 py rounded-lg flex justify-start items-center text-selectedColor transition-all  hover:bg-selectedColor hover:text-[#fff] '>+</button>
                        </div>
                        <article className=' overflow-hidden relative rounded-lg text-[#fff]  bg-body-secound w-[17rem] h-[12rem] mt-4  '>
                           
                                 <div className='p-3'>
                                    <h4 className=' uppercase text-lg '> LOGO</h4> 
                                 </div>

                                 <div className='mt-2 p-3'>
                                    <h4 className=' uppercase text-base'> 3475 7381 3759 ****</h4>
                                 </div>

                                 <div className=' absolute flex justify-between  items-center px-3   left-0 bottom-0  w-full h-[4.5rem] bg-lightColor/20 '>
                                 <div>
                                    <h6 className=' uppercase  text-[12px] text-lightColor/40 '>Total balance</h6>
                                    <h4 className='text-base'>3,215,352 USD</h4>
                                 </div>
                                 <div className='text-right' >
                                 <h6 className=' uppercase  text-[12px] text-lightColor/40 '>EXP . date</h6>
                                    <h4 className='text-base'>04/24</h4>
                                 </div>
                                 </div>
                                
                        </article>
                    </div>

                    <div className=' flex flex-col justify-center items-center pb-4 bg-navbar w-[19rem]  rounded-lg  '>
                        <div className='flex justify-between w-full px-3 my-3'>
                            <div className='capitalize text-[#fff]  sm:text-xl '> recent transactions </div>
                            <button className=' text-xs py rounded-lg flex justify-start items-center text-selectedColor transition-all hover:text-selectedColor/75 '>see  all</button>
                        </div>
                        <article className=' overflow-hidden relative rounded-lg text-[#fff]   w-[17rem]  mt-2  '>
                           {avatars.map((e) => {
                            return( <MoneyTransaction key={e.id} sendId={e.id} sendName={e.name} sendTypeTransaction={e.typeTransaction} sendValue={e.value} sendAvatar={e.avatar} /> )
                           })}        
                        </article>
                    </div>



                </div>
            </section>

        </section>
    );
}

export default Dashboard;
