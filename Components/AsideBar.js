import Image from "next/image";
import NavElement from "./navElement";
import { useState , useContext } from "react";
import AppContext from "./AppContext";
import css from 'styled-jsx/css';



const AsideBar = () => {
  const { dashboard ,setDashboard , transactions , setTransactions , walet , setWalet , analytic , setAnalytic , personal , setPersonal , message , setMessage , setting , setSetting} = useContext(AppContext);




  const handlerDash = (e) => {

      console.log(dashboard  , transactions , walet , analytic , personal )
    //  change the state of the dashboard to true 
     { dashboard ? setDashboard(false) : setDashboard(true)  }

     // change other states 
     setTransactions(false);
     setWalet(false);
     setAnalytic(false);
     setPersonal(false);
     setMessage(false);
     setSetting(false);

    //
}

   

  const handlerTrans = (e) => {
    console.log(dashboard  , transactions , walet , analytic , personal )
  //  change the state of the dashboard to true 
   { transactions ? setTransactions(false) : setTransactions(true)  }
   // change other states 
     setDashboard(false);
     setWalet(false);
     setAnalytic(false);
     setPersonal(false);
     setMessage(false);
     setSetting(false);

 }

   const handlerWalet = (e) => {
    console.log(dashboard  , transactions , walet , analytic , personal )
  //  change the state of the dashboard to true 
   { walet ? setWalet(false) : setWalet(true)  }
   // change other states 
     setDashboard(false);
     setTransactions(false);
     setAnalytic(false);
     setPersonal(false);
     setMessage(false);
     setSetting(false);

 }
 const handlerAnalytics = (e) => {
  console.log(dashboard  , transactions , walet , analytic , personal )
//  change the state of the dashboard to true 
 { analytic ? setAnalytic(false) : setAnalytic(true)  }
 // change other states 
   setDashboard(false);
   setTransactions(false);
   setWalet(false);
   setPersonal(false);
   setMessage(false);
   setSetting(false);

}

const handlerPersonal = (e) => {
  console.log(dashboard  , transactions , walet , analytic , personal )
//  change the state of the dashboard to true 
 { personal ? setPersonal(false) : setPersonal(true)  }
 // change other states 
   setDashboard(false);
   setTransactions(false);
   setWalet(false);
   setAnalytic(false);
   setMessage(false);
   setSetting(false);

}
 
const handlerMessage = (e) => {
  console.log(dashboard  , transactions , walet , analytic , personal , message ,setting )
//  change the state of the dashboard to true 
 { message ? setMessage(false) : setMessage(true)  }
 // change other states 
   setDashboard(false);
   setTransactions(false);
   setWalet(false);
   setAnalytic(false);
   setPersonal(false);
   setSetting(false);

}

 
const handlerSetting = (e) => {
  console.log(dashboard  , transactions , walet , analytic , personal , message ,setting )
//  change the state of the dashboard to true 
 { setting ? setSetting(false) : setSetting(true)  }
 // change other states 
   setDashboard(false);
   setTransactions(false);
   setWalet(false);
   setAnalytic(false);
   setPersonal(false);
   setMessage(false)

}
const links = {
  dashboard : {
    Name : 'dashboard', 
    icon : '/Icon/Dashboard.svg',
  } ,
  transactions : {
    Name : 'transactions', 
    icon : '/Icon/trans.svg',
  } ,
  walet : {
    Name : 'walet', 
    icon : '/Icon/wallet-2.svg',
  } ,
  analytic : {
    Name : 'Analytics', 
    icon : '/Icon/Analytics.svg',
  } ,
  personal : {
    Name : 'personal', 
    icon : '/Icon/Personal.svg',
  } ,
  message : {
    Name : 'message', 
    icon : '/Icon/message.svg',
  } ,
  setting : {
    Name : 'setting', 
    icon : '/Icon/setting.svg',
  } ,
}
    return (
       <aside className='fixed left-0 top-[52px] bg-sidebar sm:w-[10rem] w-[3rem] h-full '>
        <ul className="mt-10 text-[#A9A9A9] space-y-2 ">
           
          {/*  dash */}
            <li id="dashoard"  onClick={handlerDash}  className={`${ dashboard ?'bg-selectedColor/10 cursor-pointer text-selectedColor w-full sm:w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center' : 'cursor-pointer w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center'}`}>
                <Image className="selectedColor " src={links.dashboard.icon} width={'15'} height={'15'} alt={''} />
                <h4 className="ml-2 sm:flex hidden"> {links.dashboard.Name}</h4>
               { dashboard  ?   <span className=" absolute w-[5px] h-4 rounded-l  bg-[#FFC01E] right-0 "></span> : ''}
            </li> 
        

            {/* transactions */}
            <li id="handlerTrans"  onClick={handlerTrans} className={`${ transactions ?'bg-selectedColor/10 cursor-pointer text-selectedColor w-full sm:w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center' : 'cursor-pointer w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center'}`}>
                <Image className="selectedColor " src={links.transactions.icon} width={'15'} height={'15'} alt={''} />
                <h4 className="ml-2 sm:flex hidden"> {links.transactions.Name}</h4>
                { transactions ?   <span className=" absolute w-[5px] h-4 rounded-l  bg-[#FFC01E] right-0 "></span> : ''}
            </li>

             {/* walet */}
            <li id="handlerWalet"  onClick={handlerWalet} className={`${ walet ?'bg-selectedColor/10 cursor-pointer text-selectedColor w-full sm:w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center' : 'cursor-pointer w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center'}`}>
                <Image className="selectedColor " src={links.walet.icon} width={'15'} height={'15'} alt={''} />
                <h4 className="ml-2 sm:flex hidden"> {links.walet.Name}</h4>
                { walet ?   <span className=" absolute w-[5px] h-4 rounded-l bg-[#FFC01E] right-0 "></span> : ''}
            </li>

            <li id="Analytics"  onClick={handlerAnalytics} className={`${ analytic ?'bg-selectedColor/10 cursor-pointer text-selectedColor w-full sm:w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center' : 'cursor-pointer w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center'}`}>
                <Image className="selectedColor " src={links.analytic.icon} width={'15'} height={'15'} alt={''} />
                <h4 className="ml-2 sm:flex hidden"> {links.analytic.Name}</h4>
                { analytic ?   <span className=" absolute w-[5px] h-4 rounded-l bg-[#FFC01E] right-0 "></span> : ''}
            </li>
            <li id="Personal"  onClick={handlerPersonal} className={`${ personal ?'bg-selectedColor/10 cursor-pointer text-selectedColor w-full sm:w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center' : 'cursor-pointer w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center'}`}>
                <Image className="selectedColor " src={links.personal.icon} width={'15'} height={'15'} alt={''} />
                <h4 className="ml-2 sm:flex hidden"> {links.personal.Name}</h4>
                { personal ?   <span className=" absolute w-[5px] h-4 rounded-l bg-[#FFC01E] right-0 "></span> : ''}
            </li>
            <li id="message"  onClick={handlerMessage} className={`${ message ?'bg-selectedColor/10 cursor-pointer text-selectedColor w-full sm:w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center' : 'cursor-pointer w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center'}`}>
                <Image className="selectedColor " src={links.message.icon} width={'15'} height={'15'} alt={''} />
                <h4 className="ml-2 sm:flex hidden"> {links.message.Name}</h4>
                { message ?   <span className=" absolute w-[5px] h-4 rounded-l bg-[#FFC01E] right-0 "></span> : ''}
            </li>
            <li id="setting"  onClick={handlerSetting} className={`${ setting ?'bg-selectedColor/10 cursor-pointer text-selectedColor w-full sm:w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center' : 'cursor-pointer w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center'}`}>
                <Image className="selectedColor " src={links.setting.icon} width={'15'} height={'15'} alt={''} />
                <h4 className="ml-2 sm:flex hidden"> {links.setting.Name}</h4>
                { setting ?   <span className=" absolute w-[5px] h-4 rounded-l bg-[#FFC01E] right-0 "></span> : ''}
            </li>
         

        </ul>

       </aside>
    );
}

export default AsideBar;
