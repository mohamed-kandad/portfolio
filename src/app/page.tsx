import { Header } from "@/components";
import MyAdvantages from "@/components/MyAdvantages";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import WebMobileText from "@/components/WebMobileText";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <NavBar />
      <Header />
      <MyAdvantages />
      <Projects />
      <WebMobileText />
    </>
  );
};

export default page;
