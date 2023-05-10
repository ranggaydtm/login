import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import './App.css';


function App() {

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className="App">
        <div className='login'>
          <button>
          Login
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </button>
        </div>
    </div>
  );
}

export default App;
