import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./index.css";

export const TransactionBtn = () => {

  const navigate = useNavigate()

 
  return (
    <div className="TransactionBtn">
      
        <button onClick={() => navigate("/transfer")} className="transfer">Transfer</button>
        
  
      <button onClick={() => navigate("/profile")} className="profile"> Profile</button>
    </div>
  );
};
