import React from "react";
import "./index.css";
import { ReactComponent as FirstBank } from "./images/newfirstb.svg";

export const TransactionList = () => (
  <div>
    <p className="note">Transaction history</p>
    <div className="mother">
      <div className="list">
        <FirstBank />

        <div className="name-tag">
          <p>Victor Ambibola </p>
          <div className="bank">
            <p>First Bank</p>
            <span>2:00PM</span>
          </div>
        </div>
      </div>
      <div className="frank">
        <p>N2000.00</p>
      </div>
    </div>
  </div>
);
