import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthAuthContext } from "../context/AuthAuth";

export const RequireAuth = ({ children }) => {
    const {user} = useContext(AuthAuthContext);

    if (!user){
        return <Navigate to={`account//login`} />
    }

    return children;
}