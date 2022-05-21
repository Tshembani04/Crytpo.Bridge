import React from "react";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer ">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
            <div>
                <h1 className="w-32 font-bold text-1xl sm:text-3xl  py-1 text-white" >加密桥</h1>
            </div>
        </div>
    </div>
  );
};

export default Footer;
