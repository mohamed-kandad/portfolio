import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

type Props = {};

const LetsTalk = (props: Props) => {
  return (
    <div
      id="contact"
      className="container mx-auto px-4 text-center  py-3 pt-6 text-black dark:text-white mt-10 lg:mt-32"
    >
      <h2 className="font-labilGR font-semibold text-[48px] md:text-[79px] lg:text-[140px]">
        Let´s talk!
      </h2>
      <div className="flex flex-col md:flex-row mt-12 gap-5 justify-center">
        <Link
          href={"mailto:kandad.dev@gmail.com"}
          className="font-labilGR bg-black w-fit  dark:bg-white text-white dark:text-black py-5 px-6 rounded-[144px] flex gap-2 items-center"
        >
          kandad.dev@gmail.com
          <MdArrowOutward />
        </Link>
        <Link
          href={"https://wa.me/+212695208671"}
          className="font-labilGR bg-black w-fit  dark:bg-white text-white dark:text-black py-5 px-6 rounded-[144px] flex gap-2 items-center"
          target="_blank"
        >
          +212695208671
          <MdArrowOutward />
        </Link>
      </div>
    </div>
  );
};

export default LetsTalk;
