import { Header } from "@/components";
import Footer from "@/components/Footer";
import LetsTalk from "@/components/LetsTalk";
import MyAdvantages from "@/components/MyAdvantages";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import WebMobileText from "@/components/WebMobileText";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <NavBar />
      <Header />
      <MyAdvantages />
      <Projects />
      <WebMobileText />
      <LetsTalk />
      <Footer />
    </div>
  );
};

export default page;
