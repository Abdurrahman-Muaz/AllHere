import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notify = () =>
    toast("Product added to cart!", { className: "bildirim" });

  const addBasket = () => {
    dispatch(
      addToCart({
        id: product?.id,
        title: product?.title,
        image: product?.image,
        price: product?.price,
        quantity: 1,
      })
    );
    notify();
  };

  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="w-[281px] h-[400px] p-3 ml-8 mb-9 mx-2 border-4 rounded-md relative cursor-pointer border-gri "
    >
      <img
        className="w-full h-[200px] object-contain transform transition-transform duration-300 hover:scale-110"
        src={product?.image}
        alt=""
      />

      <div className="text-center px-3 mt-3 text-lg font-bold">
        {product?.title}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-3">
        <div className="text-2xl font-bold bg-blue-50 text-black p-1 rounded-md">
          {`${product?.price} $`}
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation(); // Kart tıklanmasını engelledi
            addBasket();
          }}
          className="text-lg font-semibold cursor-pointer bg-yellow-500 text-white px-4 py-2 rounded-md transform transition-transform duration-300 hover:scale-110 bg-sari"
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default Product;
