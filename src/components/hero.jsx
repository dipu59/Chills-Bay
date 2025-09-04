import { useEffect, useState } from "react";
import Title from "../common/title";
import { ChevronDown } from "lucide-react";
import { Button } from "@mui/material";

const images = ["/home/hero.png", "/home/hero2.jpg", "/home/hero3.jpg"];
const imagessm = ["/home/heromobile.png", "/home/hero.png", "/home/hero3.jpg"];

export default function AutoCarousel() {
  const [index, setIndex] = useState(0);

  // Auto change image (Desktop view)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Auto change image (Mobile view)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagessm.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[636px]  overflow-hidden">
      {/* Background Images with fade effect (Desktop View) */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute hidden md:block  inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Background Images with fade effect (Mobile View) */}
      {imagessm.map((img, i) => (
        <div
          key={i}
          className={`absolute md:hidden block  inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute hidden md:block inset-0 bg-black/40" />

      {/* Design on Image (Desktop view) */}
      <div className="absolute hidden md:block mt-[80px] pl-[100px]">
        <Title className="max-w-[694px]  w-full !text-[62px] leading-[120%] font-bold text-[#FFFFFF]">
          Find amazing things to do anytime, anywhere in Lagos.
        </Title>
        <div className=" mt-[40px] w-[726px]  bg-[#FBFCFF] rounded-[8px] h-[114px]  ">
          <div className="flex gap-2 max-w-[1066px] w-full justify-center h-full items-center">
            {/* 01 */}
            <div>
              <p className="text-xs text-[#26395C] mb-1 ">Location</p>
              <div className="relative w-[152px]">
                <select
                  id="places"
                  className="border h-[36px] rounded-[8px] pl-1  bg-white text-[#656B89] text-sm w-full border-[#D6EBFD] appearance-none"
                >
                  <option>Oshodi</option>
                  <option>Welcome</option>
                  <option>Hello</option>
                  <option>Explore</option>
                  <option>Here</option>
                </select>
                {/* Custom icon */}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#969DAA] text-xs focus:rotate-180 hover:rotate-180 ">
                  <ChevronDown className="size-5" />
                </span>
              </div>
            </div>
            {/* 02 */}
            <div>
              <p className="text-xs text-[#26395C] mb-1 ">Date</p>
              <div className="relative w-[152px]">
                <select
                  id="places"
                  className="border h-[36px] rounded-[8px] pl-[10px] pr-8 bg-white text-[#656B89] text-sm w-full border-[#D6EBFD] appearance-none"
                >
                  <option>Date</option>
                  <option>Welcome</option>
                  <option>Hello</option>
                  <option>Explore</option>
                  <option>Here</option>
                </select>
                {/* Custom icon */}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#969DAA] text-xs focus:rotate-180 hover:rotate-180 ">
                  <ChevronDown className="size-5" />
                </span>
              </div>
            </div>
            {/* 03 */}
            <div>
              <p className="text-xs text-[#26395C] mb-1 ">Activities</p>
              <div className="relative w-[152px]">
                <select
                  id="places"
                  className="border h-[36px] rounded-[8px] pl-[10px] pr-8 bg-white text-[#656B89] text-sm w-full border-[#D6EBFD] appearance-none"
                >
                  <option>Night Clubs</option>
                  <option>Welcome</option>
                  <option>Hello</option>
                  <option>Explore</option>
                  <option>Here</option>
                </select>
                {/* Custom icon */}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#969DAA] text-xs  ">
                  <ChevronDown className="size-5" />
                </span>
              </div>
            </div>
            <div>
              <Button
                variant="contained"
                className="!h-[54px] !w-[152px] !bg-[#0E8BFF] "
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Design on Image (Mobile view) */}
      <div className="absolute md:hidden mx-auto w-full  flex h-full justify-center items-center flex-col  ">
        <div className="  w-[328px] p-[30px]  !mx-auto   bg-[#FBFCFF] rounded-[8px] h-[387px]  ">
          <h2 className="!w-[268px] tracking-[0%] text-[#26395C]  text-[24px] font-bold leading-[30px]  ">
            Find amazing things to do in Lagos.
          </h2>
          <div className="flex flex-col gap-2 max-w-[1066px] w-full justify-center h-full items-center">
            {/* 01 */}
            <div className="w-full">
              <p className="text-xs text-[#26395C] mb-1 ">Location</p>
              <div className="relative w-full">
                <select
                  id="places"
                  className="border h-[36px] rounded-[8px] pl-3  bg-white text-[#656B89] text-[15px] w-full border-[#F5FAFF] appearance-none"
                >
                  <option>Oshodi</option>
                  <option>Welcome</option>
                  <option>Hello</option>
                  <option>Explore</option>
                  <option>Here</option>
                </select>
                {/* Custom icon */}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#969DAA] text-xs focus:rotate-180 hover:rotate-180 ">
                  <img
                    src="/logo/Activities.png"
                    alt="logo"
                    className="size-[16px]"
                  />
                </span>
              </div>
            </div>
            {/* 02 */}
            <div className="w-full">
              <p className="text-xs text-[#26395C] mt-1 mb-1 ">Date</p>
              <div className="relative w-full">
                <select
                  id="places"
                  className="border h-[36px] rounded-[8px] pl-3  bg-white text-[#656B89] text-[15px] w-full border-[#F5FAFF] appearance-none"
                >
                  <option>12/08/2022</option>
                  <option>Welcome</option>
                  <option>Hello</option>
                  <option>Explore</option>
                  <option>Here</option>
                </select>
                {/* Custom icon */}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#969DAA] text-xs focus:rotate-180 hover:rotate-180 ">
                  <img
                    src="/logo/Activities.png"
                    alt="logo"
                    className="size-[16px]"
                  />
                </span>
              </div>
            </div>
            {/* 03 */}
            <div className="w-full mt-1">
              <p className="text-xs text-[#26395C] mb-1 ">Activities</p>
              <div className="relative w-full">
                <select
                  id="places"
                  className="border h-[36px] rounded-[8px] pl-3  bg-white text-[#656B89] text-[15px] w-full border-[#F5FAFF] appearance-none"
                >
                  <option>Night Clubs</option>
                  <option>Welcome</option>
                  <option>Hello</option>
                  <option>Explore</option>
                  <option>Here</option>
                </select>
                {/* Custom icon */}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#969DAA] text-xs  ">
                  <img
                    src="/logo/Activities.png"
                    alt="logo"
                    className="size-[16px]"
                  />
                </span>
              </div>
            </div>
            <div className="w-full pb-6">
              <Button
                variant="contained"
                className="!h-[35px] !w-full !bg-[#0E8BFF] "
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
