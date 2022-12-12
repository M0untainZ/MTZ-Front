import React from "react";
import { createPortal } from "react-dom";

const BadgePortal = ({ children }) => {
  return createPortal(<>{children}</>, document.getElementById("modal"));
};

export default BadgePortal;
