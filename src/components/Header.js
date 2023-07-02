import React from "react";
import stellite from "../utils/stellite.jpg";
import groupOne from "../utils/groupOne.jpg";

const Header = () => {
  return (
    <div className="">
      <div className="w-full px-[10%] h-20 relative text-white flex justify-between items-center">
        <div className=" text-[16px] font-bold cursor-pointer">Logo</div>
        <ul className="justify-end space-x-[25%]  flex w-1/4">
          <li className=" text-[16px] font-normal cursor-pointer">About</li>
          <li className=" text-[16px] font-normal cursor-pointer">Pricing</li>
          <li className=" text-[16px] font-normal cursor-pointer">Review</li>
        </ul>
      </div>
      <img
        className="absolute -z-10 top-0"
        src={groupOne}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <img
        className="absolute -z-10 right-0 top-[65%]"
        src={stellite}
        style={{
          width: "40%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default Header;
