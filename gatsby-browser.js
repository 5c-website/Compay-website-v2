import "./src/styles/global.css"
import React from "react"
import { Analytics } from "@vercel/analytics/react"

export const wrapRootElement = ({ element }) => (
  <>
    {element}
    <Analytics />
  </>
)