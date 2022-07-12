import React from 'react'

function ResetPassword() {
  return (
    <div className='app__resetPassword-container'> 
    <div className='app__resetPassword-form'>
    
        <h2 className='app__resetPassword-h2'>Reset Password</h2>
            
           
            <form >
            <div>

              <div className='inputField'>

              <label className = 'app__resetPassword-label' > New Password</label>

            <input type="password" placeholder="Enter your new Password" className = 'app__resetPassword-input' />
            </div>
            
            <div className='inputField'> 
            <label className = 'app__resetPassword-input'> Confirm Password</label>

            <input type="password" placeholder="re-enter your Password" className = 'app__resetPassword-input'/>
            </div>

            </div>

            <div className='app__resetPassword-btnDiv'>
            <button action =''  className = 'app__resetPassword-resetBtn' name = "Reset Password"> Reset Password </button>
            </div>

            </form>         
   
         </div>


    <div className='app__resetPassword-picture'> </div>
    </div>
  );
};

export default ResetPassword