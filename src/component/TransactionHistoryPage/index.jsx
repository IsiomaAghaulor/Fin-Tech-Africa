import React from "react";
import './index.css'
import { TransactionDisplay } from "../TransactionDisplay";
import { TransactionBtn } from "../TransactionBtn";
import { TransactionInput } from "../TransactionInput";
import { TransactionList } from "../TransactionList";


const index = () => (
    <div className="overlay-container">
      <TransactionDisplay />
      <TransactionBtn />
      <TransactionInput />
      <TransactionList />
    </div>
  );


export default index;
