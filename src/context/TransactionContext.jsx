import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

//ethereum window object meaning I am ready to face the blockchain

const { ethereum } = window;

//fetch ethereum contract

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({
    provider,
    signer,
    transactionsContract,
  });

    return transactionsContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const [formData, setFormData] = useState({addressTo: '', amount: '', keyword: '', message: ''});

  const [isLoading, setIsLoading] = useState(false);

  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));

  const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}))
  }

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask!");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        //getAllTransactions();
      } else {
        console.log("No Accounts Found");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No Ethereum Object.");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask!");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No Ethereum Object.");
    }
  };


  const sendTransaction = async () =>{
      try {
        if (!ethereum) return alert("Please install metamask!");


        const { addressTo, amount, keyword, message } = formData;

        const transactionsContract = getEthereumContract();

        const parsedAmount = ethers.utils.parseEther(amount)


        await ethereum.request({
            method: 'eth_sendTransaction',
            params:[{
                from: currentAccount,
                to: addressTo,
                gas: "0x5208",  //21000 GWEI
                value: parsedAmount._hex, //0.00001 or whatever chosen on our form
            }]
        });

        const transactionHash = await transactionsContract.addToBlockChain(addressTo, parsedAmount, message, keyword);

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

        const transactionsCount = await transactionsContract.getTransactionCount();

        setTransactionCount(transactionCount.toNumber());
        

      } catch (error) {
        console.log(error);

        throw new Error("No Ethereum Object.");
      }
  }





  



  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};






































































// const sendTransaction = async () =>{
//     try {
//       if (!ethereum) return alert("Please install metamask!");

//       // get the data from the form...(Inputs)

//       const { addressTo, amount, keyword, message } = formData;

//       const transactionContract = getEthereumContract();

//       const parsedAmount = ethers.utils.parseEther(amount)

//       //Now lets send some Ethereum from one address to another

//       await ethereum.request({
//           method: 'eth_sendTransaction',
//           params:[{
//               from: currentAccount,
//               to: addressTo,
//               gas: "0x5208",  //21000 GWEI
//               value: parsedAmount._hex, //0.00001 or whatever chosen on our form
//           }]
//       });

//       // Asyncronous action it takes sometime for the transaction to go through
//       const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

//       setIsLoading(true)
//       console.log(`Loading - ${transactionHash.hash}`);
//       await transactionHash.wait()
//       setIsLoading(false)
//       console.log(`Success - ${transactionHash.hash}`);

//       const transactionCount = await transactionContract.getTransactionCount();

//       setTransactionCount(transactionCount.toNumber());

//     } catch (error) {
//       console.log(error);

//       throw new Error("No Ethereum Object.");
//     }
// }