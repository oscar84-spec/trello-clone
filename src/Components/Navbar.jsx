import React from "react";

const Navbar = ({ children, clase }) => {
  return (
    <nav>
      <ul className={clase}>{children}</ul>
    </nav>
  );
};

export default Navbar;
