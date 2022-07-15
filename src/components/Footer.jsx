import React from "react";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full p-4 md:justify-center gradient-bg-footer ">
        <div className="flex flex-col items-center justify-between w-full my-4 sm:flex-row">
            <div>
                <h1 className="w-32 py-1 font-bold text-white text-1xl sm:text-3xl" >加密桥</h1>
            </div>
        </div>
        <h2 className="flex w-16 py-1 text-xl font-bold text-center text-white no-wrap sm:text-3xl">Made with ♥‿♥ by Tshembani Mhlongo aka 0xRedPill😁.</h2>

    </div>
  );
};

export default Footer;
