import Link from "next/link";
import React from 'react';


type Props = {
  title: string;
  description: string;
  link: string;
};


export const Notification: React.FC<Props> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="w-full">
      <div className="mx-auto lg:my-80 my-40 max-w-[90vw] bg-[#FFF9C5] rounded-[1.5vw] lg:p-[20px] p-[10px] border-[0.5vw] border-solid border-[#FFA61F] flex flex-col items-center lg:gap-60 gap-1">
        <img src="/chikachika.svg" alt="" className="lg:mb-50 lg:scale-100 scale-50" />
        <div className="text-center text-[#FFA61F] lg:text-[40px] text-2xl font-bold">{title}</div>
        <div className="lg:w-[70%] w-[90%] h-[0.3vw] bg-[#FFE500] my-20"></div>
        <div className="text-center text-[#FFA61F] lg:text-[32px] text-[16px]">{description}</div>
        <div className="flex items-center h-[1.5em] lg:text-[32px] text-[16px] lg:py-0 px-[10px] bg-[#FFA61F] rounded-[1vw] hover:scale-110 duration-300">
          <div className="lg:ml-[20px] lg:w-[15px] lg:h-[20px] bg-[#FFFFFF] [clip-path:polygon(0%_0%,_0%_100%,_100%_50%)]"></div>
          <div className="lg:ml-[5px] lg:w-[15px] lg:h-[20px] bg-[#FFFFFF] [clip-path:polygon(0%_0%,_0%_100%,_100%_50%)]"></div>
          <div className="lg:ml-[5px] lg:w-[15px] lg:h-[20px] bg-[#FFFFFF] [clip-path:polygon(0%_0%,_0%_100%,_100%_50%)]"></div>
          <Link href={link} rel="noopener noreferrer" target="_blank" className="ml-[1vw] mr-[1vw] text-[#FFFFFF]">
            {link}
          </Link>
        </div>
      </div>
    </div>
  );
};
