import React from "react";
import "./SliderComponent.css";
import Slider from "react-slick";
import { use } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Products from "./Products";

const SliderComponent = () => {
  const [urunResimleri, setUrunResimleri] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    async function urunler() {
      const yanit = await fetch("https://fakestoreapi.com/products");
      const veri = await yanit.json();
      setUrunResimleri(veri);
    }

    urunler();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <Slider {...settings}>
        {/* */}
        {urunResimleri.length > 0 &&
          urunResimleri.map((urun, index) => (
            <div
              key={index}
              id={`slider${index}`}
              className="!flex items-center px-6b mt-7  "
            >
              <div className="">
                <div className="text-4xl  mr-40 p-5">{urun.title}</div>
                <div className="text-xl my-4 font-semibold mr-40 p-5">
                  {urun.description}
                </div>
                <div
                  onClick={() => navigate(`products/${urun.id}`)}
                  className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center text-white bg-yellow-500  font-bold bg-sari "
                >
                  Examine
                </div>
              </div>
              <img
                src={urun.image}
                alt={urun.title}
                className="object-contain w-[300px] h-[300px]"
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;

{
  /*  */
}
