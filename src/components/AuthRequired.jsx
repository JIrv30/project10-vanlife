import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired () {
  const auth = false

  return (
    auth ? 
    <Outlet /> : 
    <Navigate 
      to='/login'
      state={{message: 'You must login first'}}
    />

  )


}