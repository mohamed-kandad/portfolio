import { MyAdvantagesItems } from "@/helpers";
import Image from "next/image";
import React from "react";

type Props = {};

const MyAdvantages = (props: Props) => {
  return (
    <div className="container mx-auto px-4  py-3 pt-6 text-black dark:text-white mt-10 lg:mt-20">
      <h2 className="font-labilGR font-semibold text-2xl lg:text-4xl">
        My Advantages
      </h2>
      <div className="mt-10 grid grid-cols-2 max-sm:gap-x-3 sm:grid-cols-2 max-sm:place-items-center  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {MyAdvantagesItems.map(({ title, icon, percentage }) => (
          <div className="bg-black dark:bg-[#141414] p-5 rounded-[20px] pb-10 w-full max-w-[224px]">
            <h3 className="uppercase text-white text-xs font-labilGR">
              {title}
            </h3>
            <Image src={icon} className="size-20 mx-auto mt-14" alt="" />
            <h5 className="text-white text-center mt-8 text-xl">
              {percentage}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAdvantages;
