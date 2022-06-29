import React from "react"
import hiw_img from "./hiw_img.png"
import classes from "./howItWorks.module.css"

export default function HowItWorks() {
    return (
        <div className={classes.container}>
            <section className={classes.left}>
                <h1>How it works</h1>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.
                </p>
                <div className={classes.left_card}>
                    <div className={classes.pointer}>
                        <div className={classes.circle}></div>
                        <div className={classes.line}></div>
                    </div>
                    <div className={classes.content}>
                        <h4>STEP ONE</h4>
                        <h2>Sign in or Sign up your account</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Feugiat eget ipsum, sed praesent.
                        </p>
                    </div>                 
                </div>
                <div className={classes.left_card}>
                    <div className={classes.pointer}>
                        <div className={classes.circle}></div>
                        <div className={classes.line}></div>
                    </div>
                    <div className={classes.content}>
                        <h4>STEP TWO</h4>
                        <h2>Click transfer on your dashboard</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Feugiat eget ipsum, sed praesent.
                        </p>
                    </div>                 
                </div>
                <div className={classes.left_card}>
                    <div className={classes.pointer}>
                        <div className={classes.circle}></div>
                        <div className={classes.line}></div>
                    </div>
                    <div className={classes.content}>
                        <h4>STEP THREE</h4>
                        <h2>Select your desire bank and send</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Feugiat eget ipsum, sed praesent.
                        </p>
                    </div>                 
                </div>
            </section>
            <section className={classes.right}>
                <img alt="how_it_works_img" src={hiw_img}></img>
            </section>
        </div>
    )
}