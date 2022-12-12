import React from "react";
import { createPortal } from "react-dom";

const LikePortal = ({ children }) => {
  return createPortal(<>{children}</>, document.getElementById("modal"));
};

export default LikePortal;
