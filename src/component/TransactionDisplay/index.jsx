import React from "react";
import { ReactComponent as Eye } from './images/Eye.svg';
import { ReactComponent as Group } from './images/Group.svg';
import { ReactComponent as Vec } from './images/Vector.svg';



export const TransactionDisplay = () => (
  <div>
    <Group/>
    <p>Account Balance</p>
    <h1>N2,000,000</h1>
    <Eye/>
    <p>Wema Bank</p>
    <Vec/>
    <p>956937598375</p>
  </div>
);
