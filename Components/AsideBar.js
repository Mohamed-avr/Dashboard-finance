import Image from "next/image";
import NavElement from "./navElement";
import { useState , useContext } from "react";
import AppContext from "./AppContext";



const AsideBar = () => {
  const { dashboard ,setDashboard , transactions , setTransactions  , walet , setWalet , analyitic , setAnalytic , personal , setPersonal} = useContext(AppContext);




  const handlerDash = (e) => {

      console.log(dashboard  , transactions , walet , analyitic , personal )
    //  change the state of the dashboard to true 
     { dashboard ? setDashboard(false) : setDashboard(true)  }

     // change other states 
     setTransactions(false);
     setWalet(false);
     setAnalytic(false);
     setPersonal(false);

    //
     if(dashboard) {  

      if(dashboard == true) {
        e.target.classList.add('bg-selectedColor/10');
        e.target.parentElement.lastChild.lastChild.classList.remove('hidden');
      }
     else if (dashboard == false) {
     e.target.classList.remove('bg-selectedColor/10');
     e.target.parentElement.lastChild.lastChild.classList.add('hidden');
     }
     
   }}

   

  const handlerTrans = (e) => {
    console.log(dashboard  , transactions , walet , analyitic , personal )
  //  change the state of the dashboard to true 
   { transactions ? setTransactions(false) : setTransactions(true)  }
   // change other states 
   setDashboard(false);
     setWalet(false);
     setAnalytic(false);
     setPersonal(false);
  //
   if(!transactions) {  
    e.target.classList.add('bg-selectedColor/10');
   e.target.parentElement.lastChild.lastChild.classList.remove('hidden');
   } else {
    e.target.classList.remove('bg-selectedColor/10');
    e.target.parentElement.lastChild.lastChild.classList.add('hidden');
   }
 }
 
const links = {
  dashboard : {
    Name : 'dashboard', 
    icon : '/Icon/presention-chart.svg',
  } ,
  transactions : {
    Name : 'transactions', 
    icon : '/Icon/presention-chart.svg',
  } ,
}
    return (
       <aside className='fixed left-0 top-[52px] bg-sidebar w-[10rem] h-full '>
        <ul className="mt-10 text-selectedColor space-y-2 ">
           
          {/*  dash */}
           <li id="dashoard"  onClick={handlerDash} className=" bg-selectedColor/10 cursor-pointer w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center">
                <Image className="selectedColor " src={links.dashboard.icon} width={'15'} height={'15'} alt={''} />
                <a className="ml-2" href="/"> {links.dashboard.Name}</a>
               <span className=" absolute w-1 h-2  bg-[#ff0] right-0 "></span> 
            </li>

            {/* transactions */}
            <li id="handlerTrans"  onClick={handlerTrans} className=" bg-selectedColor/10 cursor-pointer w-[10rem] mt-2 py-3 pl-4 hover: text-[12px]  text-left relative flex items-center">
                <Image className="selectedColor " src={links.transactions.icon} width={'15'} height={'15'} alt={''} />
                <a className="ml-2" href="/"> {links.transactions.Name}</a>
                <span className=" absolute w-1 h-2  bg-[#ff0] right-0 "></span>
            </li>
        </ul>

       </aside>
    );
}

export default AsideBar;
