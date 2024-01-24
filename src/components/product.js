import React from "react";
import Productdata from "./productdata";
import { Link } from "react-router-dom";

const Productpage = () => {
  return (
    <section id="product">
      <h1 class="flex-start justify-center font-bold mx-10 my-10 text-3xl">
        Products
      </h1>
      <div class="mx-10 my-10 grid md:grid-cols-4 gap-3">
        {Productdata.map((item) => {
          return (
            <Link
              to={`/productdetails/${item.id}`}
              key={item.id}
              class="border border-2 border-solid border-gray-200 rounded"
            >
              <div key={item.id}>
                <div class="h-full">
                  <img
                    class="h-80 rounded-lg border-b border-solid border-gray p-5"
                    src={item.Img}
                    alt={item.Title}
                  />
                </div>
                <div class="items-center p-5">
                  <p class="font-light text-gray-400">{item.Cat}</p>
                  <h3 class="font-bold text-xl hover:text-blue-700">
                    {item.Title}
                  </h3>
                  <h4 class="mt-2 font-semibold">${item.Price}</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Productpage;
