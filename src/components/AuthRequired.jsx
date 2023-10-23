import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired () {
  const isLogedIn = localStorage.getItem('loggedin')
  const location = useLocation()

  if(!isLogedIn) {
    return (
       
      <Navigate 
      to='/login'
      state={{
        message: 'You must login first',
        from: location.pathname
      }}
      replace
      />
      
      )
      
    }
    return <Outlet /> 


}