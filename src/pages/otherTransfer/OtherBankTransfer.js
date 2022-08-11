import React, { useState, useEffect } from "react";
import "./otherBank.css";
import axios from "axios";
import SelectDropdown from "../../component/SelectDropdown/SelectDropdown";
import { apiPost } from "../../utils/apiHelper";


function OtherBankTransfer() {
  const [toggleState, setToggleState] = useState(1);
  const [banks, setBanks] = useState([]);
  const [bankCode, setBankCode] = useState("");
  const [accountNumber, setAccountNumber] = useState([""]);
  // eslint-disable-next-line
  const [userName, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [amount, setAmount] = useState("");
  const [narration, setNarration] = useState("");
  const [error, setError] = useState("");
   
  const toggleTab = (index) => {
    setToggleState(index);
  };


  useEffect(() => {
    async function getOtherBanks() {
      const response = await axios.get(
        "https://mentorship-payment-app.herokuapp.com/api/v1/transfers/banks"
      );
      return response;
    }

    getOtherBanks().then((resp) => {
      
      setBanks([...resp.data]);
    });
    
  }, []);
   
  const bankSelectHandle = (e) => {
    setBankCode(e.target.value);
    if (accountNumber !== "" && accountNumber.length ===10 && bankCode !== ""){
      console.log('acc', accountNumber, 'code', e.target.value,'code selected');
      
      apiPost("https://mentorship-payment-app.herokuapp.com/api/v1/transfers/resolveOtherBank", bankCode,false)
    }
  }

  
  const submitTransfer = (userName, accountNumber, bankCode, narration, pin) => {
    if(
      accountNumber === "" ||
      banks === "" ||
      pin === "" ||
      amount === "" ||
      narration === "" 
      ){
        return setError("please fill all fields appropriately")
      }

    axios({
      method: "POST",
      url: "https://mentorship-payment-app.herokuapp.com/api/v1/transfers/otherBank",
      data: {
        accountName: userName,
        accountNumber: accountNumber,
        amount: Number(amount),
        bankCode: bankCode,
        narration: narration,
        pin: pin
       },
       header: {
        Authorization : `Bearer ${localStorage.getItem("accessToken")}`,
       }
    })
    .then((response) =>
    {
      console.log(response.data)
      
    }
    )
    .catch((error) => console.log(`${error.message}`))
  }

  return (
    <div className="app__OtherBankTransfer-container">
      <div className="app__OtherBankTransfer-tabs">

        <div
          className={toggleState === 1 ? "tab activeTab" : "tab"}
          onClick={() => toggleTab(2)}
        >
          Local Bank Transfer
        </div>
        
        <div
          className={toggleState === 1 ? "tab activeTab" : "tab"}
          onClick={() => toggleTab(2)}
        >
          Other Bank Transfer
        </div>
      </div>

      <div className="app__OtherBankTransfer-tabContent">
       

        <div
          className="content active-content"
        >
          <p></p>

          <p>{userName}</p>
          <p>Account Number</p>
          <input
            title="Account Number"
            className="app__OtherBankTransfer-input"
            placeholder="Account Number"
            
            onChange={(e) => setAccountNumber(e.target.value)}
            value={accountNumber}
          />

          <p>Select Banks</p>
          <SelectDropdown
            id="payment-select-helper"
            value={bankCode}
            onChange={bankSelectHandle}
            name="Select Bank"
            dropValues={banks}
          />

          <p>Amount</p>
          <input
            title="Amount"
            className="app__OtherBankTransfer-input"
            placeholder="Amount"
            
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />

          <p>Pin</p>
          <input
            title="Pin"
            className="app__OtherBankTransfer-input"
            placeholder="Pin"
            onChange={(e) => setPin(e.target.value)}
            value={pin}
          />

          <p>Narration</p>
          <input
            title="Narration"
            className="app__OtherBankTransfer-input"
            placeholder="Narration"
            
            onChange={(e) => setNarration(e.target.value)}
            value={narration}
          />

          {error && <p>{error}</p>}

          <input
            name="Send Money"
            value="Send Money"
            className="app__OtherBankTransfer-input  sendMoney"
            type="button"
            onClick={()=>submitTransfer(userName, accountNumber, bankCode, narration, pin)}
          />

        </div>
      </div>
    </div>
  );
}

export default OtherBankTransfer;
