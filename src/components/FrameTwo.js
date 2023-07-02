import React from "react";

const FrameTwo = () => {
  return (
    <div className="z-30 w-full h-2/3 mt-[25%] pl-[15%] pr-[5%] flex relative">
      <div className="w-1/2  relative">
        <div className="flex w-full h-1/2 justify-between">
          <div className="w-[45%] h-fit relative left-0 flex flex-col  border rounded-lg lg:py-7 lg:px-6 p-1 border-purple-400">
            <div className="font-bold md:text-md xl:text-xl">
              Interactive Features
            </div>
            <div className="text-[10px] xl:text-xs pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </div>
          </div>
          <div className="w-[45%] h-fit relative  top-[15%] right-[5%] flex flex-col  border rounded-lg lg:py-7 lg:px-6 p-1 border-purple-400">
            <div className="font-bold md:text-md xl:text-xl">
              Interactive Features
            </div>
            <div className="text-[10px] xl:text-xs pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </div>
          </div>
        </div>

        <div className="flex w-full h-1/2 justify-between ">
          <div className="w-[45%] h-fit relative  left-0 flex flex-col  border rounded-lg lg:py-7 lg:px-6 p-1 border-purple-400">
            <div className="font-bold md:text-md xl:text-xl">
              Interactive Features
            </div>
            <div className="text-[10px] xl:text-xs pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </div>
          </div>
          <div className="w-[45%] h-fit relative  top-[15%] right-[5%] flex flex-col  border rounded-lg lg:py-7 lg:px-6 p-1 border-purple-400">
            <div className="font-bold md:text-md xl:text-xl">
              Interactive Features
            </div>
            <div className="text-[10px] xl:text-xs pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 pt-[4%] pl-[9%] flex flex-col">
        <div className=" relative  sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          About the Course
        </div>

        <div className="top-3 md:top-10 relative w-3/4 text-[10px] sm:text-xs md:text-sm xl:text-base font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting in
          ustry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unkno
        </div>

        <div className="flex w-full sm:top-10 md:top-16 lg:top-20 xl:top-24 relative">
          <button className="text-xs p-1 sm:py-1 md:py-2 lg:py-3 xl:py-4 sm:px-2 md:px-4 lg:px-8 xl:px-10 flex items-center text-white md:text-base xl:text-xl font-bold relative bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg">
            Sign up Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameTwo;
