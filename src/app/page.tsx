import { Header } from "@/components";
import MyAdvantages from "@/components/MyAdvantages";
import NavBar from "@/components/NavBar";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <NavBar />
      <Header />
      <MyAdvantages />
    </>
  );
};

export default page;
