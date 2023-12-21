import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import type SwiperType from "swiper";
import { cn } from "@/lib/utils";

interface ImageSliderProps {
  urls: string[];
}
const ImageSlider = ({ urls }: ImageSliderProps) => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [slideConfig, setSlideConfig] = useState({
    isBegining: true,
    isEnd: activeIndex === urls.length - 1,
  });

  const onSlideChange = () => {
    if (swiper) {
      setActiveIndex(swiper.activeIndex);
    }
  };

  useEffect(() => {
    swiper?.on("slideChange", onSlideChange);
    setSlideConfig({
      isBegining: activeIndex === 0,
      isEnd: activeIndex === urls.length - 1,
    });
  }, [swiper, urls]);

  const activeStyles =
    "active:scale-[0.97] grid opacity-100 hover:scale-[105] absolute top-1/2 -translate-y-1/2 aspect-square z-50 h-8 w-8 place-items-center rounded-full bg-white border-zinc-300 border-2";
  const inActiveStyles = "hidden text-gray-400";
  return (
    <div className=" group relative bg-zinc-100 aspect-square overflow-hidden rounded-xl">
      <div className="absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition ">
        <button
          className={cn(activeIndex, "right-3 transition", {
            inActiveStyles: slideConfig.isEnd,
            "hover:bg-primary-300 text-primary-800 opacity-100":
              !slideConfig.isEnd,
          })}
        ></button>
        <button
          className={cn(activeIndex, "left-3 transition", {
            inActiveStyles: slideConfig.isEnd,
          })}
        ></button>
      </div>
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination]}
        className="h-full w-full"
      >
        {urls.map((url, index) => (
          <SwiperSlide key={url} className="-z-10 relative h-full w-full">
            <Image
              src={url}
              alt="Product Image"
              fill
              loading="eager"
              className="-z-10 h-full w-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
