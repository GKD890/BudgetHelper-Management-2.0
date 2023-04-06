import { useState } from "react";
import { Button, Dropdown, DropdownButton, NavDropdown } from "react-bootstrap";

export function MessageNav(){

    const [messageClick, setMessageClick] = useState(false);
    const clickMessage = () =>{
        setMessageClick(!messageClick);
        }

    return (
        <div className="d-flex justify-content-end me-3">
        <Button  variant="outline-warning" title={"message"} onClick={clickMessage}><i className="bi bi-bell"></i></Button>
        {/* <NavDropdown.Header>Message</NavDropdown.Header> */}
            {messageClick? 
            <div className={`p-1 aria-expand=${messageClick}`}> temp message</div> 
            : null}
        
        
        </div>
    )
}