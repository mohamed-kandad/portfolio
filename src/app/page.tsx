import { Header } from "@/components";
import LetsTalk from "@/components/LetsTalk";
import MyAdvantages from "@/components/MyAdvantages";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import WebMobileText from "@/components/WebMobileText";
import Footer from "@/components/Footer";
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
      <LetsTalk />
      <Footer />
    </>
  );
};

export default page;
