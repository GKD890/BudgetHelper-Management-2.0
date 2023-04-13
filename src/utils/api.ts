import axios from "axios"
import { loginUrl, logoutUrl, recordUrl, signUpUrl } from "./url";


/* -------------------------------------------------------------------------- */
/*                          Users and Authentication                          */
/* -------------------------------------------------------------------------- */
export const signUpUser = async (username:string,email:string,password:string) => {
    try {
        const {status,data} = await axios.post(signUpUrl,{
                username:username,
                email:email,
                password:password,},
                {
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                }
        )
        return data;
    } catch(err) {
        if(axios.isAxiosError(err)){
            console.log(`Error message: ${err.message}`)
        } else {
            console.log(`Unexpected error:`, err)
        }
    }
}

export const loginUser = async (username:string,password:string) => {
    const param = new URLSearchParams()
    try {
        const {status,data} = await axios.post("http://localhost:3000/auth/login",{
            username:username,
            password:password,},
            {
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
            },
            
        })
        return data;
    } catch(err) {
        if(axios.isAxiosError(err)){
            console.log(`Error message: ${err.message}`)
        } else {
            console.log(`Unexpected error:`, err)
        }
    }
}

export const logoutUser = async () => {
    try {
        const {status,data} = await axios.post(logoutUrl);
        return status;
    } catch(err) {
        if(axios.isAxiosError(err)){
            console.log(`Error message: ${err.message}`)
        } else {
            console.log(`Unexpected error:`, err)
        }
    }
}


/* -------------------------------------------------------------------------- */
/*                                 CRUD Record                                */
/* -------------------------------------------------------------------------- */

export const getRecord = async () => {
    try{
        const {data,status} = await axios.get(recordUrl)
        return data;
    } catch(err) {
        console.warn(err);
    }
}