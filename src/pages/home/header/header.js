import React from "react";
import "./header.css";


const Header = () => {
  return (
    <div>
      <div>
        <div className="header">
          <header className="header-header">
            <div className="header-logo">
              <h2 className="logo">Fintech.africa</h2>
            </div>
            <nav className="header-nav">
              <ul className="header-ul">
                <li className="header-li">
                  <a> <span>Home</span> </a>
                </li>
                <li className="header-li">
                  <a> Feature </a>
                </li>
                <li className="header-li">
                  <a> About </a>
                </li>
                <li className="header-li">
                  <a> Contact Us </a>
                </li>
              </ul>
              <div className="header-end">
                <ul>
                  <li className="header-li">
                    <a> Login </a>
                  </li>
                </ul>
                <button>Create an account</button>
              </div>
            </nav>
          </header>
        </div>

        <div className="section1">
          <section>
            <div className="section1-a">
              <h1>
                Quick and easy payment
                <br /> platform for all your
                <br /> transactions
              </h1>
              <p>
                save and manage all you transactions in one place, easy payment,
                <br />
                anytime & anyday.
              </p>
              <button>Create an account</button>
            </div>
            <div className="section1-b">
              <ul>
                <li>Easy Transfer</li>
                <li>Verified Payment</li>
                <li>Pay on the go</li>
              </ul>
              <img className="transfericon" src="../images/transfericon.svg" alt="" />
              <img className="verifiedtick" src="../images/verifiedthick.svg" alt="" />
              <img className="cardicon" src="../images/cardicon.svg" alt="" />
              <img className="polygon" src="../images/polygon.svg" alt="" />
            </div>
            <div className="section1-c">
              <img src="../images/img.svg" alt="" />
            </div>
            <div className="section1-d">
              <p>Payment Successful</p>
              <img className="paymentTick" src="../images/paymentTick.svg" alt="" />
            </div>
          </section>
        </div>

        <div className="section2">
          <section>
            <div className="section2-a">
              <h1>
                Get the convinience
                <br /> of transacting with
                <br /> our services
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Feugiat eget ipsum, sed praesent.
              </p>
            </div>
            <div className="section2-b">
              <div>
              <img className="icon30" src="../images/secretfold.svg" alt="" />
                <p>
                  Keeping <br />
                  secrecy
                </p>
              </div>
              <div>
              <img className="icon30" src="../images/30.svg" alt="" />
                <p>
                  convinience <br />
                  transaction
                </p>
              </div>
              <div>
              <img className="icon30" src="../images/Transaction.svg" alt="" />
                <p>
                  Free <br />
                  transaction
                </p>
              </div>
              <div>
              <img className="icon30" src="../images/Security.svg" alt="" />
                <p>
                  security <br />
                  guaranteed
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="section3">
          <section>
            <div className="section3-a">
              <img src="../images/HandCash.svg" alt="" />
            </div>
            <div className="section3-b">
              <h1>
                Choose how you want <br /> to make transfers
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br /> elit onsectetur adipiscing elit onsectetur.
              </p>
            </div>
          </section>
        </div>

        <div className="section4">
          <section>
            <div className="section4-a">
              <h1>How it works</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br /> elit onsectetur adipiscing elit onsectetur.
              </p>
            </div>
            <div className="section4-b">
              <div className="section4-b1">
                <div>
                  <img src="../images/testing.png" alt="" />
                </div>
                <div className="section4-b-div1">
                  <p>STEP ONE</p>
                  <h2>Sign in or Sign up your account</h2>
                  <p id="text1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    <br /> elit onsectetur adipiscing elit onsectetur.
                  </p>
                </div>
                <div>
                  <img src="../images/testing.png" alt="" />
                </div>
                <div className="section4-b-div2">
                  <p>STEP TWO</p>
                  <h2>Click transfer on your dashboard</h2>
                  <p id="text2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    <br /> elit onsectetur adipiscing elit onsectetur.
                  </p>
                </div>
                <div>
                  <img src="../images/testing.png" alt="" />
                </div>
                <div className="stuborn-section" >
                  <p>STEP THREE</p>
                  <h2>Select your desire bank and send</h2>
                  <p id="text3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    <br /> elit onsectetur adipiscing elit onsectetur.
                  </p>
                </div>
                <div className="section4-img">
                    <img src="../images/hiwpic.svg" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Header;
