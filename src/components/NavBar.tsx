"use client";

import { useTheme } from "next-themes";
import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { FaFontAwesome } from "react-icons/fa6";
import { SiUbuntu, SiUnacademy } from "react-icons/si";

type Props = {};

const NavBar = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <div className="container mx-auto px-4 flex flex-col text-center py-3 pt-6">
      <h3 className="font-logo text-center text-black dark:text-white font-bold mb-7">
        M.kandad
      </h3>
      <ul className="flex items-center dark:bg-[#141414] bg-black w-fit mx-auto rounded-[80px] p-1 gap-4 pr-3">
        <li className="cursor-pointer text-lg font-poppins px-4 py-2 bg-white text-black rounded-[80px]">
          Home
        </li>
        <li className="cursor-pointer text-lg font-poppins px-4 py-2 bg-transparent text-[#C4C4C4] rounded-[80px]">
          Projects
        </li>
        <li className="cursor-pointer text-lg font-poppins px-4 py-2 bg-transparent text-[#C4C4C4] rounded-[80px]">
          About
        </li>
        <li className="cursor-pointer text-lg font-poppins px-4 py-2 bg-transparent text-[#C4C4C4] rounded-[80px]">
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
    </div>
  );
};

export default NavBar;
