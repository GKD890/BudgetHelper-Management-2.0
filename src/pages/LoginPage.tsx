import { useContext, useEffect, useLayoutEffect } from "react";
import { Container } from "react-bootstrap";
// import { NavLink, Routes, useNavigate } from "react-router-dom";
import LoginTab from "../components/login";
import { INavbar } from "../components/navbar";

import { AuthContext } from "../hooks/authContext";

export const LoginPage = ():React.ReactElement => {
  const {state} = useContext(AuthContext);
  // const nav = useNavigate()
  
  // useLayoutEffect(()=>{
  //   if (authState){
  //     console.log("redirect from login page")
  //     return nav('/');
  //   }
  // },[authState,nav]);
  
  // if(authState ){
    
  //   console.log("redirect from Navlink @LoginPage")
  //   return <NavLink to={"/"}></NavLink>
  // }
  // else {
    return (
    <>
      <INavbar />
      <Container className="bg-light mg-5" >
        <LoginTab className="form-group" authState={state.loading}  />
      </Container>
    </>
      
    );
  // }   
}