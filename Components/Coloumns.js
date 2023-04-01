import Image from "next/image"
export default function Coloumns() {
    return (
        <div className='flex justify-between mt-5  w-full flex-row px-4 z-10 relative  '>
            <div className="space-y-8 text-xs -mt-2 text-lightColor ">
                <h5> $3k </h5>
                <h5> $2k </h5>
                <h5> $1k </h5>
                <h5> $0 </h5>
            </div>

            <div>
                <div className=" w-[15rem] h-[12rem]  -mt-5 flex space-x-9 ">
                   <div className="h-full w-[1px]  border-[1px] border-dashed border-lightColor/20 round relative ml-2 mt-[0.5px]">
                    <div className=" bg-[#FFC01E]  absolute  bottom-0 -left-[4px]  w-2 h-[20%] z-10 "></div>
                    <div className=" bg-selectedColor  absolute bottom-0 -left-[4px] rounded-[2px] w-2 h-[40%] z-0 "></div>
                   </div>
                   <div className="h-full w-[1px]  border-[1px] border-dashed border-lightColor/20 round relative ml-2 mt-[0.5px]">
                    <div className=" bg-[#FFC01E]  absolute  bottom-0 -left-[4px]  w-2 h-[10%] z-10 "></div>
                    <div className=" bg-selectedColor  absolute bottom-0 -left-[4px] rounded-[2px] w-2 h-[80%] z-0 "></div>
                   </div>
                   <div className="h-full w-[1px]  border-[1px] border-dashed border-lightColor/20 round relative ml-2 mt-[0.5px]">
                    <div className=" bg-[#FFC01E]  absolute  bottom-0 -left-[4px]  w-2 h-[20%] z-10 "></div>
                    <div className=" bg-selectedColor  absolute bottom-0 -left-[4px] rounded-[2px] w-2 h-[40%] z-0 "></div>
                   </div>
                   <div className="h-full w-[1px]  border-[1px] border-dashed border-lightColor/20 round relative ml-2 mt-[0.5px]">
                    <div className=" bg-[#FFC01E]  absolute  bottom-0 -left-[4px]  w-2 h-[40%] z-10 "></div>
                    <div className=" bg-selectedColor  absolute bottom-0 -left-[4px] rounded-[2px] w-2 h-[55%] z-0 "></div>
                   </div>
                   <div className="h-full w-[1px]  border-[1px] border-dashed border-lightColor/20 round relative ml-2 mt-[0.5px]">
                    <div className=" bg-[#FFC01E]  absolute  bottom-0 -left-[4px]  w-2 h-[35%] z-10 "></div>
                    <div className=" bg-selectedColor  absolute bottom-0 -left-[4px] rounded-[2px] w-2 h-[65%] z-0 "></div>
                   </div>
                   <div className="h-full w-[1px]  border-[1px] border-dashed border-lightColor/20 round relative ml-2 mt-[0.5px]">
                    <div className=" bg-[#FFC01E]  absolute  bottom-0 -left-[4px]  w-2 h-[15%] z-10 "></div>
                    <div className=" bg-selectedColor  absolute bottom-0 -left-[4px] rounded-[2px] w-2 h-[45%] z-0 "></div>
                   </div>
                </div>
                <div className="flex space-x-[22px] text-xs  text-lightColor   bottom-0 right-10  border-t pt-2 ">
                    <h5> Mo </h5>
                    <h5> Tu </h5>
                    <h5> we </h5>
                    <h5> The </h5>
                    <h5> Fr </h5>
                    <h5> sa </h5>
                </div>
            </div>
        </div>

    )
}
