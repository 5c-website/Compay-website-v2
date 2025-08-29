import React from "react";
import { Analytics } from "@vercel/analytics/react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta
      key="google-site-verification"
      name="google-site-verification"
      content="rseFcJj_imY3-SmUmb4ncLtE6lDXepsoeLE2prsSc8M"
    />,
  ]);
};

export const wrapRootElement = ({ element }) => (
  <>
    {element}
    <Analytics />
  </>
);
