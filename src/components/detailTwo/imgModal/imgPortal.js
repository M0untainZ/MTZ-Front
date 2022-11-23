import React from "react";
import { createPortal } from "react-dom";

const ImgPortal = ({ children }) => {
  return createPortal(<>{children}</>, document.getElementById("modal"));
};

export default ImgPortal;
