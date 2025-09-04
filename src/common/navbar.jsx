import React, { useState } from "react";
import BasicMenu from "./menu";
import { ChevronUp, User } from "lucide-react";
import Person from "./person";
import { Button } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion"; // 👈 motion import

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-[1240px] flex justify-between items-center w-full h-[72px] my-[14px] mx-auto bg-white  px-10 md:px-0 relative">
      <div>
        <img src="/home/logo.png" alt="logo" />
      </div>

      {/* Desktop */}
      <div className="md:flex hidden gap-7 text-[#26395C] font-medium ">
        <a href="/eat&drink">Eat & Drink</a>
        <a href="/club">
          Club{" "}
          <sup className="bg-[#0E8BFF] py-[1px] px-2 -left-4 -top-5 rounded-3xl text-white font-semibold text-[10px]">
            +Hot
          </sup>
        </a>

        <BasicMenu
          names="Things to do"
          item1="Water Sports"
          item2="Day Parties"
          item3="Outdoors"
          item4="Rentals"
        />

        <img
          src="/shopping.png"
          className="w-[30px] h-[26px] cursor-pointer"
          alt="shopping"
        />
        <Person
          names="Account"
          item1="My Profile"
          item2="My History"
          item3="Sign Out"
          logoleft={
            <User className="size-5 mr-2 flex items-center justify-center" />
          }
        />

        <div>
          <Button
            className="!bg-[#0E8BFF] !rounded-[6px] !text-[14px] w-[130px] h-[36px] !font-bold "
            size="small"
            variant="contained"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-700 cursor-pointer"
        >
          {open ? <Close /> : <img src="/manu.png" alt="menu" />}
        </button>

        {/* Animated Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-9 left-0 w-full bg-[#F5FAFF] shadow-lg flex flex-col items-start px-10 text-[24px] space-y-5 py-7 z-50 mt-12 text-[#26395C] font-medium"
            >
              <a href="/eat&drink">Eat & Drink</a>
              <a href="/events">Events</a>
              <a href="/club">Club</a>
              <BasicMenu
                names="Things to do"
                item1="Rentals"
                item2="Outdoors"
                item3="Day Parties"
                item4="Water Sports"
                className="!text-[24px] !text-[#26395C] !-ml-1 !font-medium !-mt-3"
              />
              <div className="bg-[#C4C4C4] w-[90%] h-[1px] mb-8 " />
              <a href="/club">My Profile</a>
              <a href="/club">Pay With Crypto</a>
              <a href="/club">Cart</a>
              <a href="/club">Contact Us</a>
              <a href="/club">Log Out</a>
              <div>
                <Button
                  className="!bg-[#0E8BFF] !rounded-[6px] !text-[14px] w-[198px] h-[40px] !font-bold "
                  size="small"
                  variant="contained"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;
