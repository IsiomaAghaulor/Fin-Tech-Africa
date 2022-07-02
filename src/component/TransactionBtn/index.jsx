import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export const TransactionBtn = () => {

  const navigate = useNavigate()

 
  return (
    <div className="TransactionBtn">
      
        <button onClick={() => navigate("/")} className="transfer">Transfer</button>
  
      <button className="profile"> Profile</button>
    </div>
  );
};
