import React from "react";
import './index.css'
import { TransactionDisplay } from "../../component/TransactionDisplay";
import { TransactionBtn } from "../../component/TransactionBtn";
import { TransactionInput } from "../../component/TransactionInput";
import { TransactionList } from "../../component/TransactionList";
import { DashboardHeader } from "../../component/DashboardHeader";


const index = () => (
    <div className="overlay-container">
      <DashboardHeader />
      <TransactionDisplay />
      <TransactionBtn />
      <TransactionInput />
      <TransactionList />
    </div>
  );


export default index;
