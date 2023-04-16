// import { useContext, useState } from "react"
// import { loginUser, logoutUser, signUpUser } from "../utils/api";
// import { AuthContext } from "./authContext";

// const emtpyUser = {
//     _id:"",
//     email:"",
//     username:"",
//     serverList:[],
//     dcId:""
// }

// export const useSignUp = async (username:string,email:string,password:string) => {
//     const {dispatch} = useContext(AuthContext);
//     // const [user,setUser] = useState(emtpyUser);

//         try{
//             dispatch({type:"LOGIN_START"});
//             const data = await signUpUser(username,email,password);
//             if (data){
//                 dispatch({type:"LOGIN_SUCCESS",payload:data});
//                 // setUser(user)
//             }
//             return data.user;
//         } catch (err) {
//             // convert to typescript error type
//             let errorMessage = {};
//             if(err instanceof Error) errorMessage = err;
//             dispatch({type:"LOGIN_FAILURE",payload:errorMessage})
//         }
// }

// export const LoginUser = async (username:string,password:string) => {
//     const {dispatch} = useContext(AuthContext);
    
//     try{
//         dispatch({type:"LOGIN_START"});
//         const data= await loginUser(username,password);
//         if(data) {
//             dispatch({type:"LOGIN_SUCCESS",payload:data.user})
//             return data.user;
//         }
//     } catch (err){
//         let errorMessage = {};
//         if(err instanceof Error) errorMessage = err;
//         dispatch({type:"LOGIN_FAILURE",payload:errorMessage})            
//     }
// }

// export const useLogout = async () => {
//     const {dispatch} = useContext(AuthContext);

//     try {
//         const status = logoutUser();
//         dispatch({type:"LOGOUT"})
//         return status;
//     } catch (err){
//         let errorMessage = {};
//         if(err instanceof Error) errorMessage = err;
//         dispatch({type:"LOGIN_FAILURE",payload:errorMessage})            
//     }
// }