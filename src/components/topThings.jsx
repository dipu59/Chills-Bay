import React from 'react'

function TopThings() {
  const items = [
    { img: "/topThings/sight.png", names: "Sight Seeing" },
    { img: "/topThings/volleybal.png", names: "Volley Ball Game" },
    { img: "/topThings/wizkid.png", names: "Wizkid Show" },
    { img: "/topThings/wizkid.png", names: "Wizkid Show" },
    { img: "topThings/sight.png", names: "Sight Seeing" },
    { img: "/topThings/volleybal.png", names: "Volley Ball Game" },
    { img: "/topThings/wizkid.png", names: "Wizkid Show" },
    { img: "/topThings/wizkid.png", names: "Wizkid Show" }
  ];
  return (
    <div className="bg-[#F5FAFF] py-[50px] mt-[40px] ">
      <div className=" md:max-w-[1240px] md:w-full md:mx-auto ">
        <h1 className="md:text-[32px] text-[24px]  text-[#26395C] font-bold tracking-[-2%] text-center md:text-start ">
          Top things to do in Lagos
        </h1>
        {/* Card section */}
        <div className="flex justify-start md:justify-center items-center md:flex-wrap overflow-x-auto  snap-x snap-mandatory scroll-smooth  mt-6 md:mt-[40px] gap-5 ml-6 md:ml-0 px-6 md:px-0 scrollbar-hide  ">
          {items.map(({ img, names }, index) => (
            <div
              className="snap-start shrink-0 md:bg-white rounded-2xl group h-[180px]  md:h-[340px]"
              key={index}
            >
              <div className="md:w-[295px] cursor-zoom-in w-[158px] h-[144px] overflow-hidden md:h-[270px] rounded-2xl  ">
                <img
                  className=" w-full h-full object-cover object-center rounded-2xl hover:scale-110 transition-all duration-300 delay-75 group-hover:brightness-75 group-hover:contrast-125 "
                  src={img}
                  alt={names}
                />
              </div>
              <h2 className="text-center cursor-pointer group-hover:md:border-8  group-hover:border-2 group-hover:mx-1 group-hover:md:mx-3 group-hover:-translate-y-24 group-hover:md:text-3xl group-hover:text-white transition-all duration-500 delay-75 mt-[12px] md:mb-[30px] text-[#26395C] font-bold text-[14px] md:text-[22px] tracking-[-1%] ">
                {names}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopThings
