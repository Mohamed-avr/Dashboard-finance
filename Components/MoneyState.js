import Image from "next/image";
import { useContext } from 'react';
import AppContext from 'Components/AppContext';

const MoneyState = (prop) => {

    return (
        <>
              <div className=' sm:w-[14rem] w-[19rem] h-[6rem] hover:shadow-xl active:border-selectedColor hover:active:border-2 transition-all cursor-pointer bg-sidebar  rounded-lg  m-2 flex items-center  '>
                  <div className=" w-[40%] flex justify-center  ">
                      <div className=" bg-body-secound p-2 rounded-lg ">
                      <Image src={prop.sendIcon} alt={''} width={24} height={24}  />
                      </div>
                  </div>
                  <div className="w-[60%]">
                        <h4 className="text-sm text-lightColor "> {prop.sendTitle} </h4>
                        <h2 className="text-[#fff] bold-text text-xl mt-1 "> ${prop.sendMoney}</h2>
                  </div>
              </div>
        </>
    );
}

export default MoneyState;
