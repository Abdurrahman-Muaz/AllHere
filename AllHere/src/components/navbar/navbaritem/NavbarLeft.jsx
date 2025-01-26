import React from "react";
import { Link } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <div>
      <Link to="/">
        <div className="text-5xl pl-5 pr-5 font-bold cursor-pointer text-sari ">
          AllHere{" "}
        </div>
      </Link>
    </div>
  );
};

export default NavbarLeft;
