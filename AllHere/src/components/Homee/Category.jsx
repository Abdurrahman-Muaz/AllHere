import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/CategorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  console.log(categories, "categories");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="  max-h-screen rounded-xl  ">
      <div className="border-b-0 pb-1 text-3xl   text-center " id="kategori">
        Category
      </div>
      {categories?.map((category, i) => (
        <div
          onClick={() => setCategory(category)}
          className="text-2xl  px-5 cursor-pointer rounded-lg  my-2 border-black  border-b-2 "
          key={i}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
