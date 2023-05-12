import { Outlet, Navigate } from "react-router-dom"
import { getItemWithExpiration } from "../hooks/handleSession";

const ProtectedRoute = () => {
  const isLoggedIn = getItemWithExpiration("sessionID") ? true : false;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute