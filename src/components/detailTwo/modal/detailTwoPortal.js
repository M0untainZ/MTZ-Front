import React from "react";
import { createPortal } from "react-dom";

const DetailTwoPortal = ({ children }) => {
  return createPortal(<>{children}</>, document.getElementById("modal"));
};

export default DetailTwoPortal;
