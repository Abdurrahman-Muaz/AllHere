import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, itemCount, carts, totalAmount]);

  return (
    <div className="grid ">
      {carts?.length > 0 ? (
        <div>
          {carts.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}

          <div className=" p-4 ounded-xl  outline-none border-none">
            <div className="flex items-center justify-end text-2xl  text-black mb-1 col-span-3">
              Total Amount :{" "}
              <span className="text-3xl ml-1 text-black">{totalAmount} $</span>
            </div>
            <div className="flex justify-end mb-8 text-xl">
              <button className=" bg-sari text-black px-6 py-2 rounded-lg pl-5 transform transition-transform duration-300 hover:scale-110 mt-2">
                Payment
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img src="https://adasglobal.com/img/empty-cart.png" alt="" />
        </div>
      )}
    </div>
  );
};

export default Cart;
