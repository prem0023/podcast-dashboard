import React from "react";
import everyoneSmiling from "../utils/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime 1.png";
import groupBusiness from "../utils/group-business-workers-smiling-happy-confident-working-together-with-smile-face-applauding-one-them-office 1.jpg";
import group from "../utils/Group.png";
import vector from "../utils/Vector.png";

const FrameThree = () => {
  return (
    <div className="w-full mt-[5%] px-[10%] flex relative">
      <div className="w-1/2  relative">
        <div className="w-full left-0 top-0 relative">
          <div className="w-full left-0 top-0 relative text-white text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Learn how to launch a successful podcast
          </div>
          <div className="w-3/4  left-0 top-3 md:top-10 relative text-white text-[10px] sm:text-xs md:text-sm xl:text-base  font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            ustry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s
          </div>
        </div>
        <div className="flex sm:top-10 md:top-16 lg:top-20 xl:top-24 relative">
          <button className="text-xs p-1 sm:py-1 md:py-2 lg:py-3 xl:py-4 sm:px-2 md:px-4 lg:px-8 xl:px-10 flex items-center text-white md:text-base xl:text-xl font-bold relative bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg">
            Sign up Now
          </button>
        </div>
      </div>

      <div className="w-1/2  relative">
        <img
          className="w-4/5 right-0  absolute rounded-lg"
          src={everyoneSmiling}
        />
        <img
          className="w-4/5 top-[15%] right-[10%] absolute rounded-lg"
          src={groupBusiness}
        />
        <div className="w-full h-full">
          <div className="w-full ">
            <div className="w-2.5 h-2.5 -bottom-[50%] left-[20%] absolute bg-purple-800 rounded-full" />
          </div>
          <div className="w-full ">
            <div className="w-2.5 h-2.5 -bottom-[50%] left-[30%] absolute bg-purple-800 rounded-full" />
          </div>
          <div className="w-full ">
            <div className="w-2.5 h-2.5 -bottom-[50%] left-[40%] absolute bg-purple-800 rounded-full" />
          </div>
          <div className="w-full ">
            <div className="w-2.5 h-2.5 -bottom-[50%] left-[50%] absolute bg-purple-800 rounded-full" />
          </div>
          <div className="w-full ">
            <div className="w-2.5 h-2.5 -bottom-[50%] left-[60%] absolute bg-purple-800 rounded-full" />
          </div>
          <div className="w-full ">
            <div className="w-2.5 h-2.5 -bottom-[50%] left-[70%] absolute bg-purple-800 rounded-full" />
          </div>
          <div className="w-full ">
            <div className="w-2.5 h-2.5 -bottom-[50%] left-[80%] absolute bg-purple-800 rounded-full" />
          </div>
          <div className="w-full ">
            <div className="w-2.5 h-2.5 -bottom-[50%] left-[90%] absolute bg-purple-800 rounded-full" />
          </div>
          <div className="w-full ">
            <div className="w-2.5 h-2.5 -bottom-[50%] left-[100%] absolute bg-purple-800 rounded-full" />
          </div>
          <div className="w-full ">
            <div className="w-2.5 h-2.5 -bottom-[50%] left-[110%] absolute bg-purple-800 rounded-full" />
          </div>

          <div className="w-full ">
            <div className="w-2.5 h-2.5 -bottom-[25%] left-[110%] absolute bg-purple-800 rounded-full" />
          </div>
          <div className="w-full ">
            <div className="w-2.5 h-2.5 bottom-0 left-[110%] absolute bg-purple-800 rounded-full" />
          </div>

          <div className="w-full ">
            <div className="w-2.5 h-2.5 bottom-[50%] left-[110%] absolute bg-purple-800 rounded-full" />
          </div>
          <div className="w-full ">
            <div className="w-2.5 h-2.5 bottom-[75%] left-[110%] absolute bg-purple-800 rounded-full" />
          </div>

          <div className="w-full ">
            <div className="py-0 w-[8%] -bottom-[35%] -right-[5%] absolute  rotate-[15.14deg] bg-white rounded shadow justify-center items-center">
              <img className=" relative" src={group} />
            </div>
          </div>

          <div className="w-full ">
            <div className="px-1 w-[9%] py-3  object-cover bottom-[18%] -right-[15%] content-around absolute origin-top-left rotate-[-16.83deg] bg-white rounded shadow justify-center items-center gap-2.5 inline-flex">
              <img className=" relative" src={vector} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameThree;
