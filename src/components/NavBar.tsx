"use client";

import { useTheme } from "next-themes";
import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import MyLogo from "@/assets/imgs";

type Props = {};

const NavBar = (props: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="container mx-auto px-4 flex md:flex-col justify-between items-center md:items-stretch md:justify-normal text-center py-3 md:pt-6">
      <MyLogo color={theme === "dark" ? "white" : "black"} />

      <ul className="items-center mt-10 dark:bg-[#141414] hidden md:flex bg-black w-fit mx-auto rounded-[80px] p-1 gap-4 pr-3">
        <a href="#home">
          <li className="cursor-pointer text-base font-labilGR px-4 py-2 bg-white text-black rounded-[80px]">
            Home
          </li>
        </a>
        <a href="#projects">
          <li className="cursor-pointer text-base font-labilGR px-4 py-2 bg-transparent text-[#C4C4C4] rounded-[80px]">
            Projects
          </li>
        </a>
        <a href="#about">
          <li className="cursor-pointer text-base font-labilGR px-4 py-2 bg-transparent text-[#C4C4C4] rounded-[80px]">
            About
          </li>
        </a>
        <a href="#contact">
          <li className="cursor-pointer text-base font-labilGR px-4 py-2 bg-transparent text-[#C4C4C4] rounded-[80px]">
            Contact
          </li>
        </a>
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

      {/* Mobile version */}
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
