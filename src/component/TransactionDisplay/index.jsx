import React, {useState} from "react";
import "./index.css";
import { BsEye, BsWallet2 } from "react-icons/bs";
import { MdSwitchAccount} from "react-icons/md";
import { dashboardData } from "../../data";

export const TransactionDisplay = () => {
  const [showBalance, setShowBalance] = useState(false)

   const toggleBalance = () => {
    setShowBalance(showBalance ? false : true);
    console.log(showBalance)
   }

  return (
  <div className="transaction--head">
    <div className="wallet-and-body" style={{display: "flex"}}>
    <div className="wallet">
      <BsWallet2 className="wallet-group"/>
    </div>
    <div className="transaction-body">
      <p>Account Balance</p>
      <h1>{`${showBalance ? "*******" :dashboardData.amount}`}</h1>
      <p>{dashboardData.bank}</p>
      <p>
        <MdSwitchAccount style={{ marginRight: "10px" }} />
       {dashboardData.accountNumber}
      </p>
    </div>
    </div>
    <div className="eye-image">
      <BsEye  style={{cursor: "pointer"}} onClick={toggleBalance}/>
    </div> 
  </div>
  )
  };