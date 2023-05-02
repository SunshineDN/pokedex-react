/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Loader from "../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const Validation = ({ isLogged }) => {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLogged) {
        navigate('/login');
      } else {
        navigate('/');
      }
    }, 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!isLogged && (
        <Loader position={'absolute'} />
      )}
    </div>
  )
}

export default Validation