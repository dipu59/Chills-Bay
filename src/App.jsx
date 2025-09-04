import React from 'react'

import Footer from './common/footer';
import Navbar from './common/navbar';
import AutoCarousel from './components/hero';
import Mood from './components/moodfor';


function App() {
  return (
    <div className="max-w-[1440px] w-full mx-auto overflow-hidden">
      <Navbar />
      <AutoCarousel/>
      <Mood/>
      <Footer />
    </div>
  );
}

export default App

// const events = [
//   {
//     image: "/home/wizkidSlider.png",
//     title: "Wizkid made in lagos tour",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
//     date: "Dec 12 2022",
//     location: "TBS Lagos",
//     time: "9:00 PM",
//     price: "N20,000",
//   },
//   {
//     image: "https://picsum.photos/id/1011/500/500",
//     title: "Burna Boy live concert",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
//     date: "Jan 10 2023",
//     location: "Accra Arena",
//     time: "8:30 PM",
//     price: "N25,000",
//   },
//   {
//     image: "https://picsum.photos/id/1018/500/500",
//     title: "Davido afrobeat festival",
//     desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo ",
//     date: "Feb 20 2023",
//     location: "Eko Center",
//     time: "7:00 PM",
//     price: "N18,000",
//   },
// ];
