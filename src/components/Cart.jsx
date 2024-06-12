import React from "react";
import { useShop } from "./Shopcontext";
import { useEffect, useState } from "react";
import FormComponent from "./FormComponent";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useShop();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    setPrice(total);
  });
  return (
    <div>
      <div className=" flex justify-center align center">
        <div>
          <h2 className="font-bold ">Your cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul className="w-full">
              {cart.map((product, id) => (
                <li
                  className="border flex justify-center align-center border-solid border-black mt-4 "
                  key={id}
                >
                  <div className="flex flex-start">
                    <img
                      className="size-20"
                      src={product.thumbnail}
                      alt="{product.title}"
                    ></img>
                  </div>
                  <div>
                    <h3 className="pr-4">{product.title}</h3>
                    <div>
                      <p className="mt-4 font-bold"> ${product.price}</p>
                    </div>
                    <div>
                      <button
                        className="mr-2 font-bold "
                        onClick={() => removeFromCart(product.id)}
                      >
                        -
                      </button>
                      <input
                        className="border border-solid border-black mb-2 w-10 h-5 pl-3 "
                        readOnly
                        value={product.quantity}
                      ></input>
                      <button
                        className="ml-2 font-bold"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-5 font-bold">Total: ${price.toFixed(2)}</div>
        </div>
      </div>
      <div className="mt-10">
        <FormComponent />
      </div>
    </div>
  );
};

export default Cart;
