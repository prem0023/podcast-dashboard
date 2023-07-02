import React from "react";
import Lolla from "../utils/Lolla.png";

const Review = () => {
  return (
    <div className="rounded-lg w-full mb-[10%] shadow py-[5%] px-[4%] border border-fuchsia-300 border-opacity-40 flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="">
        <div className="flex items-center">
          <div className="rounded-full w-1/5">
            <img src={Lolla} />
          </div>
          <div className="ml-[5%]">
            <div className="font-bold text-xs md:text-sm lg:text-md xl:text-base">
              Lolla Smith
            </div>
            <div className="text-xs text-[8px] md:text-[10px] lg:text-xs xl:text-sm">
              Microsoft
            </div>
            <div className="text-xs md:text-sm lg:text-base xl:text-lg">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
        <div className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm mt-[8%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make
        </div>
      </div>
    </div>
  );
};

export default Review;
