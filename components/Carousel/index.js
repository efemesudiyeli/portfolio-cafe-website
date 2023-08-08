"use client";

import Image from "next/image";
import { useRef } from "react";

// Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { GrPrevious, GrNext } from "react-icons/gr";

import stockPhoto1 from "@/public/images/stockcafe-1.jpg";
import stockPhoto2 from "@/public/images/stockcafe-2.jpg";
import stockPhoto3 from "@/public/images/stockcafe-3.jpg";
import stockPhoto4 from "@/public/images/stockcafe-4.jpg";

export default function Carousel() {
  const swiperRef = useRef();

  return (
    <figure className="selection:bg-white selection:text-base-100 -z-50">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        loop={true}
        effect={"fade"}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[EffectFade, Autoplay, Navigation]}
        className="mySwiper max-h-[40rem] "
      >
        <SwiperSlide>
          <Image
            src={stockPhoto1}
            width={0}
            height={0}
            sizes="100%"
            className="w-full max-md:aspect-[9/16] max-md:h-[40rem] max-md:object-cover   "
            alt="2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={stockPhoto2}
            width={0}
            height={0}
            sizes="100%"
            className="w-full max-md:aspect-[9/16] max-md:h-[40rem] max-md:object-cover    "
            alt="3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={stockPhoto3}
            width={0}
            height={0}
            sizes="100%"
            className="w-full max-md:aspect-[9/16] max-md:h-[40rem] max-md:object-cover    "
            alt="4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={stockPhoto4}
            width={0}
            height={0}
            sizes="100%"
            className="w-full max-md:aspect-[9/16] max-md:h-[40rem] max-md:object-cover -mt-80  "
            alt="5"
          />
        </SwiperSlide>
        {/* Slider Banner */}

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="bg-base-100 h-full w-3/12 absolute z-[100] left-[60%] top-0 flex justify-center max-lg:w-6/12 max-lg:left-[45%]"
        >
          <div className="flex flex-col justify-around px-8 ">
            <div>
              <h2 className="font-extrabold text-3xl max-lg:text-xl">
                QUICKLY, EVERYONE STOP WHAT YOU&apos;RE DOING AND FILL UP THE
                COFFEES.
              </h2>
              <p className="font-extralight max-lg:text-sm">
                Discover a place where nature comes alive, smiles spread, and
                friendships blossom: Our Cafe. With every sip, warm
                conversations will uplift your spirits, and you&apos;ll start
                your day with renewed energy. <br /> <br /> Welcome!
              </p>
            </div>
            <div className=" flex gap-2">
              <motion.button
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 1.2,
                }}
                className="px-5 py-5 bg-white w-fit text-base-100"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <GrPrevious />
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 1.2,
                }}
                className="px-5 py-5 bg-white w-fit text-base-100"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <GrNext />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Swiper>
    </figure>
  );
}
