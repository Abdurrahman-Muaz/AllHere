import React, { useState } from "react";
import SliderComponent from "../components/Homee/SliderComponent";
import Sorting from "../components/Homee/Sorting";
import Category from "../components/Homee/Category";
import Products from "../components/Homee/Products";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <SliderComponent />
      <Sorting setSort={setSort} />
      <div className="flex ">
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Home;
