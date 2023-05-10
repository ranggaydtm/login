import React from 'react'
import { GoogleLogin } from '@react-oauth/google'

const clientID = 'Your_Client_Id.apps.googleusercontent.com';


function login() {
    const onSuccess = (response) => {
        console.log(response);
    }
    const onError = (error) => {
        console.log(error);
    }

  return (
    <div>
        <GoogleLogin
        clientID={clientID}
        buttonText='Login'
        onSuccess={onSuccess}
        onError={onError}
        style={{marginTop: '100px'}} 
        />
    </div>
  )
}

export default login