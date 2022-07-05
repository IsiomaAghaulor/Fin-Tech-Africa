import React, { useState } from "react";
import "./index.css";
import { BsEye, BsWallet2, BsEyeSlash } from "react-icons/bs";
import { MdSwitchAccount } from "react-icons/md";
import { dashboardData } from "../../data";

export const TransactionDisplay = () => {
  const [showBalance, setShowBalance] = useState(false);
  // const [show, setShow] = useState(true);

  const toggleBalance = () => {
    setShowBalance(showBalance ? false : true);
    console.log(showBalance);
  };

  // const togglesShow = () => {
  //   setShow(!show);
  // };

  return (
    <div className="transaction--head">
      <div className="wallet-and-body" style={{ display: "flex" }}>
        <div className="wallet">
          <BsWallet2 className="wallet-group" />
        </div>
        <div className="transaction-body">
          <p>Account Balance</p>
          <h1>{`${showBalance ? "*******" : dashboardData.amount}`}</h1>
          <p>{dashboardData.bank}</p>
          <p>
            <div className="row-effect">
              <div><MdSwitchAccount  className=" account"/></div>
              <div>{dashboardData.accountNumber}</div>
            </div>
            
          </p>
        </div>
      </div>
      <div className="eye-image" onClick={toggleBalance}>
        {showBalance ? <BsEyeSlash className="icons" /> : <BsEye className="icons"  />}
        
      </div>
    </div>
  );
};
