import React from 'react';
import Image from 'next/image';
import { useState, useEffect, useContext, useRef } from 'react';
import AppContext from 'Components/AppContext';
import css from 'styled-jsx/css';

// an icon 




const Navbar = () => {

    const { sizeScreen } = useContext(AppContext);


    return (
        <nav className=' bg-navbar  py-2  text-white text-lightColor  fixed top-0 0 w-full  '>
            <div className=' flex justify-between px-4 '>
                <div className='flex justify-center  items-center '>
                    <div className=''>
                        <Image src={'/Icon/Logo.svg'} alt={'logo'} width={80} height={80} />
                    </div>
                    <h2 className='sm:flex hidden text-xl font-medium ml-20'>
                        Dashboard new
                    </h2>
                </div>

                <div className='flex items-center justify-between space-x-4'>

                    <div className='hover:bg-body-secound rounded-lg p-[7px] cursor-pointer'>
                    <Image src={'/notifications.svg'} alt={'logo'} width={24} height={24} /> 
                        
                    </div>
                    <form method='get' className='flex'>

                        <input className=' hidden sm:flex bg-[transparent] hover:text-[#fff] bg-body text-sm px-2 py-2 outline-none rounded-lg' type='text' id='inputText' placeholder='search...' />

                        <div className='sm:hidden  hover:bg-body-secound rounded-lg p-[7px] cursor-pointer'>
                            <input className=' hidden bg-[transparent] hover:text-[#fff] bg-body-secound text-sm px-2 py-2 outline-none rounded-lg' type='text' id='inputText' placeholder='search...' />
                            <Image src={'/search.svg'} width={22} height={22} alt={'profileImage'} />
                        </div>


                    </form>

                    <div>
                        <Image className=' rounded-[6px] ' src={'/profilePic.jpg'} width={35} height={35} alt={'profileImage'} />
                    </div>


                </div>
            </div>
        </nav>
    );
}

export default Navbar;
