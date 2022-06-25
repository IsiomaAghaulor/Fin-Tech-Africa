import React from "react";
import { TransactionDisplay } from "../TransactionDisplay/index";
import { TransactionBtn } from "../TransactionBtn/index";
import { TransactionInput } from "../TransactionInput/index";
import { TransactionList } from "../TransactionList/index";


const index = () => {
  return (
    <div>
      <TransactionDisplay />
      <TransactionBtn />
      <TransactionInput />
      <TransactionList />
    </div>
  );
};

export default index;
