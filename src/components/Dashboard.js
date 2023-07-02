import React from "react";
import FrameEightySeven from "./FrameEightySeven";
import FrameEightySix from "./FrameEightySix";
import FrameSeventyEight from "./FrameSeventyEight";
import FrameThree from "./FrameThree";
import FrameTwo from "./FrameTwo";
import Header from "./Header";
import GroupOne from "./GroupOne";
import FrameEightyEight from "./FrameEightyEight";

const Dashboard = () => {
  return (
    <div className="w-full h-50">
      <GroupOne />
      <Header />
      <FrameThree />
      <FrameTwo />
      <FrameSeventyEight />
      <FrameEightySix />
      <FrameEightySeven />
      <FrameEightyEight />
    </div>
  );
};

export default Dashboard;
