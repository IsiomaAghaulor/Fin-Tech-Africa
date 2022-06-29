import React from "react";
import "./index.css";
import { ReactComponent as FirstBank } from "./images/newfirstb.svg";

export const TransactionList = () => (
  <div >
    <div className="note-tag">
      <p>Transaction history</p>
    </div>
    <div className="mother">
      <div className="left">
        <FirstBank />
      <div className="transaction-history-middle">
          <p>Victor Abimbola</p>
          <div className="transaction-history-bottom">
            <p>GTB</p>
            <p>2:00PM</p>
          </div>
      </div>
      </div>
      <div className="transaction-history-right">
        <p>N2,000.00</p>
      </div>
    </div>
  </div>
);

