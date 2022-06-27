import React from "react";
import "./index.css";
import { ReactComponent as Eye } from "./images/Eye.svg";
import { ReactComponent as Group } from "./images/Group.svg";
import { ReactComponent as Vec } from "./images/Vector.svg";

export const TransactionDisplay = () => (
  <div className="transaction--head">
    <div className="wallet-and-body" style={{display: "flex"}}>
    <div className="wallet">
      <Group className="wallet-group"/>
    </div>
    <div className="transaction-body">
      <p>Account Balance</p>
      <h1>N2,000,000</h1>
      <p>Wema Bank</p>
      <p>
        <Vec style={{ marginRight: "10px" }} />
        956937598375
      </p>
    </div>
    </div>
    <div className="eye-image">
      <Eye />
    </div> 
  </div>
);