import React from "react";
import Feature from "./feature";
import Info from "./info";
import { Link } from "react-router-dom";
import applewatchbanner from "../assets/applewatchbanner.png";
import iphone2 from "../assets/iphone2.jpeg";

import Lastbanner from "./lastbanner";

const Banner = () => {
  return (
    <section>
      <div class="flex justify-center items-center max-w-full bg-gray-100">
        <div class="flex flex-col items-start mr-40">
          <div class="text-xl ml-20 mb-3">
            <p>Spring & Summer Sale</p>
          </div>
          <div class="text-8xl font-semibold mb-10 ml-20">
            <h3>
              Get Up to <br />
              50% Off
            </h3>
          </div>
          <Link to="/product">
            <button
              type="button"
              class="text-white text-xl rounded-lg text-sm px-7 py-4 me-2 mb-2 ml-20 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none"
            >
              Shop Now
            </button>
          </Link>
        </div>
        <div class="mr-20 my-10 flex justify-center">
          <img
            class="h-[60vh] max-w-[60vw] items-center rounded-lg z-[1]"
            src={iphone2}
            alt=""
          />
        </div>
      </div>
      <Feature />
      <Info />
      <Lastbanner />
    </section>
  );
};

export default Banner;
