import Image from "next/image"
export default function MoneyTransaction(props) {
  return (
    <article  className='w-full flex justify-between mt-2 hover:bg-lightColor/5 p-2 rounded-lg cursor-pointer'>
         <div className='flex justify-start items-center '>
          <div className="rounded-[4px] overflow-hidden "> <Image src={props.sendAvatar} width={40} height={40}  alt={`Image_${props.sendAvatar}`} /> </div>
          <div className="ml-2">
            <h5 className=" text-[10px] font-thin "> {props.sendTypeTransaction ? "Tranfers from" : "Tranfers to"}</h5>
            <h3 className=" font-normal text-base "> {props.sendName}</h3>
          </div>
        </div>

        {props.sendTypeTransaction === "received" ? <h4 className=" text-selectedColor "> {props.sendValue}  </h4> : <h4 className=" text-[#FFC01E] "> {props.sendValue}  </h4> }
    </article>
  )
}
