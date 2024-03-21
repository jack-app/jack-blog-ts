import React from 'react';
import { StringLiteral } from 'typescript';


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
    <div className='w-full'>
      <div
        className="mx-auto my-80 w-[90%] h-[330px] bg-[#FFF9C5] rounded-[30px] p-[20px] border-[9px] border-solid border-[#FFA61F]
                flex justify-center items-center flex-col gap-60"
      >
        <img
          src="/chikachika.svg"
          alt="お知らせ Image"
          className="mb-30" />
        <div className="text-center text-[#FFA61F] text-[40px] font-bold">{title}</div>
        <div className="w-[70%] h-[6px] bg-[#FFE500]"></div>
        <div className="text-center text-[#FFA61F] text-[32px]">{description}</div>
        <div className="flex items-center  h-[1.5em] max-w-[45%] text-[32px] bg-[#FFA61F] rounded-[20px]">
          <div className="ml-[20px] w-[15px] h-[20px] bg-[#FFFFFF] [clip-path:polygon(_0%_0%,_0%_100%,_100%_50%)]"></div> {/* 三角形 */}
          <div className="ml-[5px]  w-[15px] h-[20px] bg-[#FFFFFF] [clip-path:polygon(_0%_0%,_0%_100%,_100%_50%)]"></div>
          <div className="ml-[5px]  w-[15px] h-[20px] bg-[#FFFFFF] [clip-path:polygon(_0%_0%,_0%_100%,_100%_50%)]"></div>
          <p className="ml-[20px] mr-[20px] text-[#FFFFFF]">{link}</p>
        </div>
      </div>
    </div>

  );
};
