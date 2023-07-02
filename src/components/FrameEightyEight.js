import React from "react";
import facebook from "../utils/facebook.jpg";
import youtube from "../utils/youtube.jpg";
import instagram from "../utils/instagram.jpg";
import twitter from "../utils/twitter.jpg";

const FrameEightyEight = () => {
  return (
    <div className="px-[10%] mt-[15%] relative">
      <div className=" border-t py-5 w-full border-t-white justify-center items-center inline-flex ">
        <div className="flex w-full  px-[4%] items-center justify-between">
          <div className="text-[5px] sm:text-[6px] md:text-[8px] lg:text-xs xl:text-sm">
            All Right Reserved @Copyright 2023
          </div>

          <div className="flex items-center gap-10 ">
            <ol className="flex text-[5px] sm:text-[6px] md:text-[8px] lg:text-xs xl:text-sm gap-6">
              <li className="">Terms of Service</li>
              <li className="">Privacy Policy</li>
              <li className="">Product</li>
            </ol>

            <ol className="flex gap-4">
              <li className="">
                <img
                  className="cursor-pointer w-2 sm:w-3 md:w-4 lg:w-5 xl:w-6"
                  src={facebook}
                />
              </li>
              <li className="">
                <img
                  className="cursor-pointer w-2 sm:w-3 md:w-4 lg:w-5 xl:w-6"
                  src={youtube}
                />
              </li>
              <li className="">
                <img
                  className="cursor-pointer w-2 sm:w-3 md:w-4 lg:w-5 xl:w-6"
                  src={instagram}
                />
              </li>
              <li className="">
                <img
                  className="cursor-pointer w-2 sm:w-3 md:w-4 lg:w-5 xl:w-6"
                  src={twitter}
                />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameEightyEight;
