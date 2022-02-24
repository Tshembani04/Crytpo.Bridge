import React, {useContext} from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext, TransactionProvider } from "../context/TransactionContext";
import { Loader } from "./";
import { shortenAddress } from "../utils/shortenAddress";


const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.1px] border-white-100 text-sm font-light text-white ";
const commonStyles1 = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.1px] border-white-200 text-sm font-light text-white";
const commonStyles2 = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.1px] border-white-300 text-sm font-light text-white";

//Creating an input field and going to duplicate it multiple times and I and use () instead of {} since () used to reture JSX
const Input = ({placeholder, name, type, value, handleChange})=>(
    <input 
    placeholder={placeholder}
    type={type}
    step='0.0001'
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism "
     />
);


const Welcome = () => {

    const {connectWallet, currentAccount, formData, sendTransaction, handleChange } = useContext(TransactionContext);

  


    const handleSubmit = (e) => {
        //Destructure all the properties on the form 
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message) return;

        sendTransaction();

    }



  return(
      <div  className="flex w-full justify-center items-center">
          <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
              <div className="flex flex-1 justify-start flex-col mf:mr-10">
                  <h1 className="text-3xl sm:text-5xl  py-1 text-white">
                      Send Crypto <br /> Across 加密桥.
                  </h1>
                  <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                      Explore The Crypto World.  Send Ethereum to your friends, family and fellow co-workers on 加密桥 with lightspeed and low-fees.
                  </p>
                  // If my account is connected to metamask wallet then I can't see the button 
                  // opposite when not connencted
                 {!currentAccount &&(
                     <button 
                  type="button"
                  onClick={connectWallet}
                  className="flex flex-row justify-center items-center my-4 bg-[#4CC9F0] p-3 rounded-full cursor-pointer hover:bg-gray-200 "
                  >
                     <p  className=" text-black text-base "> Connect Wallet</p>
                    </button>
                 )} 
                  <div className="grid sm:grid-cols-3 grid-cols-3 w-full mt-5 border-0 ">
                      <div className={`rounded-tl-2xl ${commonStyles}` }>
                          Reliability
                      </div>
                      <div className={commonStyles}>
                          Security
                      </div>
                      <div className={commonStyles }>
                          Ethereum
                      </div>
                      <div className={commonStyles}>
                          Web 3.0
                      </div>
                      <div className={commonStyles}>
                          Low Fees
                      </div>
                      <div className={commonStyles }>
                          Blockchain
                      </div>
                  </div>
              </div>

              <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                  <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                      <div className="flex justify-between flex-col w-full h-full">
                          <div className="flex justify-between items-start">
                              <div className="w-10 h-10 rounded-full border-2 border-white  flex justify-center items-center">
                                  <SiEthereum fontSize={21} color="#fff"/>
                              </div>
                              <BsInfoCircle fontSize={17} color="#fff"/>
                          </div>
                          <div>
                              <p className="text-white font-light text-sm">
                                  { shortenAddress(currentAccount) }
                              </p>
                              <p className="text-white font-semibold text-lg mt-1">
                            Ethereum
                              </p>
                          </div>
                      </div>
                  </div>

                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                <Input placeholder='Address To' name='addressTo' type='text' handleChange={handleChange} />
                <Input placeholder='Amount (ETH)' name='amount' type='number' handleChange={handleChange} />
                <Input placeholder='Keyword (Gif)' name='keyword' type='text' handleChange={handleChange} />
                <Input placeholder='Enter Message' name='message' type='text' handleChange={handleChange} />

                <div className="h-[1px] w-full bg-white"/>

                {false ? (
                    <Loader/>
                ): (
               <button 
               type="button"
               onClick={handleSubmit}
               className="text-black text-base w-full mt-2  p-2   flex flex-row justify-center items-center my-4 bg-[#4CC9F0]  rounded-full cursor-pointer hover:bg-gray-200"
               >
                    Send Now
               </button>
                )
                
                }
                </div>

              </div>
          </div>
      </div>
  )
};

export default Welcome;


