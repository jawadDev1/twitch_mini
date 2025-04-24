import React from "react";
import Logo from "./Logo";

import Actions from "./Actions";

const Navbar = () => {
  return (
    <nav className="fixed h-20 w-full top-0 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo />
      
      <Actions />
    </nav>
  );
};

export default Navbar;
