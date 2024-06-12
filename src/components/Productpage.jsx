import { useEffect, useState } from "react";
import { useShop } from "./Shopcontext";
import { useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "./Shopcontext";

const Productpage = () => {
  const { id } = useParams();
  console.log("id från url:", id);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart, removeFromCart } = useShop();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })

      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error);
      });
  }, [id]);

  const handleToAddcart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product.id);
    }
  };
  const handleRemoveFromcart = () => {
    removeFromCart(product.id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex align-center justify-center">
      <div key={id} className="border border-solid mt-9">
        <div className="">
          <img src={product.thumbnail} alt={product.title}></img>
        </div>
        <div className="flex align-center">
          <div>
            <h2 className="font-bold">{product.title}</h2>
            <div className="w-auto mt-4">
              <p>{product.description}</p>
            </div>
            <p className="font-bold mt-4">${product.price}</p>
            <div>
              <div className="mt-5">
                <button
                  className="mr-2 font-bold"
                  onClick={() => removeFromCart(product.id)}
                >
                  -
                </button>
                <input
                  className="border border-solid border-black mb-2 w-10 h-5 pl-3 "
                  readOnly
                  value={product.quantity}
                />

                <button
                  className="ml-2 font-bold"
                  onClick={() => addToCart(product)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
