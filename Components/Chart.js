import Image from "next/image";

const Chart = () => {
    return (
        <div className='flex justify-between mt-5  w-full flex-row px-4 z-10 overflow-hidden  '>
            <div className="space-y-8 text-xs -mt-2 text-lightColor ">
                <h5> $2000 </h5>
                <h5> $1500 </h5>
                <h5> $1000 </h5>
                <h5> $500 </h5>
            </div>

            <div className=" flex flex-col relative ">
               <div className="relative  ">
                <button className=" top-2/4 left-2/4 -ml-[40%] -mt-[10%] absolute text-left bg-selectedColor hover:bg-[#29af4f] rounded-[8px] py-2 pl-3 pr-5 ">
                    <h3 className="text-xs font-thin text-[#fff]">income</h3>
                    <h5 className="text-sm font-medium text-[#fff]">224.00</h5>
                    
                </button>
                   <Image  src={'/Charts.png'} width={530} height={300} alt={"charts"} />
               </div>
         <div className="flex space-x-6 text-xs mt-2 text-lightColor">
                <h5> jan </h5>
                <h5> Feb </h5>
                <h5> Mar </h5>
                <h5> Apr </h5>
                <h5> May </h5>
                <h5> jun </h5>
                <h5> jul </h5>
                <h5> Aug </h5>
                <h5> Sep </h5>
                <h5> Oct </h5>
                <h5> Nov </h5>
                <h5> Dec </h5>
         </div>
            </div>

        </div>
    );
}

export default Chart;
