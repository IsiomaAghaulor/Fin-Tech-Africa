import React from "react";
import { TransactionDisplay } from "../TransactionDisplay";
import { TransactionBtn } from "../TransactionBtn";
import { TransactionInput } from "../TransactionInput";
import { TransactionList } from "../TransactionList";


const index = () => (
    <div>
      <TransactionDisplay />
      <TransactionBtn />
      <TransactionInput />
      <TransactionList />
    </div>
  );


export default index;
