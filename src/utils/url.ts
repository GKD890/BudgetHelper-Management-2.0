const protocol = "http://"
const domain = "localhost"
const port= "3000";
/* -------------------------------------------------------------------------- */
/*                          Users and Authentication                          */
/* -------------------------------------------------------------------------- */
export const recordUrl = protocol+domain+":"+port+"/record/";



/* -------------------------------------------------------------------------- */
/*                                 CRUD Record                                */
/* -------------------------------------------------------------------------- */
export const signUpUrl = protocol+domain+":"+port+"/auth/signup";
export const loginUrl = protocol+domain+":"+port+"/auth/login";
export const logoutUrl = protocol+domain+":"+port+"/auth/logout";