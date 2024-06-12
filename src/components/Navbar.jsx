import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
  return (
    <div className="bg-black h-20 flex items-center justify-end mr-50px">
      <div className="text-white flex flex-row justify-end items-center mr-12 ">
        <Link className="ml-12 font-bold text-xl" to="/">
          Shop
        </Link>
        <Link className="ml-12 text-xl" to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
