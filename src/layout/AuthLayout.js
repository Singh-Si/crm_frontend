import React from 'react'
import Login from '../components/Authentication/Login'
import UnAuthorised from '../components/Authentication/UnAuthorised'
import ForgotPassword from '../components/Authentication/ForgotPassword'
function AuthLayout() {
  return (
    <div>
        <Login/>
        <UnAuthorised/>
        <ForgotPassword/>
    </div>
  )
}

export default AuthLayout