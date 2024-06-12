import React from "react";
import Productlist from "./Productlist";

const Shop = () => {
  return (
    <div>
      <div>
        <h1 className="mt-8 font-bold text-xl">My Webshop</h1>
      </div>
      <div>
        <Productlist />
      </div>
    </div>
  );
};

export default Shop;
