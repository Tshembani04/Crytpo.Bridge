import React from "react";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full p-4 md:justify-center gradient-bg-footer ">
        <div className="flex flex-col items-center justify-between w-full my-4 sm:flex-row">
            <div>
                <h1 className="w-32 py-1 font-bold text-white text-2xl sm:text-3xl" >加密桥</h1>
            </div>
        </div>
        <div class="text-center text-gray-700 p-4 font-bold text-white text-xl sm:text-xl">
    © 2022 Copyright:
    <a class="text-gray-800 font-bold  text-lg sm:text-xl" > Made with ♥‿♥ by NerveLabs.</a>
  </div>
    </div>
  );
};

export default Footer;
