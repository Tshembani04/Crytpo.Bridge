import React, {useContext} from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext, TransactionProvider } from "../context/TransactionContext";
import { Loader } from ".";
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
    className="w-full p-2 my-2 text-sm text-white bg-transparent border-none rounded-sm outline-none white-glassmorphism "
     />
);


const Welcome = () => {

    const {connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

  


    const handleSubmit = (e) => {
        //Destructure all the properties on the form 
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message) return;

        sendTransaction();

    }



  return(
      <div  className="flex items-center justify-center w-full">
          <div className="flex flex-col items-start justify-between px-4 py-12 mf:flex-row md:p-20">
              <div className="flex flex-col justify-start flex-1 mf:mr-10">
                  <h1 className="py-1 text-3xl text-white sm:text-5xl">
                      Send Crypto <br /> Across 加密桥 .
                  </h1>
                  <p className="w-11/12 mt-5 text-base font-light text-left text-white md:w-9/12">
                      Explore The Crypto World.  Send Ethereum to your friends, family and fellow co-workers on 加密桥 (Crytpo Bridge) with lightspeed and low-fees. 

                  </p>
                  // If my account is connected to metamask wallet then I can't see the button 
                  // opposite when not connencted
                 {!currentAccount &&(
                     <button 
                  type="button"
                  onClick={connectWallet}
                  className="flex flex-row justify-center items-center my-4 bg-[#4CC9F0] p-3 rounded-full cursor-pointer hover:bg-gray-200 "
                  >
                     <p  className="text-base text-black "> Connect Wallet</p>
                    </button>
                 )} 
                  <div className="grid w-full grid-cols-3 mt-5 border-0 sm:grid-cols-3 ">
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

              <div className="flex flex-col items-center justify-start flex-1 w-full mt-10 mf:mt-0">
                  <div className="flex-col items-start justify-end w-full h-40 p-3 my-5 rounded-xl sm:w-72 eth-card white-glassmorphism">
                      <div className="flex flex-col justify-between w-full h-full">
                          <div className="flex items-start justify-between">
                              <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full">
                                  <SiEthereum fontSize={21} color="#fff"/>
                              </div>
                              <BsInfoCircle fontSize={17} color="#fff"/>
                          </div>
                          <div>
                              <p className="text-sm font-light text-white">
                                  { shortenAddress(currentAccount) }
                              </p>
                              <p className="mt-1 text-lg font-semibold text-white">
                            Ethereum
                              </p>
                          </div>
                      </div>
                  </div>

                <div className="flex flex-col items-center justify-start w-full p-5 sm:w-96 blue-glassmorphism">
                <Input placeholder='Address To' name='addressTo' type='text' handleChange={handleChange} />
                <Input placeholder='Amount (ETH)' name='amount' type='number' handleChange={handleChange} />
                <Input placeholder='Keyword (Gif)' name='keyword' type='text' handleChange={handleChange} />
                <Input placeholder='Enter Message' name='message' type='text' handleChange={handleChange} />

                <div className="h-[1px] w-full bg-white"/>

                {isLoading ? (
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


{/* <h1 className="py-1 text-3xl text-white sm:text-5xl">
Send Crypto <br /> Across 加密桥.
</h1>
<p className="w-11/12 mt-5 text-base font-light text-left text-white md:w-9/12">
Explore The Crypto World.  Send Ethereum to your friends, family and fellow co-workers on 加密桥 with lightspeed and low-fees. 

</p>
// If my account is connected to metamask wallet then I can't see the button 
// opposite when not connencted */}


