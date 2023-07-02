import React from "react";

const Header = () => {
  return (
    <div className="w-full px-[10%] h-20 relative text-white flex justify-between items-center">
      <div className=" text-[16px] font-bold cursor-pointer">Logo</div>
      <ul className="justify-end space-x-[25%]  flex w-1/4">
        <li className=" text-[16px] font-normal cursor-pointer">About</li>
        <li className=" text-[16px] font-normal cursor-pointer">Pricing</li>
        <li className=" text-[16px] font-normal cursor-pointer">Review</li>
      </ul>
    </div>
  );
};

export default Header;
