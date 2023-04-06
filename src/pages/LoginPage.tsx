import { useEffect, useLayoutEffect } from "react";
import { Container } from "react-bootstrap";
import { NavLink, Routes, useNavigate } from "react-router-dom";
import LoginTab from "../components/login";
import { INavbar } from "../components/navbar";
import { useUser } from "../context/auth";
// import s from "./LoginPage.css" ;
// import "./LoginPage.css";
import "./LoginPage.css";

export const LoginPage = ():React.ReactElement => {
  // const {authState} = useUser();
  const {}
  const nav = useNavigate()
  
  useLayoutEffect(()=>{
    if (authState){
      console.log("redirect from login page")
      return nav('/');
    }
  },[authState,nav]);
  
  // if(authState ){
    
  //   console.log("redirect from Navlink @LoginPage")
  //   return <NavLink to={"/"}></NavLink>
  // }
  // else {
    return (
    <>
      <INavbar />
      <Container className="bg-light mg-5" >
        <LoginTab className="form-group" authState={authState}  />
      </Container>
    </>
      
    );
  // }   
}