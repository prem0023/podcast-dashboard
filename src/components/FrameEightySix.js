import { useState, useEffect } from "react";
import Review from "./Review";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FrameEightySix = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const width = window.innerWidth;
    setWidth(width / 3);
    window.addEventListener("resize", resizeSliderWidth);
    return () => window.removeEventListener("scroll", resizeSliderWidth);
  }, []);

  const resizeSliderWidth = () => {
    const width = window.innerWidth;
    setWidth(width / 3);
  };

  return (
    <div className="pl-[10%] my-[7%] w-full relative">
      <div className="my-[3%] pr-[10%] w-1/2 relative">
        <div className=" flex justify-start sm:text-lg md:text-xl lg:text-3xl xl:text-[40px] font-bold">
          Review from customers
        </div>
        <div className="flex justify-start w-full">
          <div className="w-11/12 py-[3%] text-[6px] sm:text-[8px] md:text-[10px] md:text-xs lg:text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
          </div>
        </div>
      </div>

      <div className=" flex w-full  relative flex-row  justify-start items-start ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={35}
          slidesPerView={"auto"}
          fadeEffect={true}
          grabCursor={true}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide
            style={{
              width: width,
            }}
          >
            <Review />
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: width,
            }}
          >
            <Review />
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: width,
            }}
          >
            <Review />
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: width,
            }}
          >
            <Review />
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: width,
            }}
          >
            <Review />
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: width,
            }}
          >
            <Review />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FrameEightySix;
