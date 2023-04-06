import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/auth";
import gitIcon from "../media/GitHub-Mark-64px.png"
import { logoutUrl } from "../utils/constants";


export function INavbar(){
    const [messageClick, setMessageClick] = useState(false);
    const nav = useNavigate();
    const {
        name,
        avatar,
        authState,
        logOut} = useUser();

    const clickMessage = () =>{setMessageClick(!messageClick);}

    const logoutEvent = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            const {data,status} = await axios.post(logoutUrl,{
                headers: {
                    "Access-Control-Allow-Origin": "*",                  
                }
            }
            );
            console.log(`${status}: logout user ${data} `)
            logOut();
            return data;
        } catch(error){ console.log(error)}
        
        // nav("/");
    }
    return(
        <Navbar sticky="top" className="bg-white darkmode:bg-dark shadow-sm mb-5"  >
            <Container style={{height:"60px"}}>
                <Nav className="w-100" >
                    <Nav.Link href="/" className="me-3">
                        Home
                    </Nav.Link>

                    <NavDropdown title="Server List" className="me-3">
                        {}
                        <NavDropdown.Item> Current Server </NavDropdown.Item>
                    </NavDropdown>
                    

                    <Nav.Link href="/record" className="ms-1 me-auto">
                        Record
                    </Nav.Link> 

                    {authState?
                    (
                        <>
                        <NavDropdown title={name} className="me-3">
                            <Nav.Item className="w-100 p-2">
                                    <form onSubmit={logoutEvent}>
                                        <Button className='sm-loginButtion' variant="outline-danger" type="submit" >
                                            Logout
                                        </Button>
                                    </form>
                            </Nav.Item>
                        </NavDropdown >
                        
                        <Button onClick={clickMessage} className="me-3 ">
                            <i className="bi bi-bell"></i>
                            <span className="position-abosolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                <span className="visually-hidden"> New alerts</span>
                            </span>
                        </Button>
                        {messageClick? <DropdownItem> temp message </DropdownItem> : null}
                        </>
                    ) 
                    : <Nav.Link href="/login"  style={{position:"relative"}} > 
                            <Button variant="primary">
                                Login
                            </Button> 
                        </Nav.Link>
                    }
                       
                    <Nav.Link href="https://github.com/GKD890/BudgetHelper-Management"  style={{position:"relative"}}>
                        <i className="bi bi-github"></i>
                    </Nav.Link>
                      
                    
                </Nav>
            </Container>
        </Navbar>
    )
}