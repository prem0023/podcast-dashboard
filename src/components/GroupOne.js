import React from "react";
import Group1 from "../utils/Group1.jpg";
import imgBottom from "../utils/imgBottom.jpg";
import stellite from "../utils/stellite.jpg";
import linePattern from "../utils/linePattern.png";
import podcast from "../utils/podcast.jpg";

const GroupOne = () => {
  return (
    // <section
    //   style={{
    //     width: "100%",
    //     height: "auto",
    //     backgroundImage: "url(" + { Group1 } + ")",
    //   }}
    // ></section>
    <div className="">
      {/* <div className="w-[33.33vw] h-[33.33vw] z-10 absolute top-0 left-0 bg-purple-800 rounded-br-full" />
    //   <div className="border-x-[50vw] m-0 p-0 border-y-[33.33vw] z-0 bg-transparent absolute border-purple-950 border-b-transparent border-r-transparent">
    //     <div className="border-x-[32vw] border-y-[32vw] z-10 absolute -right-[16vw] -top-[16vw] rotate-12 bg-transparent border-red-950 border-b-transparent border-r-transparent"></div>
    //   </div> */}

      <img
        className="absolute -z-10"
        src={Group1}
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
      <img
        className="absolute -z-10 right-0 top-[225%]"
        src={podcast}
        style={{
          width: "40%",
          height: "auto",
        }}
      />
      <img
        className="absolute -z-10 top-[200%]"
        src={linePattern}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <img
        className="absolute -z-10 top-[408%]"
        src={imgBottom}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default GroupOne;
