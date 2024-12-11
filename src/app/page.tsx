import { Header } from "@/components";
import MyAdvantages from "@/components/MyAdvantages";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <NavBar />
      <Header />
      <MyAdvantages />
      <Projects />
    </>
  );
};

export default page;
