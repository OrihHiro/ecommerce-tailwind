import React from "react";
import { useParams } from "react-router-dom";
import Productdata from "./productdata";

const Productdetails = () => {
  const { id } = useParams();

  const alertCart = () => {
    alert("Item Added To Cart!");
  };

  const product = Productdata.find((item) => item.id === parseInt(id, 10));
  return (
    <section>
      <h2 class="flex mt-8 mx-20 text-4xl font-bold">Product Page</h2>
      <div class="flex justify-center items-center h-screen mx-20">
        <div class="flex justify-center items-center w-1/2 border border-2 border-solid border-gray-100">
          <img
            class="w-full h-full object-cover"
            src={product.Img}
            alt={product.Title}
          />
        </div>
        <div class="w-1/2 ml-4 p-4">
          <h3 class="text-3xl font-semibold mb-10">{product.Title}</h3>
          <p class="text-gray-700 mb-10">{product.Details}</p>
          <h4 class="text-green-600 font-bold text-3xl mb-6">
            ${product.Price}
          </h4>
          <button
            type="button"
            onClick={alertCart}
            class="text-white text-xl rounded-lg text-sm px-6 py-3 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Productdetails;
