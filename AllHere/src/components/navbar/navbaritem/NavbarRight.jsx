import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { itemCount } = useSelector((state) => state.carts);
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, itemCount, carts, totalAmount]);

  // useEffect(() => {
  //   if (itemCount > 0) {
  //     toast.success("Sepete Eklendi!", {
  //       position: toast.POSITION.BOTTOM_RIGHT,
  //       autoClose: 3000,
  //     });
  //   }
  // }, [itemCount]);

  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center  border-yellow-400 border-2 p-3 rounded-full border-sari ">
        <input
          className=" bg-white-200 outline-200 outline-none "
          type="text"
          placeholder="Search..."
        />
        <IoSearch size={28} color="#ffe800" />
      </div>
      <FaRegHeart size={28} />

      <div onClick={() => navigate("cart")} className="relative">
        <div className="absolute cursor-pointer -top-3 -right-3 bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center bg-sari">
          {itemCount}
        </div>
        <SlBasket size={28} className="cursor-pointer" />
      </div>
    </div>
  );
};

// aslı

export default NavbarRight;
