import { Menu, Utility } from "../lib/data";
import { Button } from "@mui/material";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-around justify-center mx-auto items-center md:items-start pt-[80px] bg-[#FFFFFF] max-w-[1440px] w-full ">
      <div className="md:max-w-[209px] max-w-[327px]  w-full  ">
        <img
          className="w-[166px] h-[78px] mb-[8px]"
          src="/home/logo.png"
          alt="Brand Logo"
        />
        <p className="text-[#26395C] font-normal text-[15px] md:mb-[24px] mb-[15px] ">
          Copyright 2022 ©{" "}
        </p>
        <div className="flex  items-center gap-[21px]">
          <img
            className="w-[10px] h-[18px]"
            src="/logo/facebook.png"
            alt="Facebook"
          />
          <img
            className="w-[19px] h-[15px]"
            src="/logo/twitter.png"
            alt="twiter"
          />
          <img
            className="size-[16px]"
            src="/logo/instagram.png"
            alt="instagram"
          />
          <img
            className="w-[17px] h-[16px]"
            src="/logo/linkdin.png"
            alt="linkdin"
          />
          <img
            className="w-[20px] h-[14px]"
            src="/logo/youtube.png"
            alt="youtube"
          />
          <img className="size-[20px]" src="/logo/tiktok.png" alt="tiktok" />
        </div>
      </div>

      <div className="hidden md:block max-w-[276px] w-full ">
        <h2 className=" tracking-[8%] uppercase text-base text-[#26395C] font-bold  ">
          menu
        </h2>
        <div className="w-[241px] flex flex-col flex-wrap pt-[27px] mt-[30px] h-[214px] border-t-[1px] border-t-[#E4E7EC]   ">
          {Menu.map((item, index) => (
            <li
              className=" list-none pb-1 cursor-pointer hover:text-blue-400 text-[16px] leading-[27px] text-[#656B89] tracking-[1%] "
              key={index}
            >
              {item.name}
            </li>
          ))}
        </div>
      </div>

      <div className="hidden md:block max-w-[157px] w-full ">
        <h2 className=" tracking-[8%] uppercase text-base text-[#26395C] font-bold ">
          Utility Pages
        </h2>
        <div className="w-[157px] pt-[27px] mt-[30px] h-[263px] border-t-[1px] border-t-[#E4E7EC]   ">
          {Utility.map((item, index) => (
            <li
              className=" list-none pb-2 cursor-pointer hover:text-blue-400 text-[16px] leading-[27px] text-[#656B89] tracking-[1%] "
              key={index}
            >
              {item.names}
            </li>
          ))}
        </div>
      </div>

      <div className="mt-7 md:mt-0">
        <div className="md:max-w-[288px] max-w-[327px] w-full bg-[#F5FAFF] rounded-[20px] py-[30px] px-[24px] ">
          <img src="footer.png" alt="Footter Card Image" />
          <h2 className="text-[#26395C] tracking-[-1%] leading-[27px] font-bold py-[10px] text-[22px] ">
            Become a Partner
          </h2>
          <p className="leading-[27px] tracking-[1%] font-normal text-[#656B89] pt-[10px] pb-[24px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
            pellentesque posuere.
          </p>
          <div className="w-full">
            <Button
              variant="contained"
              className="!w-full !text-[15px] !font-bold !tracking-[-1%] !h-[40px] !bg-[#0E8BFF]"
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>

      {/* For Mobile Responsive */}

      <div className="flex md:hidden justify-center  max-w-[327px] mt-[40px] pb-17 w-full">
        <div className="md:hidden block  ">
          <h2 className=" tracking-[8%] uppercase text-base text-[#26395C] font-bold  ">
            menu
          </h2>
          <div className=" flex w-[160px] flex-col flex-wrap pt-[27px] mt-[30px] h-[244px] border-t-[1px] border-t-[#E4E7EC]   ">
            {Menu.map((item, index) => (
              <li
                className=" list-none pb-2 cursor-pointer hover:text-blue-400 text-[14px] md:text-[16px] leading-[27px] text-[#656B89] tracking-[1%] "
                key={index}
              >
                {item.name}
              </li>
            ))}
          </div>
        </div>

        <div className="md:hidden block  ">
          <h2 className=" tracking-[8%] uppercase text-base text-[#26395C] font-bold ">
            Utility Pages
          </h2>
          <div className="w-[200x] pt-[27px] mt-[30px] h-[263px] border-t-[1px] border-t-[#E4E7EC]   ">
            {Utility.map((item, index) => (
              <li
                className=" list-none pb-2 cursor-pointer hover:text-blue-400 text-[14px] md:text-[16px] leading-[27px] text-[#656B89] tracking-[1%] "
                key={index}
              >
                {item.names}
              </li>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
