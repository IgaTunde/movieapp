import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import MobileSearch from "./MobileSearch";
import Discover from "./Discover";
import Genre from "./Genre";
import Shelf from "./Shelf";
import Img from "../images/movieImg.svg";

function SideBar() {
  const { menuOpen, toggleMenu, handleSidebarClick } = useContext(MovieContext);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-40 lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`sidebarflow overflow-y-auto transform transition-transform duration-500 ease-in-out fixed lg:block z-50 w-2/3 lg:w-[15%] pt-8 bg-white shadow-black/30 px-6 drop-shadow-md shadow-md h-full dark:bg-veryDarkBlueDarkModeBg ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
        // onClick={handleSidebarClick}
      >
        <div className="flex flex-col justify-center items-center">
          <img src={Img} alt="" className="h-[170px] lg:h-[100px] pb-5" />
          <MobileSearch />
        </div>
        <Discover />
        <Genre />
        <Shelf />
      </div>
    </>
  );
}

export default SideBar;
