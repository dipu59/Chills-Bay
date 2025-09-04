import React from "react";
import Title from "../common/title";

function Mood() {
  const item = [
    { img: "/home/foodfilter.png", titles: "Eat & Drink" },
    { img: "/home/evelts.png", titles: "Events" },
    { img: "/home/clubfilter.png", titles: "Club" },
    { img: "/home/things.png", titles: "Things to do" },
  ];
  return (
    <main className="mt-[40px]">
      <Title className="text-center text-[24px]">
        What are you in the mood for?
      </Title>
      <div className="flex  flex-wrap max-w-[1240px] w-full justify-center mx-auto ">
        {item.map((items, index) => (
          <div className="md:-mx-7 -mx-4" key={index}>
            <img
              className="w-[200px] h-[178px] md:w-auto md:h-auto object-cover object-center "
              src={items.img}
              alt={items.titles}
            />
            <h2 className="text-center text-[#26395C] text-xl mt-[5px] mb-3 md:mb-0  md:text-[32px] font-bold md:-mt-5 ">
              {items.titles}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Mood;
