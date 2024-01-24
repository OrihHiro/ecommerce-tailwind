import React from "react";
import { Link } from "react-router-dom";
import applewatchbanner from "../assets/applewatchbanner.png";

const Lastbanner = () => {
  return (
    <div class="flex items-center justify-center max-w-full bg-gray-100 mb-0">
      <div class="justify-start m-5">
        <img
          class="h-[55vh] max-w-[60vw] items-center rounded-lg z-[1]"
          src={applewatchbanner}
          alt=""
        />
      </div>
      <div class="flex flex-col">
        <div class="flex text-xl ml-20 mb-3 justify-center">
          <p>Spring & Summer Sale</p>
        </div>
        <div class="flex flex-col justify-center items-center text-5xl font-semibold mb-10 ml-20 ">
          <h3>Deal Of The Week</h3>
          <Link to="/product">
            <button
              type="button"
              class="text-white text-xl rounded-lg text-sm px-7 py-4 me-2 my-10 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none"
            >
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lastbanner;
