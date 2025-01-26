import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "./DetailComp.css";

const DetailComp = ({ productDetail }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) {
      setQuantity(quantity + 1);
    }
  };

  const notify = () =>
    toast("Product added to cart!", { className: "custom-toast" });

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
    notify();
  };

  return (
    <div className="flex gap-10 my-10  ">
      <img
        className="w-[500px] h-[500px] object-contain"
        src={productDetail?.image}
        alt=""
      />
      <div className="">
        <div className="text-4xl mb-5">{productDetail?.title}</div>
        <div className="my-2 text-xl mb-5">{productDetail?.description}</div>

        <div className="text-2xl  text-red-600  text-yesil  mb-2">
          Rating: {productDetail?.rating?.rate}
        </div>
        <div className="text-2xl  text-red-600 text-yesil mb-3">
          Count: {productDetail?.rating?.count}
        </div>

        <div className="text-3xl  mt-0">
          Price: {productDetail?.price} <span className="text-3xl">$</span>
        </div>
        <div className="flex items-center gap-10 mt-5 ml-52">
          <div onClick={decrement} className="text-5xl cursor-pointer">
            -
          </div>

          <input
            className="w-16 text-center ml-3 my-4 text-4xl font-bold outline-none"
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <div onClick={increment} className="text-4xl cursor-pointer">
            +
          </div>
        </div>
        <div
          className="my-4 border text-2xl rounded-md bg-gray-300 cursor-pointer w-200 h-16 flex items-center justify-center bg-sari border-none"
          onClick={addBasket}
        >
          Add to Cart
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

// aslı
export default DetailComp;
