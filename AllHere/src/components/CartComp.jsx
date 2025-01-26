import React from "react";
import { removeFromCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import Modal from "react-modal";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();

  const itemTotalPrice = cart?.quantity * cart?.price;

  const handleRemove = () => {
    const confirmRemove = window.confirm(
      "Bu ürünü sepetinizden silmek istediğinize emin misiniz?"
    );

    if (confirmRemove) {
      dispatch(removeFromCart(cart?.id));
    }
  };

  return (
    <div className="my-10 grid grid-cols-12 gap-4 items-center  transform transition-transform duration-300 hover:scale-110  ">
      <div className="col-span-3 flex justify-center">
        <img
          className="h-[150px] w-[150px] object-contain"
          src={cart?.image}
          alt=""
        />
      </div>
      <div className=" p-9 mr-16 col-span-5">
        <div className="text-xl  ">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>

      <div className="text-2xl  flex-col items-start col-span-3 text-center">
        {cart?.quantity} × {cart?.price} $ = ({itemTotalPrice} $)
      </div>

      <div
        onClick={handleRemove}
        className="bg-red-500 text-xl font-bold text-white w-[150px] h-16 flex items-center justify-center cursor-pointer rounded-md transform transition-transform duration-300 hover:scale-110 col-span-1"
      >
        <img
          src="https://img.icons8.com/?size=100&id=8329&format=png&color=FA5252"
          alt=""
          className="h-8"
        />
      </div>
    </div>
  );
};

export default CartComp;
