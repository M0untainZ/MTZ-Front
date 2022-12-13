import React from "react";
import { createPortal } from "react-dom";

const NoticePortal = ({ children }) => {
  return createPortal(<>{children}</>, document.getElementById("modal"));
};

export default NoticePortal;
