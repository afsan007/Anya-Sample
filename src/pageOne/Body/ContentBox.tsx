import React from "react";

import { IConfig } from "./body.config";

import { Head, Inside, Footer } from "./ContentBox/index";

interface Props {
  config: IConfig;
}

export const ContentBox = ({ config }: Props) => {
  return (
    <>
      <Head {...config}/>
      <Inside {...config}/>
      <Footer {...config}/>
    </>
  );
};
