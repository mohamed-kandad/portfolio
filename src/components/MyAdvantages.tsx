import { MyAdvantagesItems } from "@/helpers";
import Image from "next/image";
import React from "react";

type Props = {};

const MyAdvantages = (props: Props) => {
  return (
    <div className="container mx-auto px-4  py-3 pt-6 text-black dark:text-white mt-36">
      <h2>My Advantages</h2>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {MyAdvantagesItems.map(({ title, icon, percentage }) => (
          <div className="bg-black dark:bg-[#141414] p-5 pb-20 rounded-[20px]">
            <h3 className="uppercase text-white text-xs">{title}</h3>
            <Image
              src={require(`../assets/imgs/${icon}`)}
              className="size-20 mx-auto mt-10"
              alt=""
            />
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
