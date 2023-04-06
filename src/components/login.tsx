import React, { ReactElement, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




type LoginProps = {
    className?: string;
    // submitFunction: () => void;
    authState:boolean;
}

const emptyLogin = {
    userName:"",
    password:""
}

export default function LoginTab(props:LoginProps):ReactElement {
    const [loginInfo, setLoginInfo] = useState(emptyLogin);
    const [loginDisable, setLoginDisable] = useState(false)


    const submitHandler = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setLoginInfo(emptyLogin);
        setTimeout(()=>{
            setLoginDisable(false);
        },3000)
  
    }

    const handleValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name,value} = e.target
        setLoginInfo(preValue =>{return(
            {...preValue,[name]:value}
        )})}

    

    return(
        <>
        {/* {authState && (<Navigate to="/" replace={true} />)} */}
        <Form onSubmit={submitHandler}>
            
            <Form.Group className={props.className} >
                <Form.Label className='loginLabel' > Users </Form.Label>
                    <Form.Control 
                    type='text' 
                    value={loginInfo.userName} 
                    onChange={handleValue} 
                    name="userName" />
            </Form.Group>   

            <p id='divi'></p>
            <Form.Group className={props.className} >
                <Form.Label className='loginLabel' > Password </Form.Label>
                    <Form.Control className={props.className}
                        placeholder="default password: 1234" 
                        type="password"
                        value = {loginInfo.password} 
                        onChange={handleValue}
                        name="password" />
                    </Form.Group> 

            <Form.Group>

            <Button className='loginButtion' variant="outline-primary" type="submit" disabled={loginDisable}> Login </Button>
            
            </Form.Group>
        </Form>  
        </>    
    )


}
