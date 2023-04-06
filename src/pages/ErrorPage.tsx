import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage = ():React.ReactElement => {
    const error = useRouteError();
    console.log(error) //TODO: try useLayoutEffect()
    return (
        <h1> Something went wrong! </h1>
    )
}