import React from "react";
import "./section2.css"


const Section2 = () =>{
    return(
        <div>
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
        </div>
    )
}

export default Section2;