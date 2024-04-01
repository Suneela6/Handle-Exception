import React from 'react';
import './SignUpButton.css'; // Import the CSS file

const SignUpButton = () => {
  const handleSignUp = () => {
    // Redirect to the specified location
    window.location.href = 'http://localhost:3000'; // Redirect to another port
    // For redirecting to a folder, use file:// protocol
    // window.location.href = 'file:///C:/Users/hp/Downloads/React-Login-Form-main';
  };

  return (
    <button className="sign-up-button" onClick={handleSignUp}>
      Sign Up
    </button>
  );
};

export default SignUpButton;
