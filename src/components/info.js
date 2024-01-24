import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { MdAssignmentReturn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

const Info = () => {
  return (
    <div class="grid grid-cols-4 gap-3 max-w-[70vw] mx-auto mb-10">
      <div class="flex justify-center items-center cursor-pointer">
        <FaTruck class="flex text-5xl bg-gray-100 h-full pl-4 hover:text-red-300" />
        <div class="bg-gray-100 py-5 px-3">
          <h3 class="font-bold text-red-300">FREE SHIPPING</h3>
          <p class="text-xs">Suffered Alteration Some Form</p>
        </div>
      </div>
      <div class="flex justify-center items-center cursor-pointer">
        <FaGift class="flex text-5xl bg-gray-100 h-full pl-4 hover:text-red-300" />
        <div class="bg-gray-100 py-5 px-3">
          <h3 class="font-bold text-red-300">FREE GIFTS</h3>
          <p class="text-xs">Suffered Alteration Some Form</p>
        </div>
      </div>
      <div class="flex justify-center items-center cursor-pointer">
        <MdAssignmentReturn class="flex text-5xl bg-gray-100 h-full pl-4 hover:text-red-300" />
        <div class="bg-gray-100 py-5 px-3">
          <h3 class="font-bold text-red-300">30 DAYS RETURN</h3>
          <p class="text-xs">Suffered Alteration Some Form</p>
        </div>
      </div>
      <div class="flex justify-center items-center cursor-pointer">
        <FaCalendarAlt class="flex text-5xl bg-gray-100 h-full pl-4 hover:text-red-300" />
        <div class="bg-gray-100 py-5 px-3">
          <h3 class="font-bold text-red-300">365 DAYS OPEN</h3>
          <p class="text-xs">Suffered Alteration Some Form</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
