import React from "react";
import { useEffect, useState } from "react";
import { useShop } from "./Shopcontext";
import { Link } from "react-router-dom";
import { Productpage } from "./Productpage";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useShop();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-3 justify-center gap-x-4 ">
      {Array.isArray(products) &&
        products.map((product, id) => (
          <div className="ml-5 border mt-5 border-solid" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} />
              <h2 className="text-lg">{product.title}</h2>

              <p className="font-bold">${product.price}</p>
            </Link>
            <button
              className="border border-solid border-black rounded-xl text-s pr-3 pl-3 font-bold mb-3"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
    </div>
  );
};

export default Products;
