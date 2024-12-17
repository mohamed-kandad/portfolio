"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { BiMoon, BiNavigation, BiSun } from "react-icons/bi";
import { FaFontAwesome } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { SiUbuntu, SiUnacademy } from "react-icons/si";
import MyLogo from "@/assets/imgs";

type Props = {};

const NavBar = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <div className="container mx-auto px-4 flex md:flex-col justify-between items-center md:items-stretch md:justify-normal text-center py-3 md:pt-6">
      <MyLogo color={theme === "dark" ? "white" : "black"} />
      <ul className="items-center mt-10 dark:bg-[#141414] hidden md:flex bg-black w-fit mx-auto rounded-[80px] p-1 gap-4 pr-3">
        <li className="cursor-pointer text-base font-labilGR px-4 py-2 bg-white text-black rounded-[80px]">
          Home
        </li>
        <li className="cursor-pointer text-base font-labilGR px-4 py-2 bg-transparent text-[#C4C4C4] rounded-[80px]">
          Projects
        </li>
        <li className="cursor-pointer text-base font-labilGR px-4 py-2 bg-transparent text-[#C4C4C4] rounded-[80px]">
          About
        </li>
        <li className="cursor-pointer text-base font-labilGR px-4 py-2 bg-transparent text-[#C4C4C4] rounded-[80px]">
          Contact
        </li>
        <li
          className="rounded-full bg-white p-2 size-[30px] cursor-pointer flex justify-center items-center"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <BiSun size={34} className="text-black" />
          ) : (
            <BiMoon size={34} className="text-black" />
          )}
        </li>
      </ul>
      <div className="flex gap-2 items-center md:hidden">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? (
            <BiSun size={20} className="text-black dark:text-white" />
          ) : (
            <BiMoon size={20} className="text-black dark:text-white" />
          )}
        </button>
        <button className="bg-black dark:bg-white rounded-full p-2 size-[30px] cursor-pointer flex justify-center items-center">
          <IoMenu size={40} className="text-white dark:text-black" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
