"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";
import Title from "./title";
import { Button } from "@mui/material";
import { cn } from "../utils/cn";

export default function EventSlider({ events, title, desc, date, contact, addbtn }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative max-w-[1027px] max-h-[1053px] h-full  mx-auto">
      {/* Arrows */}
      <button
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        className="absolute hidden md:block -left-24 top-1/2 -translate-y-1/2  p-2 rounded-full cursor-pointer active:scale-90 z-10"
      >
        <img src="/home/leftArrow.png" alt="" />
      </button>
      <button
        onClick={() => emblaApi && emblaApi.scrollNext()}
        className="absolute hidden md:block  -right-10 top-1/2 -translate-y-1/2  p-2 rounded-full cursor-pointer active:scale-90 z-10"
      >
        <img src="/home/rightArrow.png" alt="" />
      </button>

      {/* Slider */}
      <div className="embla  overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {events.map((event, index) => (
            <div
              className="embla__slide flex-[0_0_100%] min-w-0 p-4"
              key={index}
            >
              <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full md:w-1/2 object-cover rounded-2xl"
                />
                {/* Dots */}
                <div className="flex md:hidden justify-center mt-7 gap-2">
                  {events.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => emblaApi && emblaApi.scrollTo(i)}
                      className={`w-3 h-3 rounded-full ${
                        selectedIndex === i ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="p-6 flex flex-col justify-between md:w-1/2">
                  <div>
                    <Title className={cn("max-w-[385px]", title)}>
                      {event.title}
                    </Title>
                    <p
                      className={cn(
                        "text-[#26395C] text-base md:text-xl leading-[25px] md:leading-[30px] max-w-[385px] mt-2",
                        desc
                      )}
                    >
                      {event.desc}
                    </p>

                    <div className={cn("text-[#26395C]", date)}>
                      <div className="flex items-center mt-[30px] gap-3  text-sm">
                        <img src="/eat&drink/slider/date.png" alt="date" />{" "}
                        <span className="font-bold text-base md:text-xl tracking-[5%] leading-[18px] ">
                          {event.date}
                        </span>
                        <img src="/eat&drink/slider/location.png" alt="date" />
                        <span className="font-bold text-base md:text-xl tracking-[5%] leading-[18px] ">
                          {" "}
                          {event.location}
                        </span>
                      </div>
                      <div className="flex items-center mt-4  gap-3  text-sm">
                        <img src="/eat&drink/slider/time.png" alt="date" />
                        <span className="font-bold text-base md:text-xl tracking-[5%] leading-[18px] ">
                          {event.time}
                        </span>

                        <img src="/eat&drink/slider/tag.png" alt="date" />
                        <span className="font-bold text-base md:text-xl tracking-[5%] leading-[18px] ">
                          {event.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      className={cn(
                        "!py-5 !border !border-[#0E8BFF] text-[#0E8BFF]  !font-bold !w-[178px] !h-[40px] !text-[15px] !rounded-xl",
                        addbtn
                      )}
                    >
                      Add to cart
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      className="!py-5 !bg-[#0E8BFF] !font-bold !w-[178px] !h-[40px] !text-[15px] !rounded-xl"
                    >
                      Book Now
                    </Button>
                  </div>

                  <div
                    className={cn(
                      "mt-[30px] flex gap-3 text-[#26395C]  ",
                      contact
                    )}
                  >
                    <h2 className="text-base leading-[30px] md:text-xl">
                      Connect with us on:
                    </h2>
                    <div className="flex gap-3">
                      <img
                        className="size-[24px] cursor-pointer"
                        src="eat&drink/slider/twiter.png"
                        alt="Twiter"
                      />
                      <img
                        className="size-[24px] cursor-pointer"
                        src="eat&drink/slider/insta.png"
                        alt="Instagram"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="md:flex hidden justify-center mt-4 gap-2">
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`w-3 h-3 rounded-full ${
              selectedIndex === i ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
