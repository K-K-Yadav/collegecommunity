// LoginSignup.jsx
import React from 'react';

const LoginSignup = () => {
  return (
    <div className='Loginsignup'>
      <div className="Loginsignup-container">
          <h1>Signup</h1>
          <div className="Loginsignup-fields">
            <input type="text" placeholder="Enter your name"/>
            <input type="email" placeholder="Enter your email"/>
            <input type="password" placeholder="Enter your password"/>
          </div>
      <button>Signup</button>
      <p className='Loginsignup-login'>Already have an account? Login</p>
        <div className="Loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
