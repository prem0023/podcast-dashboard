const Plan = ({ plan, flag, setFlag, elemRef, priceRef, buttonRef }) => {
  return (
    <div className="w-full h-full mx-[3%] bg-white relative">
      <div
        className="border w-full xl:py-9 lg:py-7 md:py-5 sm-py-3 py-2 xl:px-7 lg:px-5 md:px-3 px-1 cursor-pointer relative border-purple-400 rounded-lg "
        ref={elemRef}
        onClick={() => setFlag(!flag)}
      >
        <div className="font-bold md:text-sm xl:text-lg">{plan}</div>
        <div className="text-[8px] xl:text-xs xl:pt-2 md:pt-1 py-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
        <div
          className=" flex xl:my-4 lg:my-3 md:my-2 my-1 items-center space-x-5 text-purple-900"
          ref={priceRef}
        >
          <div className=" font-extrabold text-sm md:text-base lg:text-xl xl:text-3xl ">
            $ 54
          </div>
          <div className="font-normal text-base">/month</div>
        </div>
        <ul className="font-bold text-[8px] xl:text-xs xl:mb-5 lg:mb-4 md:mb-3 sm:mb-2 mb-1 list-inside list-disc">
          <li className="py-1">Free access to video class</li>
          <li className="pb-1">Free access to video class</li>
          <li className="">Free access to video class</li>
        </ul>
        <div
          className="md:py-2 sm-py-1 py-0 xl:px-7 w-fit lg:px-5 md:px-3 px-1 border border-purple-400 rounded-lg"
          ref={buttonRef}
        >
          <button className="text-purple-900">Start Free Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
