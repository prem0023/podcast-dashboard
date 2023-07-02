import React, { useState, useRef } from "react";
import Plan from "./Plan";
// import LinePattern from "../utils/LinePattern.png";

const FrameSeventyEight = () => {
  const [flagFirstPlan, setFlagFirstPlan] = useState(false);
  const [flagSecPlan, setFlagSecPlan] = useState(false);
  const [flagThirdPlan, setFlagThirdPlan] = useState(false);

  const monthlyRef = useRef(null);
  const yearlyRef = useRef(null);

  const firstPriceRef = useRef(null);
  const secPriceRef = useRef(null);
  const thirdPriceRef = useRef(null);

  const firstButtonRef = useRef(null);
  const secButtonRef = useRef(null);
  const thirdButtonRef = useRef(null);

  const firstElemRef = useRef(null);
  const secElemRef = useRef(null);
  const thirdElemRef = useRef(null);

  if (flagFirstPlan) {
    setFlagFirstPlan(false);
    setFlagSecPlan(false);
    setFlagThirdPlan(false);

    firstElemRef.current.style.backgroundColor = "purple";
    secElemRef.current.style.backgroundColor = "white";
    thirdElemRef.current.style.backgroundColor = "white";

    firstElemRef.current.style.color = "white";
    secElemRef.current.style.color = "black";
    thirdElemRef.current.style.color = "black";

    firstPriceRef.current.style.color = "white";
    secPriceRef.current.style.color = "purple";
    thirdPriceRef.current.style.color = "purple";

    firstButtonRef.current.style.backgroundColor = "white";
    secButtonRef.current.style.backgroundColor = "white";
    thirdButtonRef.current.style.backgroundColor = "white";
  }

  if (flagSecPlan) {
    setFlagFirstPlan(false);
    setFlagSecPlan(false);
    setFlagThirdPlan(false);

    firstElemRef.current.style.backgroundColor = "white";
    secElemRef.current.style.backgroundColor = "purple";
    thirdElemRef.current.style.backgroundColor = "white";

    firstElemRef.current.style.color = "black";
    secElemRef.current.style.color = "white";
    thirdElemRef.current.style.color = "black";

    firstPriceRef.current.style.color = "purple";
    secPriceRef.current.style.color = "white";
    thirdPriceRef.current.style.color = "purple";

    firstButtonRef.current.style.backgroundColor = "white";
    secButtonRef.current.style.backgroundColor = "white";
    thirdButtonRef.current.style.backgroundColor = "white";
  }

  if (flagThirdPlan) {
    setFlagFirstPlan(false);
    setFlagSecPlan(false);
    setFlagThirdPlan(false);

    firstElemRef.current.style.backgroundColor = "white";
    secElemRef.current.style.backgroundColor = "white";
    thirdElemRef.current.style.backgroundColor = "purple";

    firstElemRef.current.style.color = "black";
    secElemRef.current.style.color = "black";
    thirdElemRef.current.style.color = "white";

    firstPriceRef.current.style.color = "purple";
    secPriceRef.current.style.color = "purple";
    thirdPriceRef.current.style.color = "white";

    firstButtonRef.current.style.backgroundColor = "white";
    secButtonRef.current.style.backgroundColor = "white";
    thirdButtonRef.current.style.backgroundColor = "white";
  }

  const changeMonthlyBackgroundColor = () => {
    monthlyRef.current.style.backgroundColor = "#E1A6FF66";
    yearlyRef.current.style.backgroundColor = "white";
  };

  const changeYearlyBackgroundColor = () => {
    monthlyRef.current.style.backgroundColor = "white";
    yearlyRef.current.style.backgroundColor = "#E1A6FF66";
  };

  return (
    <div className="px-[10%] w-full z-20 relative">
      <div className="py-[7%] relative">
        <div className=" flex justify-center sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-bold">
          Choose your plan
        </div>
        <div className="flex justify-center w-full">
          <div className="w-2/5 py-[3%] text-center  text-xs md:text-sm lg:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </div>
        </div>
        <div className="flex justify-center">
          <div className="cursor-pointer p-2 shadow justify-center items-center gap-2.5 inline-flex">
            <div
              className="text-center px-3 py-1 rounded-lg text-sm "
              ref={monthlyRef}
              onClick={changeMonthlyBackgroundColor}
            >
              monthly
            </div>
            <div
              className="text-center px-3 py-1 rounded-lg text-sm "
              ref={yearlyRef}
              onClick={changeYearlyBackgroundColor}
            >
              yearly
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full ">
        <Plan
          plan={"Basic Plan"}
          flag={flagFirstPlan}
          setFlag={setFlagFirstPlan}
          elemRef={firstElemRef}
          priceRef={firstPriceRef}
          buttonRef={firstButtonRef}
        />
        <Plan
          plan={"Premium Plan"}
          flag={flagSecPlan}
          setFlag={setFlagSecPlan}
          elemRef={secElemRef}
          priceRef={secPriceRef}
          buttonRef={secButtonRef}
        />
        <Plan
          plan={"Basic Plan"}
          flag={flagThirdPlan}
          setFlag={setFlagThirdPlan}
          elemRef={thirdElemRef}
          priceRef={thirdPriceRef}
          buttonRef={thirdButtonRef}
        />
      </div>
    </div>
  );
};

export default FrameSeventyEight;
