import React from 'react';
import './Hero4.css';
import Hero4Img from "../images/fintechimggirl3.png";

const Hero4 = () => {
  return (
    <>
    <div className='hero4Container'>

<div className='hero4-text-container'>
<div className='hero4-title-left'>
    <h2>How it works</h2>
    <p>Lorum ipsum dolor sit amet 
    consectetur adipiscing elit. 
    Feugiat eget ipsum sed praesent </p>
</div>

<div className='hero4-instructionsContainer-left'>
    <small>STEP ONE</small>
    <h3>Sign in or Sign up your account</h3>
    <p>Lorum ipsum dolor sit amet consectetur 
    adipsiscing elit. Feugiat eget ipsum sed 
    praesent</p>

    <small>STEP TWO</small>
    <h3>Click transfer on your dashboard</h3>
    <p>Lorum ipsum dolor sit amet consectetur 
    adipsiscing elit. Feugiat eget ipsum sed 
    praesent</p>

    <small>STEP THREE</small>
    <h3>Select your desired bank and send</h3>
    <p>Lorum ipsum dolor sit amet consectetur 
    adipsiscing elit. Feugiat eget ipsum sed 
    praesent</p>
</div>
</div>

<div className='hero4ImgContainer-right'>
    <img src={Hero4Img} alt='fintechimggirl3' />
</div>

</div>

    </>
  )
}

export default Hero4;