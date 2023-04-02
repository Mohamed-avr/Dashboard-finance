import Image from "next/image";



const Payment = (props) => {
    return (
        <div className="flex  justify-center items-center flex-row mt-4  ">
            <div className="w-10 h-10 bg-body rounded-lg flex justify-center items-center ">
                <Image src={props.sendIcon} alt={'icon-desc'} width={24} height={24} />
            </div>
            <div className="flex flex-col w-[15rem] pl-2 -mt-2">
                <div className="  flex justify-between px-2 my-1">
                     <h4 className=" text-xs text-lightColor "> {props.sendTitle} </h4> 
                     <h5 className=" text-xs  text-[#fff] font-normal ">{props.sendProgress.progressNumber}/<span className=" font-light text-lightColor/50" >{props.sendProgress.goalNumber}</span></h5>
                     </div>
                <div>
                     <div className="w-[14rem] bg-body h-2 rounded-md overflow-hidden absolute ">
                    <span className="h-2 bg-selectedColor absolute left-0 top-0 w-4/6 "> </span>
                </div> 
                </div>
            </div>

        </div>
    );
}

export default Payment;
