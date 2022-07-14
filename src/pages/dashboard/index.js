import React from "react";
import "./index.css";
import { TransactionDisplay } from "../../component/Dashboard/TransactionDisplay";
import { TransactionBtn } from "../../component/Dashboard/TransactionBtn";
import { TransactionInput } from "../../component/Dashboard/TransactionInput";
import { TransactionList } from "../../component/Dashboard/TransactionList";
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
