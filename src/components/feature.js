import React from "react";
import feature3 from "../assets/feature3.png";
import applewatches from "../assets/applewatches.png";
import ipad from "../assets/ipad.png";

const Feature = () => {
  return (
    <div class="flex justify-center">
      <div class="grid grid-cols-3 gap-10 max-w-[70vw] mt-10 mb-10">
        <img class="h-30 rounded" src={applewatches} />
        <img class="h-30 rounded" src={ipad} />
        <img class="h-30 rounded" src={feature3} />
      </div>
    </div>
  );
};

export default Feature;
