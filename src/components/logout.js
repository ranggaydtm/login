import React from 'react'
import { GoogleLogout } from '@react-oauth/google'

const clientID = 'Your_Client_Id.apps.googleusercontent.com';


function logout() {
    const onSuccess = (response) => {
        alert('Logout Success');
    }

  return (
    <div>
        <GoogleLogout
        clientID={clientID}
        buttonText='Logout'
        onLogoutSuccess={onSuccess} 
        />
    </div>
  )
}

export default logout