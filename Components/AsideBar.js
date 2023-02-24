import Image from "next/image";


const AsideBar = () => {
    return (
       <aside className='fixed left-0 top-[52px] bg-sidebar w-[10rem] h-full '>
          <div className=''>
                <Image src={'/logo.png'} alt={'logo'} width={40} height={20}  />
          </div>

       </aside>
    );
}

export default AsideBar;
