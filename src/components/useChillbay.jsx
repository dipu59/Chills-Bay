import React, { useEffect, useState } from "react";
import { UseChillbayCard } from "../lib/data";
import Title from "../common/title";
import { motion, AnimatePresence,  easeIn } from "framer-motion";

function UseChillbay() {
  const [index, setIndex] = useState(0);

  // Auto change image (Desktop view)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % UseChillbayCard.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {/* Desktop view */}
      <div className="hidden md:block">
        <Title className="text-center mt-[60px]">Why Use Chillsbay?</Title>
        <div className="max-w-[1240px]   w-full h-[453px] mt-[40px]  mx-auto bg-[#189EFF0F] md:flex justify-center gap-4 items-center text-center rounded-2xl">
          {UseChillbayCard.map(({ title, desc, img }, index) => (
            <div
              key={index}
              className="hover:bg-white/80 transition-all duration-300 delay-75 rounded-2xl p-4"
            >
              <div className="flex justify-center">
                {" "}
                <div className=" bg-[#0E8BFF0A] size-[128px] p-0 rounded-2xl">
                  <img
                    src={img}
                    className="size-[128px] text-center flex justify-center "
                    alt={title}
                  />
                </div>
              </div>

              <h1 className="text-[#000000] font-bold w-[320px] !text-[32px] mt-[16px] mb-[12px] ">
                {title}
              </h1>
              <p className="text-[24px] max-w-[332px] text-[#000000] leading-[34px] ">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-[#189EFF0F] md:hidden block relative overflow-hidden">
        <div className="w-[317px] mx-auto py-[70px]">
          <h1 className="text-[#26395C] font-bold text-[24px] text-center mb-[50px]">
            Why Use Chillsbay?
          </h1>

          <div className="relative h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.4 , ease: easeIn }}
                className="absolute w-full"
              >
                <div className="flex justify-center">
                  <div className="bg-[#0E8BFF0A] size-[128px] rounded-2xl flex items-center justify-center">
                    <img
                      src={UseChillbayCard[index].img}
                      className="size-[128px] object-contain"
                      alt={UseChillbayCard[index].title}
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <h2 className="text-[#26395C] font-bold !text-[27px] py-[12px] leading-[34px] text-center w-[238px]">
                    {UseChillbayCard[index].title}
                  </h2>
                </div>

                <div className="flex justify-center">
                  <p className="w-[317px] text-[#000000] leading-[34px] text-[24px] text-center">
                    {UseChillbayCard[index].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bullet Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {UseChillbayCard.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-[10px] h-[10px] rounded-full cursor-pointer transition-all ${
                  index === i ? "bg-[#189EFF] w-[24px]" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseChillbay;
