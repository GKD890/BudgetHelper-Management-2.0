import { Dispatch, ReactComponentElement, ReactElement, ReactNode, Reducer, createContext, useEffect, useReducer } from "react";

type authState = {
    name:Object | null | undefined;
    loading:boolean;
    error:string | null | undefined | Object;
}

type authProviderProps = {
    children:ReactNode;
}

const InitialAuthState:authState = {
    name: undefined,
    loading:false,
    error:undefined
}

type authAction = 
    {type:"LOGIN_START"} |
    {type:"LOGIN_SUCCESS",payload:Object} |
    {type:"LOGIN_FAILURE",payload:Object} |
    {type:"LOGOUT"};
    




function authReducer(state:authState,action:authAction)  {
    switch(action.type){
        case "LOGIN_START":
            return state ={
                name:null,
                loading:true,
                error:null
            }
        case "LOGIN_SUCCESS":
            return state ={
                name:action.payload,
                loading:false,
                error:null
            }
        case "LOGIN_FAILURE":
            return state ={
                name:null,
                loading:false,
                error:action.payload
            }
        case "LOGOUT": 
            return state ={
                name:null,
                loading:false,
                error:null
            }
        default:
            return state ={
                name:localStorage.getItem("user") || undefined,
                loading:true,
                error:null
            }
        }
    
}

type authContextAction = {
    state:authState;
    dispatch: Dispatch<authAction>;
}

export const AuthContext = createContext<authContextAction>({
    state:InitialAuthState,
    dispatch:() => null,
}); 

export const AuthContextProvider = (props:authProviderProps) => {
    const [state,dispatch] = useReducer<Reducer<authState,authAction>>(authReducer,InitialAuthState);

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(state.name));
    },[state.name])

    return(
        <AuthContext.Provider value={{state,dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}


