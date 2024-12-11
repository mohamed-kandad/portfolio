import Image from "next/image";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="container mx-auto px-4  py-3 pt-6 text-black dark:text-white mt-10 lg:mt-20">
      <h2 className="font-poppins font-medium text-xl lg:text-4xl">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-10">
        <div className="">
          <div className="aspect-square rounded-[32px] overflow-hidden bg-[#001A6E]">
            <Image
              src={require("../assets/imgs/LMS.png")}
              className="size-full"
              alt=""
            />
          </div>
          <div className="mt-6 font-poppins  text-xl">
            <p className="font-semibold">LMS</p>
            <p className="font-light">Web App</p>
          </div>
        </div>
        <div className="">
          <div className="aspect-square rounded-[32px] overflow-hidden bg-[#074799]">
            <Image
              src={require("../assets/imgs/LMS.png")}
              className="size-full"
              alt=""
            />
          </div>
          <div className="mt-6 font-poppins  text-xl">
            <p className="font-semibold">LMS</p>
            <p className="font-light">Web App</p>
          </div>
        </div>
        <div className="">
          <div className="aspect-square rounded-[32px] overflow-hidden bg-[#009990]">
            <Image
              src={require("../assets/imgs/LMS.png")}
              className="size-full"
              alt=""
            />
          </div>
          <div className="mt-6 font-poppins  text-xl">
            <p className="font-semibold">LMS</p>
            <p className="font-light">Web App</p>
          </div>
        </div>
        <div className="">
          <div className="aspect-square rounded-[32px] overflow-hidden bg-[#E1FFBB]">
            <Image
              src={require("../assets/imgs/LMS.png")}
              className="size-full"
              alt=""
            />
          </div>
          <div className="mt-6 font-poppins  text-xl">
            <p className="font-semibold">LMS</p>
            <p className="font-light">Web App</p>
          </div>
        </div>
        <div className="">
          <div className="aspect-square rounded-[32px] overflow-hidden bg-[#0A97B0]">
            <Image
              src={require("../assets/imgs/LMS.png")}
              className="size-full"
              alt=""
            />
          </div>
          <div className="mt-6 font-poppins  text-xl">
            <p className="font-semibold">LMS</p>
            <p className="font-light">Web App</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
