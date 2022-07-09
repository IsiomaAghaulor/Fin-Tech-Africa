import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LocalTransferPage.css";
import axios from "axios";
import LocalTransferService from "./LocalTransferService";
import { useToasts } from "react-toast-notifications";

const LocalTransferPage = () => {
  const navigate = useNavigate();

  const { addToast } = useToasts();

  const [activeTab, setActiveTab] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [user, setUser] = useState({
    accountNumber: "",
    accountName: "",
    amount: "",
    pin: "",
    narration: "",
  });
  const { accountNumber, accountName, amount, pin, narration } = user;

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  async function resolveAcc(accountNum) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/v1/transfers/resolveLocalAccount/${accountNum}`
      );

      if (response.data.result) {
        setUser({
          ...user,
          accountName: response.data.result,
        });
        setErrorMessage("");
        return;
      }
      setUser({
        ...user,
        accountName: "",
      });
      setErrorMessage(response.data.message);
    } catch (error) {
      setUser({
        ...user,
        accountName: "",
      });

      setErrorMessage("An Error Occured, Please try again later!!");
    }
  }

  useEffect(() => {
    if (accountNumber.length === 10) {
      resolveAcc(accountNumber);
    }

    if (
      (accountNumber.length < 10 || accountNumber.length > 10) &&
      accountName
    ) {
      setUser({
        ...user,
        accountName: "",
      });
      setErrorMessage("account not found");
    }
  }, [accountNumber]);

  const header = { Authorization: localStorage.getItem("accessToken") };
  const saveTransaction = (e) => {
    e.preventDefault();

    LocalTransferService.saveTransaction(user, header)
      .then((response) => {
        addToast("Transfer successfull!!", { appearance: "success" });
        setUser({
          accountNumber: "",
          accountName: "",
          amount: "",
          pin: "",
          narration: "",
        });
      })
      .catch((error) => {
        console.log(error);
        addToast("An error occured please try again later!!", {
          appearance: "error",
        });
      });
  };

  return (
    <div className="localTransferPage">
      <div className="localTransferPage__wrapper">
        <div className="localTransferPage__side">
          <p>&larr;</p>
          <button className="side_link" onClick={() => navigate(-1)}>
            {" "}
            Go back
          </button>
        </div>

        <div className="localTransferPage__top">
          <p>TRANSFER</p>
        </div>

        <div className="localTransferPage__transfers">
          <p
            className={`${activeTab ? "localTransferPage__local" : ""}`}
            onClick={() => setActiveTab(!activeTab)}
          >
            Local Transfer
          </p>
          <p
            className={`${activeTab ? "" : "localTransferPage__local"}`}
            onClick={() => setActiveTab(!activeTab)}
          >
            Other Bank Transfer
          </p>
        </div>
        <hr></hr>

        <div className="localTransferPage__body">
          <div className="localTransferPage__content">
            <label>Account Number</label>
            <input
              value={accountNumber}
              type="text"
              name="accountNumber"
              onChange={(e) => handleChange(e)}
              placeholder="Account number"
            />
          </div>

          <div className="localTransferPage__content">
            <label>Account Name</label>
            <input
              value={accountName}
              disabled
              type="text"
              name="accountName"
              placeholder="Account Name"
            />
          </div>
          {errorMessage && (
            <div>
              <h5>{errorMessage}</h5>
            </div>
          )}

          <div className="localTransferPage__content">
            <label>Amount</label>
            <input
              value={amount}
              type="text"
              name="amount"
              onChange={(e) => handleChange(e)}
              placeholder="Amount"
            />
          </div>

          <div className="localTransferPage__content">
            <label>Pin</label>
            <input
              value={pin}
              type="password"
              name="pin"
              onChange={(e) => handleChange(e)}
              placeholder="Pin"
            />
          </div>

          <div className="localTransferPage__content">
            <label>Narration</label>
            <input
              value={narration}
              type="text"
              name="narration"
              onChange={(e) => handleChange(e)}
              placeholder="Narration"
            />
          </div>

          <div className="localTransferPage__content">
            <button
              onClick={saveTransaction}
              className="localTransferPage__button"
            >
              Send Money
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalTransferPage;
