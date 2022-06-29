import React from 'react'
import { FaFacebookF } from "react-icons/fa";
 import {FaTwitter} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGoogle} from 'react-icons/fa';
import CustomNav from "./CustomNav/CustomNav";
import  './footer.css';

 

const Footer = () => {
  return (
    <>
        <footer>
        <div className='container container-flex'>
        <div>
            <h4>Fintech.africa</h4>
        </div>
        <div className="footerNavs">
        <CustomNav path='/'>Home</CustomNav>
                <CustomNav path='/features'>Features</CustomNav>
                <CustomNav path='/about'>About</CustomNav>
                <CustomNav path='/contactUs'>Contact Us</CustomNav>
                </div>
                
        <div className='icons'>
            <FaFacebookF className='icon'/>
            <FaTwitter className='icon'/>
            <FaLinkedinIn className='icon'/>
            <FaGoogle className='icon'/>
        </div>

        </div>



       <div className='container1 container-flex2'>
        <div className='copyright'>
        <p>&copy; {new Date().getFullYear()} All rights reserved </p> 
        </div>

        <div className='privacy-policy'>
        <div><p>Privacy Policy</p></div>
            <div><p>Privacy Policy</p></div>
           <div><p>Terms of Condition</p></div> 
            <div><p>Legal</p></div>
            <div><p>Help</p></div>
        </div>

        <div className='version'>
        <p>English Version</p>
        </div>

        </div>

        </footer>
    </>
  )
}

export default Footer