import { Button, Dropdown, Form, Nav, NavDropdown, NavItem, NavLink } from "react-bootstrap";

// import { useLogin } from "../hooks/useGetData";

export function AvtarNav(props:{className?:string;}){
    const {name,logOut} =useUser();
    // const logoutData = useLogin()
    const logoutEvent = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        logOut();
    }

    return(
        <NavDropdown title={name} className={props.className} >
            <Nav.Item className="p-1 m-1" >
                <NavLink className="text-center m-1 breadcrumb-item">
                    Profile
                </NavLink>
                <NavLink className="text-center m-1 breadcrumb-item">Settings</NavLink>
                
                    <NavDropdown.Divider />
                    <Form className="w-100 text-center" onSubmit={logoutEvent}>
                        <Button className='loginButtion w-100' variant="outline-danger" type="submit" >
                            Logout
                        </Button>
                    </Form>
                
            </Nav.Item>                 
        </NavDropdown>
                        
    )
}