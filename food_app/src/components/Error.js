import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <>
        <h1>OOps!!!</h1>
        <h3>Something Went Wrong</h3>
        <h3>Error Status: {err.status}</h3>
        <h4>Error Message: {err.error.message}</h4>
        </>
    )
}
export default Error;