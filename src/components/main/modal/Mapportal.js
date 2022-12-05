import React from "react";
import { createPortal } from "react-dom";

const Mapportal = ( {children} ) => {
    return createPortal(<>{children}</>, document.getElementById("modal"));
}

export default Mapportal;